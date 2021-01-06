import React, { useEffect, useState } from "react";
import { Grid, Container } from "semantic-ui-react";
import ContactPanel from "../../components/contact.panel/ContactPanel";
import MessagePanel from "../../components/message.panel/MessagePanel";
import { auth } from "../../firebase/config";
import { useHistory } from "react-router-dom";
import "./message.page.styles.css";
import TheMenu from "../../components/menu/TheMenu";

const MessagePage = () => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const fun = async () => {
      await auth.onAuthStateChanged(function (user) {
        if (user) {
          setCurrentUser(user);
        } else {
          history.push("/");
        }
      });
    };
    fun();
  }, []);

  if (currentUser) {
    return (
      <Container>
        <TheMenu currentUser={currentUser} />
        <Grid columns={2} relaxed="very">
          <ContactPanel />
          <MessagePanel />
        </Grid>
      </Container>
    );
  } else {
    return null;
  }
};

export default MessagePage;
