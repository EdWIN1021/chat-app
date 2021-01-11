import React, { useState } from "react";
import { TextField, Fab } from "@material-ui/core";
import { fireStore } from "../../firebase/config";
import { isEmpty } from "../../Validator/validator";
import { useSelector, useDispatch } from "react-redux";
import SendIcon from "@material-ui/icons/Send";
import "./send.message.css";
import { setUpdateMesaage } from "../../redux/friendReducer/action";
import firebase from "firebase";
const SendMessage = () => {
  const receiver = useSelector(({ friendReducer }) => friendReducer.receiver);
  const currentUser = useSelector(({ friendReducer }) => friendReducer.user);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (isEmpty(message)) {
      return setError("You cannot send empty message");
    } else {
      setError(null);
      await fireStore
        .collection("chats")
        .doc("users")
        .collection(currentUser.uid)
        .doc(receiver.uid)
        .collection("messages")
        .add({
          sender: currentUser.uid,
          name: currentUser.displayName,
          message,
          created: firebase.firestore.FieldValue.serverTimestamp(),
        });

      await fireStore
        .collection("chats")
        .doc("users")
        .collection(receiver.uid)
        .doc(currentUser.uid)
        .collection("messages")
        .add({
          sender: currentUser.uid,
          name: currentUser.displayName,
          message,
          created: firebase.firestore.FieldValue.serverTimestamp(),
        });

      dispatch(setUpdateMesaage(message));
      setMessage("");
    }
  };

  return (
    <form className="message-form" onSubmit={handleOnSubmit}>
      <TextField
        style={{ width: "70%" }}
        id="standard-secondary"
        label={error ? "You cannot send a empty message" : "message"}
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
