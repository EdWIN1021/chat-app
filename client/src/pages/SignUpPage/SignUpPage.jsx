import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/reducer/selectors";
import { auth, fireStore } from "../../firebase/config";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import useStyles from "./SignUpPage.styles";
import {
  Typography,
  Button,
  TextField,
  Container,
  Avatar,
  Box,
} from "@material-ui/core";

const SignUpPage = () => {
  const currentUser = useSelector(selectUser);
  const [input, setInput] = useState({
    displayName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const classes = useStyles();

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const userDB = fireStore.collection("users");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(input.email, input.password)
      .then((user) => {
        auth.currentUser
          .updateProfile({
            displayName: input.displayName,
          })
          .then((result) => {
            userDB.doc(auth.currentUser.uid).set({
              displayName: auth.currentUser.displayName,
              email: auth.currentUser.email,
            });
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  if (currentUser) {
    return <Redirect to="/message" />;
  } else {
    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircleIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          {error !== "" ? <ErrorMessage error={error} /> : null}

          <form onSubmit={handleOnSubmit} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="DisplayName"
              name="displayName"
              autoFocus
              value={input.displayName}
              onChange={handleOnChange}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              value={input.email}
              onChange={handleOnChange}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={input.password}
              onChange={handleOnChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Box textAlign="center">
              Already have a account?<Link to="/"> Sign In</Link>
            </Box>
          </form>
        </div>
      </Container>
    );
  }
};

export default SignUpPage;
