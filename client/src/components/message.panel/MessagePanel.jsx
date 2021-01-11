import React from "react";
import "./message.panel.style.css";
import MessageBox from "../message.box/MessageBox";
import SendMessage from "../send.message/SendMessage";
import { Grid, Box } from "@material-ui/core";
import MessageHeader from "../MessageHeader/MessageHeader";

const MessagePanel = () => {
  return (
    <Grid item xs={9}>
      <Box>
        <MessageHeader />
        <MessageBox />
        {/* <SendMessage /> */}
      </Box>
    </Grid>
  );
};

export default MessagePanel;
