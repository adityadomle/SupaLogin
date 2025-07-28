import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
]);
