import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../components/pages/home/Home";
import User from "../components/pages/Users/User";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/users",
                element: <User />
            }
        ]

    }
])