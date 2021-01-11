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
import { connect } from "react-redux";
import { setReceiver } from "../../redux/friendReducer/action";

const FriendItem = ({ friend, setReceiver }) => {
  const handleOnClick = () => {
    setReceiver({ uid: friend.uid, displayName: friend.displayName });
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
        <ListItemText
          primary={friend.displayName}
          secondary={
            <Typography component="span" variant="body2" color="textPrimary">
              hi
            </Typography>
          }
        />
        <Typography variant="body2">{"update"}</Typography>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

const mapDispatchToProp = (dispatch) => ({
  setReceiver: (userName) => dispatch(setReceiver(userName)),
});

export default connect(null, mapDispatchToProp)(FriendItem);
