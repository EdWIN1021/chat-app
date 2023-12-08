import {
  Avatar,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const RequestItem = () => {
  return (
    <>
      <ListItem>
        <ListItemIcon>
          <Avatar src="/static/images/avatar/1.jpg" variant="rounded" />
        </ListItemIcon>
        <ListItemText primary="Single-line item" />
        <Button color="primary">accept</Button>
        <Button color="primary">delete</Button>
      </ListItem>
    </>
  );
};

export default RequestItem;
