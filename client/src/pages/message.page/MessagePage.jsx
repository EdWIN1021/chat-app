import React from "react";
import { Grid, Container } from "@material-ui/core";
import ContactPanel from "../../components/contact.panel/ContactPanel";
import MessagePanel from "../../components/message.panel/MessagePanel";
// import "./message.page.styles.css";

const MessagePage = ({ currentUser }) => {
  return (
    <Container>
      <Grid container spacing={3}>
        <ContactPanel />
        <MessagePanel />
      </Grid>
    </Container>
  );
};

export default MessagePage;
