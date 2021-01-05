import React from "react";
import "./message.panel.style.css";
import { Header } from "semantic-ui-react";
import MessageBox from "../message.box/MessageBox";
import SendMessage from "../send.message/SendMessage";
import { GridColumn } from "semantic-ui-react";
import { connect } from "react-redux";

const MessagePanel = ({ receiver }) => {
  return (
    <GridColumn className="message-panel" width={11}>
      <Header as="h3" block>
        {receiver}
      </Header>
      <MessageBox />
      <SendMessage />
    </GridColumn>
  );
};

const mapStateToProps = (state) => ({
  receiver: state.friendReducer.receiver,
});

export default connect(mapStateToProps)(MessagePanel);
