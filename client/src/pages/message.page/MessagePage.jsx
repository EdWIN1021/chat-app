import React from "react";
import { Grid, Container } from "semantic-ui-react";
import ContactPanel from "../../components/contact.panel/ContactPanel";
import MessagePanel from "../../components/message.panel/MessagePanel";
import { Redirect } from "react-router-dom";
import "./message.page.styles.css";
import TheMenu from "../../components/menu/TheMenu";

const MessagePage = ({ user }) => {
  return (
    <Container>
      <TheMenu user={user} />
      <Grid columns={2} relaxed="very">
        <ContactPanel />
        <MessagePanel />
      </Grid>
    </Container>
  );
};

export default MessagePage;
