import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FriendRequestDialog from "./FriendRequestDialog";
import ProfileDialog from "./ProfileDialog";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useState } from "react";

function Header() {
  const { user } = useContext(AuthContext);

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [signOut] = useSignOut(auth);
  const [open, setOpen] = useState(false);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCheckID = () => {
    setOpen(true);
    handleCloseUserMenu();
  };

  const handleLogOut = async () => {
    await signOut();
    handleCloseUserMenu();
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
              Chat
            </Typography>

            {user && (
              <Box>
                <FriendRequestDialog />
                <Tooltip title="Open Menu">
                  <IconButton onClick={handleOpenUserMenu}>
                    <Avatar
                      src={user?.photoURL || "/static/images/avatar/2.jpg"}
                    />
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px" }}
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCheckID}>
                    <Typography textAlign="center">Check ID</Typography>
                  </MenuItem>

                  <MenuItem onClick={handleLogOut}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <ProfileDialog open={open} setOpen={setOpen} user={user} />
    </>
  );
}
export default Header;
