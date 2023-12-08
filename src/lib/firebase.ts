import { initializeApp } from "firebase/app";
import { User, getAuth } from "firebase/auth";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { Profile } from "../types";

import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APPID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const initUserProfile = async (user: User) => {
  await setDoc(doc(db, "users", user?.uid), {
    displayName: user.displayName,
    photoURL: user.photoURL,
    userId: user?.uid,
  });
};

export const getUserProfile = async (id: string) => {
  const userSnap = await getDoc(doc(db, "users", id));

  if (userSnap.exists()) {
    return userSnap.data();
  }

  return null;
};

export const sendFriendRequest = async (
  receiverId: string,
  senderId: string
) => {
  await updateDoc(doc(db, "users", receiverId), {
    requests: arrayUnion(senderId),
  });
};

export const addFriend = async (userId: string, senderId: string) => {
  const chatId = uuidv4();

  await updateDoc(doc(db, "users", userId), {
    friends: arrayUnion({ userId: senderId, chatId }),
  });

  await updateDoc(doc(db, "users", senderId), {
    friends: arrayUnion({ userId, chatId }),
  });

  await updateDoc(doc(db, "users", userId), {
    requests: arrayRemove(senderId),
  });
};

export const deleteRequest = async (userId: string, senderId: string) => {
  await updateDoc(doc(db, "users", userId), {
    requests: arrayUnion(senderId),
  });
};

export const getRequestUserInfo = async (requests: string[]) => {
  const data = [] as Profile[];
  const q = query(collection(db, "users"), where("userId", "in", requests));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => data.push(doc.data() as Profile));
  return data;
};
