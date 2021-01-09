import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fireStore } from "../../firebase/config";
import "./friend.list.styles.css";
import FriendItem from "../FriendItem/FriendItem";
const FriendList = () => {
  const [friendList, setFriendList] = useState([]);
  const currentUser = useSelector(({ friendReducer }) => friendReducer.user);

  useEffect(() => {
    fireStore
      .collection("users")
      .doc(currentUser.uid)
      .collection("friends")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          setFriendList((friendList) => [...friendList, doc.data()]);
        });
      });
  });

  return (
    <>
      {friendList ? (
        <div className="friend-list">
          {friendList.map((friend) => (
            <FriendItem key={friend.id} friend={friend} />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default FriendList;
// const mapStateToProps = (state) => {
//   return { friends: state.friendReducer.friends };
// };

// export default connect(mapStateToProps)(FriendList);
