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
import { db, getUserProfile } from "../lib/firebase";
import { Unsubscribe } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

const FriendItem: React.FC<{ friend: Friend }> = ({ friend }) => {
  const { updateChatId, updateReceiver } = useContext(ChatContext);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    let unsubscribe: Unsubscribe | undefined;
    (async () => {
      if (friend) {
        unsubscribe = onSnapshot(doc(db, "users", friend.userId), async () => {
          setProfile((await getUserProfile(friend.userId)) as Profile);
        });
      }
    })();
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
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
            secondaryTypographyProps={{
              color: profile?.online ? "green" : "red",
            }}
          />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default FriendItem;
