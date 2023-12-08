import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { db, getUserProfile } from "../lib/firebase";
import { Friend, Profile } from "../types";
import { collection, getDocs, query, where } from "firebase/firestore";

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
          const friendList = [] as string[];
          profile?.friends.forEach((friend: Friend) =>
            friendList.push(friend.userId)
          );

          const data = [] as Profile[];
          if (profile?.friends) {
            const q = query(
              collection(db, "users"),
              where("userId", "in", friendList)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => data.push(doc.data() as Profile));
            setFriends(data);
          }
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
