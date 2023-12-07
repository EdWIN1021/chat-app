import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
const SuccessMessage = ({ success }) => {
  return (
    <Alert className="success-message" severity="success">
      <AlertTitle>Success</AlertTitle>
      {success} — <strong>check it out!</strong>
    </Alert>
  );
};

export default SuccessMessage;
