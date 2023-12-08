import { Avatar, Stack, Typography } from "@mui/material";
import { ChatContext, Message } from "../contexts/ChatContext";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const MessageItem: React.FC<{ message: Message }> = ({ message }) => {
  const { user } = useContext(AuthContext);
  const { receiver } = useContext(ChatContext);

  return (
    <>
      {user?.uid === message.sender ? (
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={2}
          mb={1}
          justifyContent={"end"}
        >
          <Typography
            variant="body2"
            sx={{
              backgroundColor: "#F1F1F1",
              borderRadius: "12px",
              paddingX: 2,
              paddingY: 1,
            }}
          >
            {message.content}
          </Typography>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={user?.photoURL || "/static/images/avatar/1.jpg"}
            variant="rounded"
          />
        </Stack>
      ) : (
        <Stack direction={"row"} alignItems={"center"} gap={2} mb={1}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={receiver?.photoURL || "/static/images/avatar/1.jpg"}
            variant="rounded"
          />
          <Typography
            variant="body2"
            sx={{
              backgroundColor: "#F1F1F1",
              borderRadius: "12px",
              paddingX: 2,
              paddingY: 1,
            }}
          >
            {message.content}
          </Typography>
        </Stack>
      )}
    </>
  );
};

export default MessageItem;
