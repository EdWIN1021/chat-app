import { auth } from "../../firebase/config";
import { Menu, Icon, Label, Button } from "semantic-ui-react";
import AddFriendModal from "../add.friend.modal/AddFriendModal";
const TheMenu = ({ currentUser }) => {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <Menu>
      <Menu.Item>Hello, {currentUser.displayName}</Menu.Item>
      <Menu.Item>
        <Icon name="mail" /> 23
      </Menu.Item>
      <Menu.Item>Your ID:{currentUser.uid}</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          <AddFriendModal />
        </Menu.Item>

        <Menu.Item name="Log Out">
          <Button onClick={handleSignOut} primary>
            LogOut
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default TheMenu;
