import React from "react";
import "./contact.panel.style.css";
import { GridColumn } from "semantic-ui-react";
import FriendList from "../friend.list/FriendList";
const ContactPanel = () => {
  return (
    <GridColumn className="contact-panel" width={5}>
      <FriendList />
    </GridColumn>
  );
};

export default ContactPanel;
