import { Avatar, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const MessageHeader = () => {
  const { user } = useContext(AuthContext);

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      padding={1.8}
      gap={3}
      borderBottom={1}
      borderColor={"#F1F1F1"}
    >
      <Avatar
        src={user?.photoURL || "/static/images/avatar/1.jpg"}
        variant="rounded"
      />

      <Stack direction={"column"}>
        <Typography fontWeight={600} variant="h6">
          {user?.displayName}
        </Typography>
        <Typography variant="subtitle2">{"online"}</Typography>
      </Stack>
    </Stack>
  );
};

export default MessageHeader;
