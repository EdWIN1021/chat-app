import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Badge,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";

import NotificationsIcon from "@material-ui/icons/Notifications";

const FriendRequestDialog = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <IconButton color="inherit" onClick={() => setOpen(true)}>
        <Badge badgeContent={17} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      {/* request list */}
      {/* name  accept delete */}
      {/* name  accept delete */}
      {/* name  accept delete */}
      {/* ok cancel */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">Requests</DialogTitle>
        <DialogContent>
          <List>
            <ListItem alignItems="flex-start">
              <ListItemText primary="edwin" />

              <Button color="primary" mr={2}>
                accept
              </Button>
              <Button color="primary">delete</Button>
            </ListItem>
            <Divider />
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default FriendRequestDialog;
