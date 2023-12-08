import {
  Badge,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
} from "@mui/material";
import { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import RequestItem from "./RequestItem";

const FriendRequestDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton color="inherit" onClick={() => setOpen(true)}>
        <Badge badgeContent={10} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">You have no request</DialogTitle>
        <DialogTitle id="alert-dialog-title">Requests</DialogTitle>

        <DialogContent>
          <List >
            <RequestItem />
            {/* {requestList.map((requestUser) => (
                <RequestItem
                  key={requestUser.uid}
                  currentUser={currentUser}
                  requestUser={requestUser}
                />
              ))} */}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FriendRequestDialog;
