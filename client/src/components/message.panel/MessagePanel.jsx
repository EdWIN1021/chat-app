import React from "react";
import "./message.panel.style.css";
// import { Header } from "semantic-ui-react";
import MessageBox from "../message.box/MessageBox";
import SendMessage from "../send.message/SendMessage";
import { Grid, Box } from "@material-ui/core";
import { connect } from "react-redux";
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

{
  /* {receiver !== "" ? (
        <Header as="h3" block>
          {receiver}
        </Header>
      ) : null} */
}

const mapStateToProps = (state) => ({
  receiver: state.friendReducer.receiver,
});

export default connect(mapStateToProps)(MessagePanel);
