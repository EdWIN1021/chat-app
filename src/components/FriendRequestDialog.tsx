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
import { useEffect, useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import RequestItem from "./RequestItem";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, getRequestUserInfo, getUserProfile } from "../lib/firebase";
import { Profile } from "../types";

const FriendRequestDialog = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  const [requestList, setRequestList] = useState<Profile[]>([]);

  useEffect(() => {
    const getRequestList = async () => {
      if (user) {
        const profile = (await getUserProfile(user?.uid)) as Profile;
        setRequestList(await getRequestUserInfo(profile?.requests));
      }
    };

    getRequestList();
  }, [user]);

  return (
    <>
      <IconButton color="inherit" onClick={() => setOpen(true)}>
        <Badge badgeContent={requestList?.length} color="secondary">
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
        <DialogTitle id="alert-dialog-title">
          {requestList.length > 0 ? "Requests" : "You have no request"}
        </DialogTitle>

        <DialogContent>
          <List>
            {requestList.map((requestedUser) => (
              <RequestItem
                key={requestedUser.userId}
                // currentUser={user}
                requestedUser={requestedUser}
              />
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FriendRequestDialog;
