import { useState } from "react";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setInput({ ...input, email: "", password: "" });
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ paddingTop: 5 }}>
      <Stack
        direction={"column"}
        paddingY={5}
        alignItems={"center"}
        spacing={1}
      >
        <AccountCircleIcon fontSize="large" color="primary" />
        <Typography component="h1" variant="h5" textAlign={"center"}>
          Sign In
        </Typography>
      </Stack>

      <form
        onSubmit={handleOnSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "25px" }}
      >
        <TextField
          variant="outlined"
          label="Email Address"
          name="email"
          value={input.email}
          onChange={handleOnChange}
          required
          fullWidth
          autoFocus
        />

        <TextField
          variant="outlined"
          name="password"
          label="Password"
          type="password"
          value={input.password}
          onChange={handleOnChange}
          required
          fullWidth
        />

        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign In
        </Button>

        <Typography component={"p"} textAlign="center">
          Don't have an account?
          <Link to="/signup" style={{ marginLeft: "2px" }}>
            <Typography component={"span"} color={"primary"}>
              Sign Up
            </Typography>
          </Link>
        </Typography>
      </form>
    </Container>
  );
};
// };

export default SignInPage;
