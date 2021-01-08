import React from "react";
import useStyles from "./TheHeader.styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

export const TheHeader = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          EMessage
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default TheHeader;
