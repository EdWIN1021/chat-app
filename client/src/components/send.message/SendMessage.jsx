import React, { useState, useEffect } from "react";
import { Form, Button, Input } from "semantic-ui-react";
import { connect, useSelector, useDispatch } from "react-redux";
import { io } from "socket.io-client";

var socket = null;
const SendMessage = () => {
  // const [currentUser] = useState(friends[Math.floor(Math.random() * 7)]);
  const friends = useSelector(({ friendReducer }) => friendReducer);
  const [message, setMessage] = useState("");

  // console.log(currentUser);

  // useEffect(() => {
  //   socket = io("http://localhost:8000");
  //   socket.on(currentUser.name, (socket) => {
  //     console.log(socket);
  //   });
  // }, []);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // socket.emit("send", {
    //   sender: currentUser.name,
    //   receiver,
    //   message,
    // });
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

// const mapStateToProps = (state) => ({
//   receiver: state.friendReducer.receiver,
//   friends: state.friendReducer.friends,
// });

// export default connect(mapStateToProps)(SendMessage);

export default SendMessage;
