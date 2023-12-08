import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const FriendItem = () => {
  const handleOnClick = () => {};

  return (
    <>
      <ListItem alignItems="flex-start" onClick={handleOnClick}>
        <ListItemAvatar>
          <Avatar src="/static/images/avatar/1.jpg" variant="rounded" />
        </ListItemAvatar>
        <ListItemText primary={"asd"} secondary="hello" />
      </ListItem>
    </>
  );
};

export default FriendItem;
