import React, { useState } from "react";
import { fireStore } from "../../../firebase/config";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
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
    //查有没有这个好友
    //如果有返回错误
    //查之前发过相同的request
    //如果有返回错误

    if (searchId === "") {
      setError("Please enter a ID");
      return 1;
    } else {
      console.log("here");
      // const friendRef = fireStore.collection("users").doc(searchId);
      // const doc = await friendRef.get();
      // if (!doc.exists) {
      //   setError("User does not exist");
      // } else {
      //   await friendRef.collection("requests").add({
      //     id: currentUser.uid,
      //     displayName: currentUser.displayName,
      //   });
      //   setError("");
      //   setOpen(false);
      // }
    }
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
