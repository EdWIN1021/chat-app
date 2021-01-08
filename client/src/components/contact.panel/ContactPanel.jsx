import React from "react";
import "./contact.panel.style.css";
import { GridColumn } from "semantic-ui-react";
import FriendList from "../friend.list/FriendList";
const ContactPanel = ({ user }) => {
  return (
    <GridColumn width={5}>
      <FriendList user={user} />
    </GridColumn>
  );
};

export default ContactPanel;
