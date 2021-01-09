import React from "react";
import { ListItem, ListItemText, Button, Divider } from "@material-ui/core";

const RequestItem = ({ request }) => {
  return (
    <>
      <ListItem alignItems="flex-start" key={request.id}>
        <ListItemText primary={request.displayName} />
        <Button color="primary">accept</Button>
        <Button color="primary">delete</Button>
      </ListItem>
      <Divider />
    </>
  );
};

export default RequestItem;
