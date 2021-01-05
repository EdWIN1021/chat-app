import { Grid, Segment } from "semantic-ui-react";
import ContactPanel from "./components/contact.panel/ContactPanel";
import MessagePanel from "./components/message.panel/MessagePanel";
function App() {
  return (
    <Segment className="App">
      <Grid columns={2} relaxed="very">
        <ContactPanel />
        <MessagePanel />
      </Grid>
    </Segment>
  );
}

export default App;
