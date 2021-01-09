import React from "react";
import { auth } from "../../firebase/config";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Menu, Button } from "semantic-ui-react";
import { signOut } from "../../redux/friendReducer/action";
import AddFriendModal from "../add.friend.modal/AddFriendModal";
import FriendListModal from "../request.list.modal/RequestList";
const TheMenu = ({ user }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(signOut());
      
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <Menu>
      <Menu.Item>Hello, {user.displayName}</Menu.Item>
      <Menu.Item>
        <FriendListModal user={user} />
      </Menu.Item>

      <Menu.Item>Your ID:{user.uid}</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          <AddFriendModal user={user} />
        </Menu.Item>

        <Menu.Item name="Log Out">
          <Button onClick={handleSignOut} primary>
            Sign Out
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default TheMenu;
