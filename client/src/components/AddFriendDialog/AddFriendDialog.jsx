import React, { useState } from "react";
import { fireStore } from "../../firebase/config";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/reducer/selectors";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SuccessMessage from "../SuccessMessage/SuccessMessage";
import {
  isEmpty,
  isUserExist,
  isYourSelf,
  isFriend,
  sentRequest,
} from "../../Validator/validator";

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
const AddFriendDialog = () => {
  const currentUser = useSelector(selectUser);
  const [open, setOpen] = useState(false);
  const [searchId, setSearchId] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleOnClick = async () => {
    if (isEmpty(searchId)) {
      setSuccess(null);
      return setError("Please enter an ID");
    }

    if (isYourSelf(currentUser, searchId)) {
      setSuccess(null);
      return setError("You cannot add yourself");
    }

    if (!(await isUserExist(searchId))) {
      setSuccess(null);
      return setError("User does not exist");
    }

    if (await isFriend(currentUser, searchId)) {
      setSuccess(null);
      return setError("This guy is your friend");
    }

    if (await sentRequest(currentUser, searchId)) {
      setSuccess(null);
      return setError("You cannot send same request to this guy");
    }

    await fireStore
      .collection("requests")
      .doc("users")
      .collection(searchId)
      .doc(currentUser.uid)
      .set({
        uid: currentUser.uid,
        displayName: currentUser.displayName,
      });

    setSuccess("You have sent a request");
    setError(null);
    setSearchId("");
  };

  const handleOnCancel = () => {
    setError(null);
    setSuccess(null);
    setOpen(false);
  };

  const handleOnChange = (e) => setSearchId(e.target.value);

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
        <DialogTitle>Your Friend ID</DialogTitle>
        {error ? <ErrorMessage error={error} /> : null}
        {success ? <SuccessMessage success={success} /> : null}

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
            ok
          </Button>
          <Button onClick={handleOnCancel} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddFriendDialog;
