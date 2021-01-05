import React from "react";
import "./message.item.styles.css";
import { Message } from "semantic-ui-react";
const MessageItem = () => {
  return (
    <>
      <div className="message-right">
        <Message floating>Way to go!</Message>
        :he
      </div>
      <div className="message-left">
        me:
        <Message floating>gg</Message>
      </div>
    </>
  );
};

export default MessageItem;
