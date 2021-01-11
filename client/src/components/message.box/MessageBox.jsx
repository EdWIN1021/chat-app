import React, { useEffect, useState } from "react";
import "./message.styles.css";
import SendMessage from "../send.message/SendMessage";
import { fireStore } from "../../firebase/config";
import { useSelector, useDispatch } from "react-redux";
import MessageItem from "../message.item/MessageItem";
const MessageBox = () => {
  const receiver = useSelector(({ friendReducer }) => friendReducer.receiver);
  const currentUser = useSelector(({ friendReducer }) => friendReducer.user);
  const updateMessage = useSelector(
    ({ friendReducer }) => friendReducer.updateMessage
  );
  const [gotNewMessage, setGotNewMessage] = useState(null);
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let temp = [];
    fireStore
      .collection("chats")
      .doc("users")
      .collection(currentUser.uid)
      .doc(receiver.uid)
      .collection("messages")
      .orderBy("created")
      .get()
      .then((snapshot) => {
        snapshot.docs.map((doc) => temp.push(doc.data()));
        setMessages(temp);
        temp = null;
      });
  }, [receiver, updateMessage, gotNewMessage]);

  useEffect(() => {
    if (receiver !== "") {
      fireStore
        .collection("chats")
        .doc("users")
        .collection(receiver.uid)
        .doc(currentUser.uid)
        .collection("messages")
        .onSnapshot((snapshot) => {
          setGotNewMessage(snapshot);
        });
    }
  }, [receiver]);

  return (
    <>
      {messages && receiver !== "" ? (
        <div className="message-box">
          <div className="messages">
            {messages.map((item, index) => (
              <MessageItem key={index} item={item} />
            ))}
          </div>
          <SendMessage />
        </div>
      ) : null}
    </>
  );
};

export default MessageBox;
