import React from "react";
import Alert from "@material-ui/lab/Alert";
import useStyles from "./ErrorMessage.styles";
const ErrorMessage = ({ error }) => {
  const classes = useStyles();
  return (
    <Alert className={classes.error} severity="error">
      {error}
    </Alert>
  );
};

export default ErrorMessage;
