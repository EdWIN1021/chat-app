import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Profile } from "../types";
import { useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";

const FriendItem: React.FC<{ friend: Profile }> = ({ friend }) => {
  const { updateChatId, updateReceiver } = useContext(ChatContext);

  const handleClick = () => {
    updateChatId(friend?.chatId);
    updateReceiver(friend);
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
