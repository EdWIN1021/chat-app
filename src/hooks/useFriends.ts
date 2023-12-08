import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { getUserProfile } from "../lib/firebase";
import { Profile } from "../types";

const useFriends = () => {
  const [friends, setFriends] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getFriends = async () => {
      try {
        if (user) {
          setIsLoading(true);
          const profile = await getUserProfile(user?.uid);
          setFriends(profile?.friends);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getFriends();
  }, [user]);

  return { friends, isLoading };
};

export default useFriends;
