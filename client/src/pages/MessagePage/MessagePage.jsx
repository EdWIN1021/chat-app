import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/reducer/selectors";
import { Redirect } from "react-router-dom";
import ContactPanel from "../../components/ContactPanel/ContactPanel";
import MessagePanel from "../../components/MessagePanel/MessagePanel";

const MessagePage = () => {
  const currentUser = useSelector(selectUser);

  if (!currentUser) {
    return <Redirect to="/signin" />;
  } else {
    return (
      <Grid container>
        <ContactPanel />
        {/* <MessagePanel /> */}
      </Grid>
    );
  }
};

export default MessagePage;
