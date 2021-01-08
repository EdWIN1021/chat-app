import React, { useState, } from "react";
import { Link, useHistory,  } from "react-router-dom";
import { auth, fireStore, database } from "../firebase/config";

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

const SignUpPage = () => {
  const [newUser, setNewUser] = useState({
    displayName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const history = useHistory();

  const handleOnChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const db = fireStore.collection("users");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((user) => {
        auth.currentUser
          .updateProfile({
            displayName: newUser.displayName,
          })
          .then((result) => {
            db.doc(auth.currentUser.uid).set({
              displayName: auth.currentUser.displayName,
              email: auth.currentUser.email,
            });
          })
          .then((result) => {
            database.ref("users/" + auth.currentUser.uid).set({
              email: auth.currentUser.email,
              displayName: auth.currentUser.displayName,
            });
          })
          .then((result) => {
            history.push("/message");
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Grid textAlign="center" style={{ marginTop: "100px" }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="blue" textAlign="center">
          Sign-up your account
        </Header>
        {error !== "" ? (
          <Message negative>
            <Message.Header>{error}</Message.Header>
          </Message>
        ) : null}

        <Form onSubmit={handleOnSubmit} size="large">
          <Segment >
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Display Name"
              name="displayName"
              onChange={handleOnChange}
            />

            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              placeholder="E-mail address"
              name="email"
              onChange={handleOnChange}
            />

            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleOnChange}
            />

            <Button type="submit" color="blue" fluid size="large">
              Sign Up
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have a account? <Link to="/">Sign In</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
// };

export default SignUpPage;
