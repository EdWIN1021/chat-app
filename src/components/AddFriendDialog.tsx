import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { auth, getUserProfile, sendFriendRequest } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Profile } from "../types";

const AddFriendDialog: React.FC<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  const [receiverId, setReceiverId] = useState("");
  const [user] = useAuthState(auth);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (user) {
      const profile = (await getUserProfile(receiverId)) as Profile;

      if (!profile) {
        return setError("User doest not exist");
      }
      if (profile.requests?.includes(user?.uid)) {
        return setError("You have sent a request to this user");
      }

      if (receiverId === user?.uid) return;

      await sendFriendRequest(receiverId, user?.uid);
    }

    setReceiverId("");
  };

  // todo
  error && console.log(error);

  return (
    <Dialog open={open} fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Your Friend ID</DialogTitle>

        <DialogContent sx={{ paddingX: 10 }}>
          <TextField
            variant="standard"
            fullWidth
            value={receiverId}
            onChange={(e) => setReceiverId(e.target.value)}
            required
          />
        </DialogContent>

        <DialogActions>
          <Button color="primary" type="submit">
            ok
          </Button>
          <Button
            color="primary"
            onClick={() => {
              setOpen(false);
              setReceiverId("");
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddFriendDialog;
