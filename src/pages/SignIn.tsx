import { Button, Container, Stack, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const SignIn = () => {
  return (
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
        startIcon={<img src="/google.svg" style={{ width: 20, height: 20 }} />}
        fullWidth
        size="large"
        sx={{ marginY: 1 }}
      >
        Continue with google
      </Button>
      <Button
        variant="outlined"
        startIcon={<img src="/github.svg" style={{ width: 20, height: 20 }} />}
        fullWidth
        size="large"
        sx={{ marginY: 1 }}
      >
        Continue with github
      </Button>
    </Container>
  );
};
// };

export default SignIn;
