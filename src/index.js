import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

//semantic
import "semantic-ui-css/semantic.min.css";

//router-dom
import { BrowserRouter } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
