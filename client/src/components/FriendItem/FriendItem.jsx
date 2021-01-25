import React from "react";

import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Divider,
  Avatar,
} from "@material-ui/core";
import "./friend.item.styles.css";
import { useDispatch } from "react-redux";
import { setReceiver } from "../../redux/reducer/action";

const FriendItem = ({ friend }) => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(setReceiver({ uid: friend.uid, displayName: friend.displayName }));
  };

  return (
    <>
      <ListItem
        className="friend-item"
        alignItems="flex-start"
        onClick={handleOnClick}
      >
        <ListItemAvatar>
          <Avatar
            alt={friend.displayName[0]}
            src="/static/images/avatar/1.jpg"
          />
        </ListItemAvatar>
        <ListItemText primary={friend.displayName} />
      </ListItem>
      <Divider />
    </>
  );
};

export default FriendItem;
