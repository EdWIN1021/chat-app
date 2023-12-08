import MessageItem from "./MessageItem";
import { Box } from "@mui/material";

const MessageBox = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <MessageItem />{" "}
    </Box>
  );
};

export default MessageBox;
