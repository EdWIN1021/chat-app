import { useEffect, useState } from "react";
import { auth } from "./firebase/config";
import { Redirect, Route, Switch } from "react-router-dom";
import Copyright from "./components/Copyright/Copyright";
import { useDispatch } from "react-redux";
import { Box } from "@material-ui/core";
import Header from "./components/Header/Header";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import MessagePage from "./pages/message.page/MessagePage";
import PageNotFound from "./pages/NotFoundPage";
import { signIn, signOut } from "./redux/reducer/action";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        dispatch(
          signIn({
            uid: user.uid,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(signOut());
      }
    });
  }, []);

  return (
    <Box className="App">
      <Header />

      <Switch>
        <Route path="/" exact>
          <Redirect to="/signin" />
        </Route>

        <Route exact path="/signin" component={SignInPage} />

        {/* <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/message" /> : <SignInPage />
          }
        /> */}
        {/* <Route
          exact
          path="/signup"
          render={() =>
            currentUser ? <Redirect to="/message" /> : <SignUpPage />
          }
        /> */}
        {/* <Route
          exact
          path="/message"
          render={() =>
            currentUser ? <MessagePage /> : <Redirect to="/signin" />
          }
        /> */}
        <Route path="*" component={PageNotFound} />
      </Switch>
      <Copyright />
    </Box>
  );
}

export default App;
