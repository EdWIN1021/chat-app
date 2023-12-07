import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import "./index.css";
import Root from "./pages/Root";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Root />}></Route>)
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
