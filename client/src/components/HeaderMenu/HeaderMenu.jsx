import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/reducer/selectors";
import { auth } from "../../firebase/config";
import ProfileDialog from "../ProfileDialog/ProfileDialog";
import FriendRequestDialog from "../MenuFriendRequestDialog/FriendRequestDialog";
import AddFriendDialog from "../AddFriendDialog/AddFriendDialog";
import { Button } from "@material-ui/core";

const HeaderMenu = () => {
  const currentUser = useSelector(selectUser);

  const handleSignOut = () => {
    auth.signOut();
  };
  return (
    <div className="menu">
      {currentUser ? (
        <>
          <ProfileDialog />
          <FriendRequestDialog />
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
