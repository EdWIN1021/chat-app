import React from "react";
import useStyles from "./TheHeader.styles";
import Menu from "../Menu/Menu";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export const TheHeader = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          EMessage
        </Typography>
        <Menu />
      </Toolbar>
    </AppBar>
  );
};

export default TheHeader;
