import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Friend, Profile } from "../types";
import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../contexts/ChatContext";
import { getUserProfile } from "../lib/firebase";

const FriendItem: React.FC<{ friend: Friend }> = ({ friend }) => {
  const { updateChatId, updateReceiver } = useContext(ChatContext);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    (async () => {
      if (friend) {
        const profile = (await getUserProfile(friend.userId)) as Profile;
        setProfile(profile);
      }
    })();
  }, [friend]);

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
              imgProps={{ referrerPolicy: "no-referrer" }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={friend?.displayName}
            secondary={profile?.online ? "online" : "offline"}
          />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default FriendItem;
