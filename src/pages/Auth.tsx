import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        <>{user ? <Outlet /> : <Navigate to="/" />}</>
      )}
    </>
  );
};

export default Auth;
