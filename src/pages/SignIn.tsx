import { Button, Container, Stack, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  UserCredential,
} from "firebase/auth";
import { auth } from "../lib/firebase";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const [user, loading] = useAuthState(auth);

  const handleSignIn = async (signIn: () => Promise<UserCredential>) => {
    try {
      await signIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          {user ? (
            <Navigate to="/chat" />
          ) : (
            <Container component="main" maxWidth="xs" sx={{ paddingTop: 5 }}>
              <Stack
                direction={"column"}
                paddingY={2}
                alignItems={"center"}
                spacing={1}
              >
                <AccountCircleIcon fontSize="large" color="primary" />
                <Typography component="h1" variant="h5" textAlign={"center"}>
                  Sign In
                </Typography>
              </Stack>

              <Button
                variant="outlined"
                startIcon={
                  <img src="/google.svg" style={{ width: 20, height: 20 }} />
                }
                fullWidth
                size="large"
                sx={{ marginY: 1 }}
                onClick={() =>
                  handleSignIn(() =>
                    signInWithPopup(auth, new GoogleAuthProvider())
                  )
                }
              >
                Continue with google
              </Button>
              <Button
                variant="outlined"
                startIcon={
                  <img src="/github.svg" style={{ width: 20, height: 20 }} />
                }
                fullWidth
                size="large"
                sx={{ marginY: 1 }}
                onClick={() =>
                  handleSignIn(() =>
                    signInWithPopup(auth, new GithubAuthProvider())
                  )
                }
              >
                Continue with github
              </Button>
            </Container>
          )}
        </>
      )}
    </>
  );
};

export default SignIn;
