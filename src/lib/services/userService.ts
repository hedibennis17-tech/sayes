import {
  collection, doc, setDoc, updateDoc, getDoc,
  query, where, getDocs, serverTimestamp, increment,
} from "firebase/firestore";
import { db, COLLECTIONS } from "@/lib/firebase";
import type { UserProfile, Badge, PointTransaction } from "@/types";

// ─── Profile ─────────────────────────────────────────────────
export async function createUserProfile(
  uid: string,
  data: Partial<UserProfile>
): Promise<void> {
  await setDoc(doc(db, COLLECTIONS.users, uid), {
    uid,
    points: 0,
    level: 1,
    badges: [],
    reputation: 0,
    activitiesJoined: 0,
    activitiesOrganized: 0,
    tournamentsPlayed: 0,
    tournamentsWon: 0,
    friendIds: [],
    followerIds: [],
    followingIds: [],
    lookingFor: [],
    isVerified: false,
    isOnline: true,
    role: "USER",
    createdAt: serverTimestamp(),
    lastSeenAt: serverTimestamp(),
    ...data,
  });
}

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const snap = await getDoc(doc(db, COLLECTIONS.users, uid));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as UserProfile;
}

export async function updateUserProfile(
  uid: string,
  data: Partial<UserProfile>
): Promise<void> {
  await updateDoc(doc(db, COLLECTIONS.users, uid), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

// ─── Points ──────────────────────────────────────────────────
export async function awardPoints(
  userId: string,
  amount: number,
  reason: string,
  activityId?: string
): Promise<void> {
  // Update user total
  await updateDoc(doc(db, COLLECTIONS.users, userId), {
    points: increment(amount),
  });

  // Log transaction
  await addPointTransaction({ userId, amount, reason, activityId });

  // Check level up
  const profile = await getUserProfile(userId);
  if (profile) {
    const newLevel = Math.floor(profile.points / 500) + 1;
    if (newLevel > profile.level) {
      await updateDoc(doc(db, COLLECTIONS.users, userId), { level: newLevel });
    }
  }
}

async function addPointTransaction(
  data: Omit<PointTransaction, "id" | "createdAt">
): Promise<void> {
  const { addDoc } = await import("firebase/firestore");
  await addDoc(collection(db, COLLECTIONS.pointTransactions), {
    ...data,
    createdAt: serverTimestamp(),
  });
}

// ─── Badges ──────────────────────────────────────────────────
export async function awardBadge(
  userId: string,
  badge: Omit<Badge, "earnedAt">
): Promise<void> {
  const profile = await getUserProfile(userId);
  if (!profile) return;

  // Don't duplicate
  if (profile.badges.some((b) => b.slug === badge.slug)) return;

  const newBadge: Badge = { ...badge, earnedAt: new Date().toISOString() };
  await updateDoc(doc(db, COLLECTIONS.users, userId), {
    badges: [...profile.badges, newBadge],
  });
}

// ─── Social ──────────────────────────────────────────────────
export async function followUser(
  followerId: string,
  targetId: string
): Promise<void> {
  const [follower, target] = await Promise.all([
    getUserProfile(followerId),
    getUserProfile(targetId),
  ]);
  if (!follower || !target) return;

  await Promise.all([
    updateDoc(doc(db, COLLECTIONS.users, followerId), {
      followingIds: [...follower.followingIds, targetId],
    }),
    updateDoc(doc(db, COLLECTIONS.users, targetId), {
      followerIds: [...target.followerIds, followerId],
    }),
  ]);
}
