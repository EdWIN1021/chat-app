import React from "react";
import "./contact.panel.style.css";
import { Grid } from "@material-ui/core";
import FriendList from "../friend.list/FriendList";
const ContactPanel = () => {
  return (
    <Grid item xs={3}>
      <FriendList />
    </Grid>
  );
};

export default ContactPanel;
