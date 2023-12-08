import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

import Root from "./pages/Root";
import SignIn from "./pages/SignIn";
import Chat from "./pages/Chat";
import Auth from "./pages/Auth";

import AuthProvider from "./contexts/AuthContext";
import ChatProvider from "./contexts/ChatContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<SignIn />} />

      <Route element={<Auth />}>
        <Route path="/chat" element={<Chat />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <ChatProvider>
      <RouterProvider router={router} />
    </ChatProvider>
  </AuthProvider>
);
