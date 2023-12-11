import { Avatar, Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { getUserProfile } from "../lib/firebase";
import { Profile } from "../types";

const MessageHeader = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    (async () => {
      if (user) {
        const profile = (await getUserProfile(user.uid)) as Profile;
        setProfile(profile);
      }
    })();
  }, [user]);

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      padding={1.8}
      gap={3}
      borderBottom={1}
      borderColor={"#F1F1F1"}
    >
      <Avatar
        src={user?.photoURL || "/static/images/avatar/1.jpg"}
        variant="rounded"
        imgProps={{ referrerPolicy: "no-referrer" }}
      />

      <Stack direction={"column"}>
        <Typography fontWeight={600} variant="h6">
          {user?.displayName}
        </Typography>
        <Typography variant="subtitle2">
          {profile?.online ? "online" : "offline"}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default MessageHeader;
