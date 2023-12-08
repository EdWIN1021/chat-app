import { initializeApp } from "firebase/app";
import { User, getAuth } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
