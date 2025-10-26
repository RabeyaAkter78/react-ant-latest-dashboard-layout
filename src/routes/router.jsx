import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import User from "../components/pages/Users/User";
import Dashboard from "../components/pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/users",
                element: <User />
            }
        ]

    }
])