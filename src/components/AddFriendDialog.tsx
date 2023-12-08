import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";

const AddFriendDialog: React.FC<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  const handleOk = () => {
    console.log("ok");
  };

  return (
    <>
      <Dialog open={open} fullWidth>
        <DialogTitle>Your Friend ID</DialogTitle>

        <DialogContent sx={{ paddingX: 10 }}>
          <TextField variant="standard" fullWidth />
        </DialogContent>

        <DialogActions>
          <Button color="primary" onClick={handleOk}>
            ok
          </Button>
          <Button color="primary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddFriendDialog;
