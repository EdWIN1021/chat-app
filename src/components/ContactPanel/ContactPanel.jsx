import React, { useState, useEffect } from "react";
import "./contact.panel.style.css";
import { fireStore } from "../../firebase/config";
import { selectUser } from "../../redux/reducer/selectors";
import { useSelector } from "react-redux";
import { Grid, List } from "@material-ui/core";
import FriendItem from "../FriendItem/FriendItem";

const ContactPanel = () => {
  const [friendList, setFriendList] = useState(null);
  const [fetching, setFetching] = useState(null);
  const [numOfFriends, setNumberOfFriends] = useState(null);
  const currentUser = useSelector(selectUser);

  useEffect(() => {
    if (currentUser) {
      setFetching(true);
      let temp = [];
      fireStore
        .collection("friends")
        .doc("users")
        .collection(currentUser.uid)
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
  }, [currentUser, numOfFriends]);

  useEffect(() => {
    fireStore
      .collection("friends")
      .doc("users")
      .collection(currentUser.uid)
      .onSnapshot((snapshot) => setNumberOfFriends(snapshot.size));
  }, []);

  return (
    <Grid className="contact-panel" item xs={3}>
      <List className="friend-list">
        {fetching === false ? (
          <>
            {friendList.map((friend, index) => (
              <FriendItem key={friend.uid} friend={friend} />
            ))}
          </>
        ) : null}
      </List>
    </Grid>
  );
};

export default ContactPanel;
