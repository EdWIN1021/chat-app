import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useSelector } from "react-redux";

const MessageHeader = () => {
  const receiver = useSelector(({ friendReducer }) => friendReducer.receiver);
  return (
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
