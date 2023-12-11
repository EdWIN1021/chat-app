import { Avatar, Skeleton, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const MessageHeader = () => {
  const { profile, loadingProfile } = useContext(AuthContext);

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      padding={1.8}
      gap={3}
      borderBottom={1}
      borderColor={"#F1F1F1"}
    >
      {loadingProfile ? (
        <Skeleton variant="rectangular" width={40} height={40} />
      ) : (
        <Avatar
          src={profile?.photoURL || "/static/images/avatar/1.jpg"}
          variant="rounded"
          imgProps={{ referrerPolicy: "no-referrer" }}
        />
      )}

      <Stack direction={"column"}>
        {loadingProfile ? (
          <Skeleton variant="rectangular" width={150} height={20} />
        ) : (
          <Typography fontWeight={600} variant="h6">
            {profile?.displayName}
          </Typography>
        )}

        <Typography
          variant="subtitle2"
          color={profile?.online ? "green" : "red"}
        >
          {loadingProfile ? (
            <Skeleton
              variant="rectangular"
              width={50}
              height={12}
              sx={{ marginTop: 1 }}
            />
          ) : profile?.online ? (
            "online"
          ) : (
            "offline"
          )}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default MessageHeader;
