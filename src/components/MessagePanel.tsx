import { Grid, Stack } from "@mui/material";
import MessageHeader from "./MessageHeader";
import MessageBox from "./MessageBox";
import SendMessage from "./SendMessage";

const MessagePanel = () => {
  return (
    <Grid item xs={9}>
      <Stack direction={"column"} height={"100%"}>
        <MessageHeader />
        <MessageBox />
        <SendMessage />
      </Stack>
    </Grid>
  );
};

export default MessagePanel;
