import React, { useEffect, useState } from "react";
import { fireStore } from "../../firebase/config";
import "./friend.list.styles.css";
import { List } from "semantic-ui-react";
import { connect } from "react-redux";
import FriendItem from "../firend.item/FriendItem";
const FriendList = ({ user }) => {
  const [friendList, setFriendList] = useState([]);
  useEffect(() => {
    fireStore
      .collection("users")
      .doc(user.uid)
      .collection("friends")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          setFriendList((friendList) => [...friendList, doc.data()]);
        });
      });
  }, []);
  console.log(friendList);
  return (
    <div className="friend-list">
      <List divided relaxed>
        {friendList.map((friend) => (
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
