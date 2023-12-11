import { Avatar, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const MessageHeader = () => {
  const { profile, loadingProfile } = useContext(AuthContext);

  return (
    <>
      {loadingProfile ? (
        <div>Loading...</div>
      ) : (
        <Stack
          direction={"row"}
          alignItems={"center"}
          padding={1.8}
          gap={3}
          borderBottom={1}
          borderColor={"#F1F1F1"}
        >
          <Avatar
            src={profile?.photoURL || "/static/images/avatar/1.jpg"}
            variant="rounded"
            imgProps={{ referrerPolicy: "no-referrer" }}
          />

          <Stack direction={"column"}>
            <Typography fontWeight={600} variant="h6">
              {profile?.displayName}
            </Typography>

            <Typography
              variant="subtitle2"
              color={profile?.online ? "green" : "red"}
            >
              {profile?.online ? "online" : "offline"}
            </Typography>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default MessageHeader;
