import { Grid, List, Stack, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FriendItem from "./FriendItem";

const ContactPanel = () => {
  return (
    <Grid item xs={3} borderRight={1} borderColor={"#F1F1F1"}>
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        borderBottom={1}
        borderColor={"#F1F1F1"}
        padding={3}
      >
        <Typography
          textAlign={"center"}
          component={"span"}
          fontSize={"large"}
          fontWeight="500"
        >
          Messages
        </Typography>

        <AddCircleIcon
          fontSize="large"
          color="primary"
          sx={{ cursor: "pointer" }}
        />
      </Stack>

      <List
        sx={{
          maxHeight: "calc(100vh - 64px - 84px)",
          overflow: "auto",
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
      </List>
    </Grid>
  );
};

export default ContactPanel;
