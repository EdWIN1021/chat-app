import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { db, getUserProfile } from "../lib/firebase";
import { Friend, Profile } from "../types";
import { Unsubscribe } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

const useFriends = () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);

  //sub

  useEffect(() => {
    let unsubscribe: Unsubscribe | undefined;

    (async () => {
      if (user) {
        unsubscribe = onSnapshot(doc(db, "users", user?.uid), async () => {
          setIsLoading(true);
          const profile = (await getUserProfile(user?.uid)) as Profile;
          setFriends(profile?.friends);
          setIsLoading(false);
        });
      }
    })();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user]);

  return { friends, isLoading };
};

export default useFriends;
