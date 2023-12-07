import { useEffect } from "react";
import { selectUser } from "./redux/reducer/selectors";
import { useSelector } from "react-redux";
import { auth } from "./firebase/config";
import { Redirect, Route, Switch } from "react-router-dom";
import Copyright from "./components/Copyright/Copyright";
import { useDispatch } from "react-redux";
import { Box } from "@material-ui/core";
import Header from "./components/Header/Header";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import MessagePage from "./pages/MessagePage/MessagePage";
import PageNotFound from "./pages/NotFoundPage/NotFoundPage";
import { signIn, signOut } from "./redux/reducer/action";
function App() {
  const currentUser = useSelector(selectUser);
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
        <Route
          exact
          path="/"
          render={() =>
            currentUser ? <MessagePage /> : <Redirect to="/signin" />
          }
        />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/message" component={MessagePage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
      <Copyright />
    </Box>
  );
}

export default App;
