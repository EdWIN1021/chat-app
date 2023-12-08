import {
  ReactNode,
  createContext,
  FC,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

import { User } from "firebase/auth";

import { auth } from "../lib/firebase";

interface AuthContextProps {
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
  currentUser: User | null;
}

export const AuthContext = createContext<AuthContextProps>({
  setCurrentUser: () => {},
  currentUser: null,
});

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const contextValue: AuthContextProps = {
    currentUser,
    setCurrentUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
