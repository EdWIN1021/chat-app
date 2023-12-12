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
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const RequestItem: React.FC<{
  user: User | undefined | null;
  requestedUser: Profile;
}> = ({ requestedUser }) => {
  const { profile } = useContext(AuthContext);

  const handleAccept = async () => {
    if (profile) await addFriend(profile, requestedUser);
  };

  const handleDelete = async () => {
    if (profile) await deleteRequest(profile, requestedUser.userId);
  };

  return (
    <>
      <ListItem>
        <ListItemIcon>
          <Avatar
            src={requestedUser?.photoURL || "/static/images/avatar/1.jpg"}
            variant="rounded"
            imgProps={{ referrerPolicy: "no-referrer" }}
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
