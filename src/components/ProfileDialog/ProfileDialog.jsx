import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/reducer/selectors";
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

const ProfileDialog = () => {
  const currentUser = useSelector(selectUser);
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
