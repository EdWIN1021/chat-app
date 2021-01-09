import React from "react";
import "./header.styles.css";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export const Header = () => {
  return (
    <AppBar className="header" position="static">
      <Toolbar>
        <Typography className="header-title" variant="h6">
          EMessage
        </Typography>
        <HeaderMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
