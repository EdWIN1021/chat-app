import React, { useState } from "react";
import "./friend.list.styles.css";
import { List } from "semantic-ui-react";
import { connect } from "react-redux";
import FriendItem from "../firend.item/FriendItem";
const FriendList = ({ friends }) => {
  const [currentUser, setCurrentUser] = useState({
    userId: "admin",
    userName: "edwin",
    sendMessage: "",
  });

  return (
    <div className="friend-list">
      <List divided relaxed>
        {friends.map((friend) => (
          <FriendItem key={friend.id} friend={friend} />
        ))}
      </List>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { friends: state.friendReducer.friends };
};

export default connect(mapStateToProps)(FriendList);
