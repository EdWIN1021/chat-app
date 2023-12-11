import { useEffect, useState } from "react";
import { Profile } from "../types";
import { getUserProfile } from "../lib/firebase";

const useProfile = (id: string | undefined) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        id && setProfile((await getUserProfile(id)) as Profile);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  return { profile, loading };
};

export default useProfile;
