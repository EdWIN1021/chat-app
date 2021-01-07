import React, { useState, useEffect } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { signIn } from "../redux/friendReducer/action";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/config";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

const SignInPage = () => {
  const [signInUser, setSignInUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnChange = (e) => {
    setSignInUser({ ...signInUser, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(signInUser.email, signInUser.password)
      .then((result) => dispatch(signIn(result)))
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Grid textAlign="center" style={{ marginTop: "100px" }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="blue" textAlign="center">
          Sign-in to your account
        </Header>
        {error !== "" ? (
          <Message negative>
            <Message.Header>{error}</Message.Header>
          </Message>
        ) : null}
        <Form onSubmit={handleOnSubmit} size="large">
          <Segment>
            <Form.Input
              fluid
              icon="user"
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

            <Button color="blue" fluid size="large">
              SignIn
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to="signup">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
// };

export default SignInPage;
