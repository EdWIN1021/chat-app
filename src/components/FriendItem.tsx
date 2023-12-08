import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Profile } from "../types";

const FriendItem: React.FC<{ friend: Profile }> = ({ friend }) => {
  const handleClick = () => {
    console.log("asd");
  };

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemButton onClick={handleClick}>
          <ListItemAvatar>
            <Avatar
              src={friend.photoURL || "/static/images/avatar/1.jpg"}
              variant="rounded"
            />
          </ListItemAvatar>
          <ListItemText primary={friend?.displayName} secondary="hello" />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default FriendItem;
