import React from "react";
import { fireStore } from "../../firebase/config";
import { ListItem, ListItemText, Button, Divider } from "@material-ui/core";

const RequestItem = ({ requestUser, currentUser }) => {
  const handleAccept = async () => {
    await fireStore
      .collection("friends")
      .doc("users")
      .collection(currentUser.uid)
      .doc(requestUser.uid)
      .set({
        uid: requestUser.uid,
        displayName: requestUser.displayName,
      });

    await fireStore
      .collection("friends")
      .doc("users")
      .collection(requestUser.uid)
      .doc(currentUser.uid)
      .set({
        uid: currentUser.uid,
        displayName: currentUser.displayName,
      });

    await fireStore
      .collection("requests")
      .doc("users")
      .collection(currentUser.uid)
      .doc(requestUser.uid)
      .delete();
  };

  const handleDelete = async () => {
    await fireStore
      .collection("requests")
      .doc("users")
      .collection(currentUser.uid)
      .doc(requestUser.uid)
      .delete();
  };

  return (
    <>
      <ListItem alignItems="flex-start" key={requestUser.uid}>
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
