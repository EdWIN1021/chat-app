import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Box, CircularProgress } from "@mui/material";

const Auth = () => {
  const { user, loading } = useContext(AuthContext);

  return (
    <>
      {loading ? (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>{user ? <Outlet /> : <Navigate to="/" />}</>
      )}
    </>
  );
};

export default Auth;
