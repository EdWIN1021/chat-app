import { Grid, IconButton, List, Stack, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FriendItem from "./FriendItem";
import AddFriendDialog from "./AddFriendDialog";
import { useState } from "react";
import useFriends from "../hooks/useFriends";

const ContactPanel = () => {
  const [open, setOpen] = useState(false);
  const { friends } = useFriends();

  return (
    <Grid item xs={3} borderRight={1} borderColor={"#F1F1F1"}>
      <AddFriendDialog open={open} setOpen={setOpen} />
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        borderBottom={1}
        borderColor={"#F1F1F1"}
        padding={2}
      >
        <Typography
          textAlign={"center"}
          component={"span"}
          fontSize={"large"}
          fontWeight="500"
        >
          Messages
        </Typography>

        <IconButton onClick={() => setOpen(true)}>
          <AddCircleIcon fontSize="large" color="primary" />
        </IconButton>
      </Stack>

      <List
        sx={{
          maxHeight: "calc(100vh - 64px - 84px)",
          overflow: "auto",
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        {friends?.map((friend) => (
          <FriendItem key={friend.userId} friend={friend} />
        ))}
      </List>
    </Grid>
  );
};

export default ContactPanel;
