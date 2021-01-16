import React from "react";
import "./message.panel.style.css";
import MessageBox from "../MessageBox/MessageBox";
import SendMessage from "../SendMessage/SendMessage";
import { Grid, Box } from "@material-ui/core";
import { selectReceiver } from "../../redux/reducer/selectors";
import MessageHeader from "../MessageHeader/MessageHeader";
import { useSelector } from "react-redux";

const MessagePanel = () => {
  const receiver = useSelector(selectReceiver);
  return (
    <Grid item xs={9}>
      {receiver ? (
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
