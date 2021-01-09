import React from "react";
import { auth } from "../../firebase/config";
import { signOut } from "../../redux/friendReducer/action";

import NotificationsIcon from "@material-ui/icons/Notifications";
import ProfileDialog from "./ProfileDialog/ProfileDialog";
import AddFriendDialog from "./AddFriendDialog/AddFriendDialog";

import { useSelector, useDispatch } from "react-redux";
import { IconButton, Badge, Button } from "@material-ui/core";
const Menu = () => {
  const currentUser = useSelector(({ friendReducer }) => friendReducer.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    auth.signOut().then(() => {
      dispatch(signOut());
    });
  };
  return (
    <div className="menu">
      {currentUser ? (
        <>
          <ProfileDialog currentUser={currentUser} />

          <IconButton color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <AddFriendDialog currentUser={currentUser} />

          <Button color="inherit" onClick={handleSignOut}>
            LOGOUT
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default Menu;
