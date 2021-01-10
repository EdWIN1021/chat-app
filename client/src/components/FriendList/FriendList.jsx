import React, { useEffect, useState } from "react";
import { fireStore } from "../../firebase/config";
import "./friend.list.styles.css";
import { useSelector } from "react-redux";
import FriendItem from "../FriendItem/FriendItem";
const FriendList = () => {
  const [friendList, setFriendList] = useState(null);
  const [fetching, setFetching] = useState(null);
  const currentUser = useSelector(({ friendReducer }) => friendReducer.user);

  useEffect(() => {
    if (currentUser) {
      setFetching(true);
      let temp = [];
      fireStore
        .collection("users")
        .doc(currentUser.uid)
        .collection("friends")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            temp.push(doc.data());
          });
          setFriendList(temp);
          setFetching(false);
          temp = null;
        });
    }
  }, [currentUser]);

  //监听
  return (
    <>
      {fetching === false ? (
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
