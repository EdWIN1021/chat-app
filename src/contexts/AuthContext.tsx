import { ReactNode, createContext, FC, useState, useEffect } from "react";

import { User as Auth, Unsubscribe } from "firebase/auth";
import { auth, db, getUserProfile } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Profile } from "../types";
import { doc, onSnapshot } from "firebase/firestore";

interface AuthContextProps {
  user: Auth | null | undefined;
  loading: boolean;
  loadingProfile: boolean;
  profile: Profile | null;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
  loadingProfile: true,
  profile: null,
});

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  useEffect(() => {
    let unsubscribe: Unsubscribe | undefined;
    (async () => {
      if (user && !loading && !error) {
        unsubscribe = onSnapshot(doc(db, "users", user?.uid), async () => {
          setLoadingProfile(true);
          setProfile((await getUserProfile(user?.uid)) as Profile);
          setLoadingProfile(false);
        });
      }
    })();
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user, loading, error]);

  const contextValue: AuthContextProps = {
    user,
    profile,
    loading,
    loadingProfile,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
