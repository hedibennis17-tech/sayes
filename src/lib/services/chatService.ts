import {
  collection, doc, addDoc, updateDoc, getDoc, getDocs,
  query, orderBy, limit, onSnapshot, serverTimestamp,
  type Unsubscribe,
} from "firebase/firestore";
import { db, COLLECTIONS } from "@/lib/firebase";
import type { ChatRoom, Message } from "@/types";

export async function createChatRoom(
  data: Omit<ChatRoom, "id" | "createdAt">
): Promise<string> {
  const ref = await addDoc(collection(db, COLLECTIONS.chatRooms), {
    ...data,
    createdAt: serverTimestamp(),
  });
  return ref.id;
}

export async function sendMessage(
  roomId: string,
  message: Omit<Message, "id" | "sentAt" | "readBy">
): Promise<string> {
  const ref = await addDoc(
    collection(db, COLLECTIONS.messages(roomId)),
    {
      ...message,
      readBy: [message.senderId],
      sentAt: serverTimestamp(),
    }
  );

  // Update room last message time
  await updateDoc(doc(db, COLLECTIONS.chatRooms, roomId), {
    lastMessageAt: serverTimestamp(),
  });

  return ref.id;
}

export function subscribeToMessages(
  roomId: string,
  callback: (messages: Message[]) => void,
  limitCount = 50
): Unsubscribe {
  const q = query(
    collection(db, COLLECTIONS.messages(roomId)),
    orderBy("sentAt", "asc"),
    limit(limitCount)
  );
  return onSnapshot(q, (snap) => {
    const messages = snap.docs.map((d) => ({ id: d.id, ...d.data() } as Message));
    callback(messages);
  });
}

export async function markMessagesRead(
  roomId: string,
  messageIds: string[],
  userId: string
): Promise<void> {
  await Promise.all(
    messageIds.map((id) =>
      updateDoc(doc(db, `${COLLECTIONS.chatRooms}/${roomId}/messages`, id), {
        readBy: [userId],
      })
    )
  );
}
