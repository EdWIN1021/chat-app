import React, { useEffect, useState, useRef } from "react";
import "./message.styles.css";
import SendMessage from "../SendMessage/SendMessage";
import { fireStore } from "../../firebase/config";
import { useSelector } from "react-redux";
import {
  selectReceiver,
  selectUser,
  selectUpdateMessage,
} from "../../redux/reducer/selectors";
import MessageItem from "../MessageItem/MessageItem";
const MessageBox = () => {
  const receiver = useSelector(selectReceiver);
  const currentUser = useSelector(selectUser);
  const updateMessage = useSelector(selectUpdateMessage);
  const [gotNewMessage, setGotNewMessage] = useState(null);
  const lastMessageRef = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ smooth: true });
    }
  });

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
            {messages.map((item, index) =>
              messages.length - 1 === index ? (
                <div key={index} ref={lastMessageRef}>
                  <MessageItem item={item}/>
                </div>
              ) : (
                <MessageItem key={index} item={item} />
              )
            )}
          </div>
        </div>
      ) : null}
      <SendMessage />
    </>
  );
};

export default MessageBox;
