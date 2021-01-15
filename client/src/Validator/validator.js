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
  await fireStore
    .collection("friends")
    .doc("users")
    .collection(currentUser.uid)
    .where("uid", "==", searchId)
    .get()
    .then((snapshot) => {
      if (snapshot.docs[0] !== undefined) {
        found = true;
      }
    });

  return found;
};

export const sentRequest = async (currentUser, searchId) => {
  let found = false;
  await fireStore
    .collection("requests")
    .doc("users")
    .collection(searchId)
    .where("uid", "==", currentUser.uid)
    .get()
    .then((snapshot) => {
      if (snapshot.docs[0] !== undefined) {
        found = true;
      }
    });

  return found;
};
