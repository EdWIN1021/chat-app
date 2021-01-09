import React from "react";
import "./message.item.styles.css";
import { Message } from "semantic-ui-react";
import { SnackbarContent } from "@material-ui/core";
const MessageItem = () => {
  return (
    <>
      <div className="message-right">
        <SnackbarContent
          message="I love snacks."
          style={{ backgroundColor: "#3f51b5" }}
        />
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
