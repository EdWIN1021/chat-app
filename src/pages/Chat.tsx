import { Grid } from "@mui/material";
import ContactPanel from "../components/ContactPanel";
import MessagePanel from "../components/MessagePanel";

const Chat = () => {
  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <ContactPanel />
      <MessagePanel />
    </Grid>
  );
};

export default Chat;
