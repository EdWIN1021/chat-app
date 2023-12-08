import {
  Avatar,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Profile } from "../types";

const RequestItem: React.FC<{ requestedUser: Profile }> = ({
  requestedUser,
}) => {
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
        <Button color="primary">accept</Button>
        <Button color="primary">delete</Button>
      </ListItem>
    </>
  );
};

export default RequestItem;
