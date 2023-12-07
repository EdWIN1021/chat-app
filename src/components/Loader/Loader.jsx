import React from "react";
import useStyles from "./Loader.styles";
import { CircularProgress, Box } from "@material-ui/core";

const Loader = () => {
  const classes = useStyles();
  return (
    <Box textAlign="center" className={classes.loader}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
