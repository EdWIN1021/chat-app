import { Button, Container, Stack, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  UserCredential,
} from "firebase/auth";
import { auth, db, getUserProfile, initUserProfile } from "../lib/firebase";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { doc, updateDoc } from "firebase/firestore";

const SignIn = () => {
  const { user, loading } = useContext(AuthContext);

  const handleSignIn = async (signIn: () => Promise<UserCredential>) => {
    try {
      const { user } = await signIn();
      const profile = await getUserProfile(user?.uid);
      if (!profile) await initUserProfile(user);
      await updateDoc(doc(db, "users", user?.uid), {
        online: true,
      });
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
