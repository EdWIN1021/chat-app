import React from "react";
import "./contact.panel.style.css";
import { Grid } from "@material-ui/core";
import FriendList from "../FriendList/FriendList";
const ContactPanel = ({ currentUser }) => {
  return (
    <Grid item xs={3}>
      <FriendList currentUser={currentUser} />
    </Grid>
  );
};

export default ContactPanel;
