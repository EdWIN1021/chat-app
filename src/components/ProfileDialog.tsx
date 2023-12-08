import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { User } from "firebase/auth";
import React, { Dispatch, SetStateAction } from "react";

const ProfileDialog: React.FC<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  user: User | undefined | null;
}> = ({ open, setOpen, user }) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Hello, {user?.displayName}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ID: {user?.uid}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default ProfileDialog;
