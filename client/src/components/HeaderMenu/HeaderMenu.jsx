import React from "react";
import { auth } from "../../firebase/config";
import { signOut } from "../../redux/friendReducer/action";

import ProfileDialog from "../MenuProfileDialog/ProfileDialog";
import FriendRequestDialog from "../MenuFriendRequestDialog/FriendRequestDialog";
import AddFriendDialog from "../MenuAddFriendDialog/AddFriendDialog";

import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
const HeaderMenu = () => {
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
          <FriendRequestDialog currentUser={currentUser} />
          <AddFriendDialog currentUser={currentUser} />

          <Button color="inherit" onClick={handleSignOut}>
            LOGOUT
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default HeaderMenu;
