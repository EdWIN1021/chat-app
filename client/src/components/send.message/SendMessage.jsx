import React, { useState } from "react";
import { TextField, Fab } from "@material-ui/core";
import { fireStore } from "../../firebase/config";
import { useSelector } from "react-redux";
import SendIcon from "@material-ui/icons/Send";
import "./send.message.css";
import firebase from "firebase";

const SendMessage = () => {
  const receiver = useSelector(({ friendReducer }) => friendReducer.receiver);
  const currentUser = useSelector(({ friendReducer }) => friendReducer.user);
  const [message, setMessage] = useState("");

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (message !== "") {
      const friendRef = await fireStore
        .collection("users")
        .doc(currentUser.uid)
        .collection("friends")
        .where("id", "==", receiver.id)
        .get();

      const currentUserRef = await fireStore
        .collection("users")
        .doc(receiver.id)
        .collection("friends")
        .where("id", "==", currentUser.uid)
        .get();

      const currentUserRefId = await currentUserRef.docs[0].id;
      const friendRefId = await friendRef.docs[0].id;

      await fireStore
        .collection("users")
        .doc(receiver.id)
        .collection("friends")
        .doc(currentUserRefId)
        .collection("messages")
        .add({
          sender: currentUser.uid,
          name: currentUser.displayName,
          message,
          created: firebase.firestore.FieldValue.serverTimestamp(),
        });

      await fireStore
        .collection("users")
        .doc(currentUser.uid)
        .collection("friends")
        .doc(friendRefId)
        .collection("messages")
        .add({
          sender: currentUser.uid,
          name: currentUser.displayName,
          message,
          created: firebase.firestore.FieldValue.serverTimestamp(),
        });

      setMessage("");
    }
  };

  return (
    <form className="message-form" onSubmit={handleOnSubmit}>
      <TextField
        style={{ width: "70%" }}
        id="standard-secondary"
        label="message"
        color="primary"
        value={message}
        onChange={handleOnChange}
      />
      <Fab color="primary" type="submit" aria-label="add">
        <SendIcon />
      </Fab>
    </form>
  );
};

// const mapStateToProps = (state) => ({
//   receiver: state.friendReducer.receiver,
//   friends: state.friendReducer.friends,
// });

// export default connect(mapStateToProps)(SendMessage);

export default SendMessage;
