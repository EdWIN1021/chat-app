import { Route, Switch } from "react-router-dom";
import { Container, Label } from "semantic-ui-react";
import TheHeader from "./components/the.header/TheHeader";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import MessagePage from "./pages/message.page/MessagePage";
import PageNotFound from "./pages/NotFoundPage";
function App() {
  return (
    <div className="App">
      <TheHeader />
      <Switch>
        <Route path="/" exact component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/message" component={MessagePage} />
        <Route path="*" component={PageNotFound} />
      </Switch>

      <Container textAlign="center">
        <Label>Copyright © 2021 EWin Inc.</Label>
      </Container>
    </div>
  );
}

export default App;
