import React, { useEffect, useState } from "react";
import "./message.styles.css";
import SendMessage from "../send.message/SendMessage";
import { fireStore } from "../../firebase/config";
import { useSelector } from "react-redux";
import MessageItem from "../message.item/MessageItem";
const MessageBox = () => {
  const receiver = useSelector(({ friendReducer }) => friendReducer.receiver);
  const currentUser = useSelector(({ friendReducer }) => friendReducer.user);
  const [messages, setMessages] = useState([]);
  const [fetching, setFetching] = useState(null);
  useEffect(() => {
    if (receiver !== "") {
      console.log(receiver);
      console.log(currentUser);
      setFetching(true);
      let temp = [];
      const fetchMessages = async () => {
        const friendRef = await fireStore
          .collection("users")
          .doc(currentUser.uid)
          .collection("friends")
          .where("id", "==", receiver.id)
          .get();

        const friendRefId = await friendRef.docs[0].id;

        await fireStore
          .collection("users")
          .doc(currentUser.uid)
          .collection("friends")
          .doc(friendRefId)
          .collection("messages")
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              temp.push(doc.data());
            });
            setMessages(temp);
            setFetching(false);
            temp = null;
          });
      };

      fetchMessages();
    }
  }, [receiver]);

  console.log(messages);
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
