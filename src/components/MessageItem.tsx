import { Avatar, Stack, Typography } from "@mui/material";

const MessageItem = () => {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={2} mb={1}>
      <Avatar sx={{ width: 30, height: 30 }} variant="rounded" />
      <Typography
        variant="body2"
        sx={{
          backgroundColor: "#F1F1F1",
          borderRadius: "12px",
          paddingX: 2,
          paddingY: 1,
        }}
      >
        Hello
      </Typography>
    </Stack>
  );
};

export default MessageItem;
