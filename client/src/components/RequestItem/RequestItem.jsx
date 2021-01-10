import React from "react";
import { fireStore } from "../../firebase/config";
import { ListItem, ListItemText, Button, Divider } from "@material-ui/core";

const RequestItem = ({ requestUser, currentUser }) => {
  const currentUserRef = fireStore.collection("users").doc(currentUser.uid);
  const requestUserRef = fireStore.collection("users").doc(requestUser.id);

  const handleAccept = async () => {
    const currentUserRequests = currentUserRef.collection("requests");
    const findRequestUser = await currentUserRequests
      .where("id", "==", requestUser.id)
      .get();
    const requestId = findRequestUser.docs[0].id;
    await currentUserRequests.doc(requestId).delete();

    await currentUserRef.collection("friends").add({
      id: requestUser.id,
      displayName: requestUser.displayName,
    });
    await requestUserRef.collection("friends").add({
      id: currentUser.uid,
      displayName: currentUser.displayName,
    });
  };

  const handleDelete = async () => {
    const currentUserRequests = currentUserRef.collection("requests");
    const findRequestUser = await currentUserRequests
      .where("id", "==", requestUser.id)
      .get();
    const requestId = findRequestUser.docs[0].id;
    await currentUserRequests.doc(requestId).delete();
  };

  return (
    <>
      <ListItem alignItems="flex-start" key={requestUser.id}>
        <ListItemText primary={requestUser.displayName} />
        <Button color="primary" onClick={handleAccept}>
          accept
        </Button>
        <Button color="primary" onClick={handleDelete}>
          delete
        </Button>
      </ListItem>
      <Divider />
    </>
  );
};

export default RequestItem;
