import React, { useState } from "react";
import { Form, Button, Input } from "semantic-ui-react";
import { connect } from "react-redux";
const SendMessage = ({ receiver }) => {
  const [currentUser, setCurrentUser] = useState({
    id: "admin",
    userName: "edwin",
    sender: "edwin",
    receiver: "",
  });

  const [message, setMessage] = useState("");

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    console.log(receiver);
    console.log(currentUser.userName);
    setMessage("");
  };

  return (
    <Form className="message-form" onSubmit={handleOnSubmit}>
      <Input fluid type="text">
        <input value={message} onChange={handleOnChange} />
        <Button type="submit" primary>
          send
        </Button>
      </Input>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  receiver: state.friendReducer.receiver,
});

export default connect(mapStateToProps)(SendMessage);
