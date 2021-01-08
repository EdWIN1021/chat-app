import { useEffect, useState } from "react";
import { auth } from "./firebase/config";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Copyright from "./components/Copyright/Copyright";
import Loader from "./components/Loader/Loader";
import { useDispatch } from "react-redux";
import { Box } from "@material-ui/core";
import TheHeader from "./components/TheHeader/TheHeader";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import MessagePage from "./pages/message.page/MessagePage";
import PageNotFound from "./pages/NotFoundPage";
import { signIn } from "./redux/friendReducer/action";
function App() {
  const currentUser = useSelector(({ friendReducer }) => friendReducer.user);
  const dispatch = useDispatch();
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged(function (user) {
        if (user) {
          dispatch(signIn(user));
        }
      });
      setFetching(false);
    };
    fetchUser();
  });

  return (
    <Box className="App">
      <TheHeader />
      {fetching ? (
        <Loader />
      ) : (
        <>
          <Switch>
            <Route
              path="/"
              exact
              render={() =>
                currentUser ? <Redirect to="/message" /> : <SignInPage />
              }
            />
            <Route
              path="/signup"
              render={() =>
                currentUser ? <Redirect to="/message" /> : <SignUpPage />
              }
            />
            <Route
              path="/message"
              render={() =>
                currentUser ? (
                  <MessagePage user={currentUser} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </>
      )}
      <Copyright />
    </Box>
  );
}

export default App;
