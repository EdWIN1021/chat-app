import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Auth = () => {
  const { user, loading } = useContext(AuthContext);

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>{user ? <Outlet /> : <Navigate to="/" />}</>
      )}
    </>
  );
};

export default Auth;
