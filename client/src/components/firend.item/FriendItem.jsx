import React from "react";
import { List } from "semantic-ui-react";
import { connect } from "react-redux";
import { setReceiver } from "../../redux/friendReducer/action";

const FriendItem = ({ friend, setReceiver }) => {
  return (
    <List.Item onClick={() => setReceiver(friend.name)}>
      <List.Header>{friend.name}</List.Header>
      <List.Content>{friend.lastMessage}</List.Content>
      <List.Description>updated 10 mins ago</List.Description>
    </List.Item>
  );
};

const mapDispatchToProp = (dispatch) => ({
  setReceiver: (userName) => dispatch(setReceiver(userName)),
});

export default connect(null, mapDispatchToProp)(FriendItem);
