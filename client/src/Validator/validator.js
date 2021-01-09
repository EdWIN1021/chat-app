import { fireStore } from "../firebase/config";

export const isEmpty = (str) => {
  if (str === "") {
    return true;
  }
  return false;
};

export const isYourSelf = (currentUser, userId) => {
  return currentUser.uid === userId;
};

export const isUserExist = async (userId) => {
  const ref = fireStore.collection("users").doc(userId);
  const doc = await ref.get();
  return doc.exists;
};

export const isFriend = async (currentUser, searchId) => {
  let found = false;
  const ref = fireStore
    .collection("users")
    .doc(currentUser.uid)
    .collection("friends");
  const snapshot = await ref.get();
  snapshot.forEach((doc) => {
    if (doc.data().id === searchId) {
      found = true;
    }
  });
  return found;
};

export const sentRequest = async (currentUser, searchId) => {
  let found = false;
  const ref = fireStore
    .collection("users")
    .doc(searchId)
    .collection("requests");
  const snapshot = await ref.get();
  snapshot.forEach((doc) => {
    if (doc.data().id === currentUser.uid) {
      found = true;
    }
  });
  return found;
};
