import React, { useState, useEffect } from "react";
import "./contact.panel.style.css";
import { fireStore } from "../../firebase/config";
import { useSelector } from "react-redux";
import { Grid, List } from "@material-ui/core";
import FriendItem from "../FriendItem/FriendItem";

const ContactPanel = () => {
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
    <Grid item xs={3}>
      <List className="friend-list">
        {fetching === false ? (
          <>
            {friendList.map((friend) => (
              <FriendItem key={friend.id} friend={friend} />
            ))}
          </>
        ) : null}
      </List>
    </Grid>
  );
};

export default ContactPanel;
