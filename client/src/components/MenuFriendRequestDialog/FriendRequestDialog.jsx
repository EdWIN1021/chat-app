import React, { useState, useEffect } from "react";
import { fireStore } from "../../firebase/config";
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
import RequestItem from "../RequestItem/RequestItem";

const FriendRequestDialog = ({ currentUser }) => {
  const [open, setOpen] = useState(false);
  const [numOfReq, setNumOfReq] = useState(null);
  const [requestList, setRequestList] = useState([]);
  const [fetching, setFetching] = useState(null);
  useEffect(() => {
    setFetching(true);
    let temp = [];
    fireStore
      .collection("users")
      .doc(currentUser.uid)
      .collection("requests")
      .get()
      .then((snapshot) => {
        setNumOfReq(snapshot.size);
        snapshot.forEach((doc) => {
          temp.push(doc.data());
          // setRequestList((requestList) => [...requestList, doc.data()]);
        });
        setRequestList(temp);
        setFetching(false);
        temp = null;
      });
  }, [numOfReq]);

  useEffect(() => {
    fireStore
      .collection("users")
      .doc(currentUser.uid)
      .collection("requests")
      .onSnapshot((snapshot) => setNumOfReq(snapshot.size));
  }, []);

  if (fetching) {
    return null;
  } else {
    return (
      <>
        <IconButton color="inherit" onClick={() => setOpen(true)}>
          <Badge badgeContent={numOfReq} color="secondary">
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
          <DialogTitle id="alert-dialog-title">Requests</DialogTitle>
          <DialogContent>
            <List>
              {requestList.map((request) => (
                <RequestItem key={request.id} request={request} />
              ))}
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
  }
};

export default FriendRequestDialog;
