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
        <Box className="message-right-content" boxShadow={1}>
          {item.message}
        </Box>
        <Box className="message-name">:{item.name}</Box>
      </Box>
    );
  } else {
    return (
      <Box className="message-left" mb={1}>
        <Box className="message-name">{item.name}:</Box>
        <Box className="message-left-content" boxShadow={1}>
          {item.message}
        </Box>
      </Box>
    );
  }
};

export default MessageItem;
