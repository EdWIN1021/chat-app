import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import "./index.css";
import Root from "./pages/Root";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<SignInPage />} />
      <Route path="signup" element={<SignUpPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
