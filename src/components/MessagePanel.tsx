import { Grid, Stack } from "@mui/material";
import MessageHeader from "./MessageHeader";
import MessageBox from "./MessageBox";
import SendMessage from "./SendMessage";
import { useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";

const MessagePanel = () => {
  const { receiver } = useContext(ChatContext);

  return (
    <Grid item xs={9}>
      <Stack direction={"column"} height={"100%"}>
        <MessageHeader />

        {receiver && (
          <>
            <MessageBox />
            <SendMessage />
          </>
        )}
      </Stack>
    </Grid>
  );
};

export default MessagePanel;
