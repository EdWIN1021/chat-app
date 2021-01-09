import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

const ProfileDialog = ({ currentUser }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <IconButton color="inherit" onClick={() => setOpen(true)}>
        <AccountCircle />
      </IconButton>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Hello, {currentUser.displayName}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ID:{currentUser.uid}
          </DialogContentText>
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
export default ProfileDialog;
