import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Skeleton,
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe: Unsubscribe | undefined;
    (async () => {
      if (friend) {
        unsubscribe = onSnapshot(doc(db, "users", friend.userId), async () => {
          setLoading(true);
          setProfile((await getUserProfile(friend.userId)) as Profile);
          setLoading(false);
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
            {loading ? (
              <Skeleton variant="rectangular" width={40} height={40} />
            ) : (
              <Avatar
                src={friend.photoURL || "/static/images/avatar/1.jpg"}
                variant="rounded"
                imgProps={{ referrerPolicy: "no-referrer" }}
              />
            )}
          </ListItemAvatar>
          <ListItemText
            primary={
              loading ? (
                <Skeleton variant="rectangular" width={150} height={20} />
              ) : (
                friend?.displayName
              )
            }
            secondary={
              loading ? (
                <Skeleton
                  variant="rectangular"
                  width={50}
                  height={12}
                  sx={{ marginTop: 1 }}
                />
              ) : profile?.online ? (
                "online"
              ) : (
                "offline"
              )
            }
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
