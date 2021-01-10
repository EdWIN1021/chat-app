import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Box } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import { connect } from "react-redux";
import { setReceiver } from "../../redux/friendReducer/action";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#fafafa",
    },
  },
}));

const FriendItem = ({ friend, setReceiver }) => {
  const classes = useStyles();

  const handleOnClick = () => {
    setReceiver({ id: friend.id, displayName: friend.displayName });
  };

  return (
    <Box m={2} className={classes.root} onClick={handleOnClick}>
      <Card>
        <CardHeader title={friend.displayName} subheader="September 14, 2016" />
      </Card>
    </Box>
  );
};

const mapDispatchToProp = (dispatch) => ({
  setReceiver: (userName) => dispatch(setReceiver(userName)),
});

export default connect(null, mapDispatchToProp)(FriendItem);
