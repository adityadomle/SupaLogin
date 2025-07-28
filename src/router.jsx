import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Dashboard from "./Components/Dashboard";

export const router = createBrowserRouter([
    { path: "/", element: <App />, },
    { path: "/signup", element: <Signup />, },
    { path: "/signin", element: <Signin />, },
    { path: "/dashboard", element: <Dashboard />, },
]);