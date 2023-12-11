import { ReactNode, createContext, FC } from "react";

import { User as Auth } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface AuthContextProps {
  user: Auth | null | undefined;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: false,
});

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  const contextValue: AuthContextProps = {
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
