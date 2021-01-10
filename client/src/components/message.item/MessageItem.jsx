import React from "react";
import "./message.item.styles.css";
import { Message } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { SnackbarContent, Box } from "@material-ui/core";
const MessageItem = ({ item }) => {
  const currentUser = useSelector(({ friendReducer }) => friendReducer.user);

  if (currentUser.uid === item.sender) {
    return (
      <Box className="message-right" mb={1}>
        <SnackbarContent
          message={item.message}
          style={{ backgroundColor: "#3f51b5" }}
        />
        :{item.sender}
      </Box>
    );
  } else {
    return (
      <Box className="message-left" mb={1}>
        {item.sender}:
        <SnackbarContent
          message={item.message}
          style={{ backgroundColor: "#ffff", color: "black" }}
        />
      </Box>
    );
  }
};

export default MessageItem;
