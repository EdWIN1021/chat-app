import React, { useState } from "react";
import { fireStore } from "../../firebase/config";
import {
  isEmpty,
  isUserExist,
  isYourSelf,
  isFriend,
  sentRequest,
} from "../../Validator/validator";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
const AddFriendDialog = ({ currentUser }) => {
  const [open, setOpen] = React.useState(false);
  const [searchId, setSearchId] = useState("");
  const [error, setError] = useState("");

  const handleOnClick = async (e) => {
    if (isEmpty(searchId)) {
      return setError("Please enter a ID");
    }

    if (isYourSelf(currentUser, searchId)) {
      return setError("You cannot add yourself");
    }

    if (!(await isUserExist(searchId))) {
      return setError("User does not exist");
    }

    if (await isFriend(currentUser, searchId)) {
      return setError("This guy is your friend");
    }

    if (await sentRequest(currentUser, searchId)) {
      return setError("You cannot sent same request to this guy");
    }

    await fireStore
      .collection("users")
      .doc(searchId)
      .collection("requests")
      .add({
        id: currentUser.uid,
        displayName: currentUser.displayName,
      });

    setError("");
  };
  const handleOnChange = (e) => {
    setSearchId(e.target.value);
  };
  return (
    <>
      <IconButton color="inherit" onClick={() => setOpen(true)}>
        <AddIcon />
      </IconButton>
      <Dialog
        open={open}
        fullWidth
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Your Friend ID</DialogTitle>
        {error !== "" ? <ErrorMessage error={error} /> : null}

        <DialogContent>
          <TextField
            required
            autoFocus
            fullWidth
            margin="dense"
            onChange={handleOnChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnClick} color="primary" autoFocus>
            Agree
          </Button>
          <Button onClick={() => setOpen(false)} color="primary" autoFocus>
            Cancle
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddFriendDialog;
