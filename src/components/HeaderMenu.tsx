import { Button } from "@mui/material";

const HeaderMenu = () => {
  const handleSignOut = () => {};
  return (





    
    <div className="menu">
      <>
        {/* <ProfileDialog /> */}
        {/* <FriendRequestDialog /> */}
        {/* <AddFriendDialog /> */}
        <Button color="inherit" onClick={handleSignOut}>
          LOGOUT
        </Button>
      </>
    </div>
  );
};

export default HeaderMenu;
