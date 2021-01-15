import React from "react";
import "./message.panel.style.css";
import MessageBox from "../message.box/MessageBox";
import SendMessage from "../send.message/SendMessage";
import { Grid, Box } from "@material-ui/core";
import MessageHeader from "../MessageHeader/MessageHeader";
import { useSelector } from "react-redux";

const MessagePanel = () => {
  const receiver = useSelector(({ friendReducer }) => friendReducer.receiver);
  return (
    <Grid item xs={9}>
      {receiver !== "" ? (
        <Box>
          <MessageHeader />
          <MessageBox />
          {/* <SendMessage /> */}
        </Box>
      ) : null}
    </Grid>
  );
};

export default MessagePanel;
