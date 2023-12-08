import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Box } from "@mui/material";

const Root = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        overflow: "hidden",
        flexDirection: "column",
      }}
    >
      <Header />
      <Outlet />
    </Box>
  );
};

export default Root;
