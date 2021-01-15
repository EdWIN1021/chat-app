import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import "./ErrorMessage.styles.css";
const ErrorMessage = ({ error }) => {
  return (
    <Alert className="error-message" severity="error">
      <AlertTitle>Error</AlertTitle>
      {error} — <strong>check it out!</strong>
    </Alert>
  );
};

export default ErrorMessage;
