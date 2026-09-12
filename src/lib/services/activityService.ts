import {
  collection,
  doc,
  addDoc,
  updateDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
  serverTimestamp,
  onSnapshot,
  type Unsubscribe,
} from "firebase/firestore";
import { db, COLLECTIONS } from "@/lib/firebase";
import type { Activity, ActivityStatus } from "@/types";

// ─── Create ─────────────────────────────────────────────────
export async function createActivity(
  data: Omit<Activity, "id" | "createdAt" | "updatedAt">
): Promise<string> {
  const ref = await addDoc(collection(db, COLLECTIONS.activities), {
    ...data,
    currentCount: 0,
    participantIds: [],
    waitlistIds: [],
    status: "PUBLISHED" as ActivityStatus,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

// ─── Read one ────────────────────────────────────────────────
export async function getActivity(id: string): Promise<Activity | null> {
  const snap = await getDoc(doc(db, COLLECTIONS.activities, id));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as Activity;
}

// ─── Read many ───────────────────────────────────────────────
export async function getActivitiesByCity(
  cityId: string,
  limitCount = 20
): Promise<Activity[]> {
  const q = query(
    collection(db, COLLECTIONS.activities),
    where("location.city", "==", cityId),
    where("status", "==", "PUBLISHED"),
    orderBy("startsAt", "asc"),
    limit(limitCount)
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Activity));
}

export async function getActivitiesByTemplate(
  templateSlug: string,
  limitCount = 20
): Promise<Activity[]> {
  const q = query(
    collection(db, COLLECTIONS.activities),
    where("templateSlug", "==", templateSlug),
    where("status", "==", "PUBLISHED"),
    orderBy("startsAt", "asc"),
    limit(limitCount)
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Activity));
}

export async function getActivitiesByOrganizer(
  organizerId: string
): Promise<Activity[]> {
  const q = query(
    collection(db, COLLECTIONS.activities),
    where("organizerId", "==", organizerId),
    orderBy("createdAt", "desc")
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Activity));
}

// ─── Realtime ────────────────────────────────────────────────
export function subscribeToActivity(
  id: string,
  callback: (activity: Activity | null) => void
): Unsubscribe {
  return onSnapshot(doc(db, COLLECTIONS.activities, id), (snap) => {
    if (!snap.exists()) {
      callback(null);
    } else {
      callback({ id: snap.id, ...snap.data() } as Activity);
    }
  });
}

// ─── Join / Leave ────────────────────────────────────────────
export async function joinActivity(
  activityId: string,
  userId: string
): Promise<{ success: boolean; waitlisted: boolean }> {
  const activity = await getActivity(activityId);
  if (!activity) throw new Error("Activity not found");

  if (activity.participantIds.includes(userId)) {
    return { success: false, waitlisted: false };
  }

  const isFull = activity.currentCount >= activity.maxParticipants;

  if (isFull) {
    await updateDoc(doc(db, COLLECTIONS.activities, activityId), {
      waitlistIds: [...activity.waitlistIds, userId],
      updatedAt: serverTimestamp(),
    });
    return { success: true, waitlisted: true };
  }

  await updateDoc(doc(db, COLLECTIONS.activities, activityId), {
    participantIds: [...activity.participantIds, userId],
    currentCount: activity.currentCount + 1,
    status: activity.currentCount + 1 >= activity.maxParticipants ? "FULL" : "PUBLISHED",
    updatedAt: serverTimestamp(),
  });
  return { success: true, waitlisted: false };
}

export async function leaveActivity(
  activityId: string,
  userId: string
): Promise<void> {
  const activity = await getActivity(activityId);
  if (!activity) throw new Error("Activity not found");

  const newParticipants = activity.participantIds.filter((id) => id !== userId);
  let newWaitlist = activity.waitlistIds;
  let newCount = newParticipants.length;

  // Promote from waitlist
  if (activity.waitlistIds.length > 0) {
    const promoted = activity.waitlistIds[0];
    newParticipants.push(promoted);
    newWaitlist = activity.waitlistIds.slice(1);
    newCount++;
  }

  await updateDoc(doc(db, COLLECTIONS.activities, activityId), {
    participantIds: newParticipants,
    waitlistIds: newWaitlist,
    currentCount: newCount,
    status: "PUBLISHED",
    updatedAt: serverTimestamp(),
  });
}

// ─── Update ──────────────────────────────────────────────────
export async function updateActivity(
  id: string,
  data: Partial<Activity>
): Promise<void> {
  await updateDoc(doc(db, COLLECTIONS.activities, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}
