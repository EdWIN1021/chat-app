import { useEffect, useState } from "react";
import { auth } from "./firebase/config";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Label, Loader } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import TheHeader from "./components/the.header/TheHeader";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import MessagePage from "./pages/message.page/MessagePage";
import PageNotFound from "./pages/NotFoundPage";
import { signIn } from "./redux/friendReducer/action";
function App() {
  const user = useSelector(({ friendReducer }) => friendReducer.user);
  const dispatch = useDispatch();
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        dispatch(signIn(user));
      } else {
        // No user is signed in.
      }
      setFetching(false);
    });
  });

  return (
    <div className="App">
      <TheHeader />
      {fetching ? (
        <Loader active inline="centered" />
      ) : (
        <>
          <Switch>
            <Route
              path="/"
              exact
              render={() =>
                user ? <Redirect to="/message" /> : <SignInPage />
              }
            />
            <Route
              path="/signup"
              render={() =>
                user ? <Redirect to="/message" /> : <SignUpPage />
              }
            />
            <Route
              path="/message"
              render={() =>
                user ? <MessagePage user={user} /> : <Redirect to="/" />
              }
            />
            <Route path="*" component={PageNotFound} />
          </Switch>
          <Container textAlign="center">
            <Label>Copyright © 2021 EWin Inc.</Label>
          </Container>
        </>
      )}
    </div>
  );
}

export default App;
