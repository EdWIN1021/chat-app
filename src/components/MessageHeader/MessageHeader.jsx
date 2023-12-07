import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import { selectReceiver } from "../../redux/reducer/selectors";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector } from "react-redux";
import "./message.header.styles.css";
const MessageHeader = () => {
  const receiver = useSelector(selectReceiver);
  return (
    <Card>
      <CardHeader
        className="message-header"
        action={
          <IconButton aria-label="settings">
            <DeleteIcon />
          </IconButton>
        }
        title={receiver.displayName}
      />
    </Card>
  );
};

export default MessageHeader;
