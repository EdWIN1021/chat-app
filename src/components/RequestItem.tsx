import {
  Avatar,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Profile } from "../types";
import { User } from "firebase/auth";
import { addFriend, deleteRequest } from "../lib/firebase";

const RequestItem: React.FC<{
  user: User | undefined | null;
  requestedUser: Profile;
}> = ({ requestedUser, user }) => {
  const handleAccept = async () => {
    if (user) await addFriend(user?.uid, requestedUser.userId);
  };

  const handleDelete = async () => {
    if (user) await deleteRequest(user?.uid, requestedUser.userId);
  };

  return (
    <>
      <ListItem>
        <ListItemIcon>
          <Avatar
            src={requestedUser?.photoURL || "/static/images/avatar/1.jpg"}
            variant="rounded"
          />
        </ListItemIcon>
        <ListItemText primary={requestedUser?.displayName} />
        <Button color="primary" onClick={handleAccept}>
          accept
        </Button>
        <Button color="primary" onClick={handleDelete}>
          delete
        </Button>
      </ListItem>
    </>
  );
};

export default RequestItem;
