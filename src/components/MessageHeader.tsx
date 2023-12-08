import { Avatar, Stack, Typography } from "@mui/material";

const MessageHeader = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      padding={1.8}
      gap={3}
      borderBottom={1}
      borderColor={"#F1F1F1"}
    >
      <Avatar src="/static/images/avatar/1.jpg" variant="rounded" />

      <Stack direction={"column"}>
        <Typography fontWeight={600} variant="h6">
          {"Edwin Shi"}
        </Typography>
        <Typography variant="subtitle2">{"online"}</Typography>
      </Stack>
    </Stack>
  );
};

export default MessageHeader;
