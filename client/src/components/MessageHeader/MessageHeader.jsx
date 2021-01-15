import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import { Box, Typography } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useSelector } from "react-redux";
import "./message.header.styles.css";
const MessageHeader = () => {
  const receiver = useSelector(({ friendReducer }) => friendReducer.receiver);
  return (
    // <Box className="message-header">
    //   <Typography className="message-header-title" variant="h4">
    //     {receiver.displayName}
    //   </Typography>

    //   <IconButton aria-label="settings">
    //     <MoreVertIcon />
    //   </IconButton>
    // </Box>

    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={receiver.displayName}
      />
    </Card>
  );
};

export default MessageHeader;
