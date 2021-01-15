import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
//css
import "./header.styles.css";
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
