import { Fab, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const SendMessage = () => {
  return (
    <form
      style={{
        display: "flex",
        gap: 15,
        padding: "2% 4%",
        alignItems: "center",
      }}
    >
      <TextField
        color="primary"
        size="small"
        fullWidth
        placeholder="Type a message"
      />
      <Fab color="primary" type="submit" aria-label="add" size={"small"}>
        <SendIcon />
      </Fab>
    </form>
  );
};

export default SendMessage;
