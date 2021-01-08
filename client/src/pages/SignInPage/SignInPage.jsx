import React, { useState } from "react";
import useStyles from "./SignInPage.styles";
import { Link } from "react-router-dom";
import { signIn } from "../../redux/friendReducer/action";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase/config";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import {
  Typography,
  Button,
  TextField,
  Container,
  Avatar,
  Box,
} from "@material-ui/core";

const SignInPage = () => {
  const [signInUser, setSignInUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const dispatch = useDispatch();

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

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {error !== "" ? <ErrorMessage error={error} /> : null}
        <form onSubmit={handleOnSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
            id="password"
            autoComplete="current-password"
            onChange={handleOnChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Box textAlign="center">
            Don't have an account?<Link to="/signup"> Sign Up</Link>
          </Box>
        </form>
      </div>
    </Container>
  );
};
// };

export default SignInPage;
