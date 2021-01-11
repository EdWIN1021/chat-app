import React from "react";
import { Grid, Container } from "@material-ui/core";
import ContactPanel from "../../components/contact.panel/ContactPanel";
import MessagePanel from "../../components/message.panel/MessagePanel";

const MessagePage = () => {
  return (
      <Grid container>
        <ContactPanel />
        <MessagePanel />
      </Grid>
  
  );
};

export default MessagePage;
