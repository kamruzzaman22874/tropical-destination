import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/pages/Home/Home";
import About from "../components/pages/About/About";
import Schedules from "../components/pages/Schedules/Schedules";
import Pricing from "../components/pages/Pricing/Pricing";
import Membership from "../components/pages/Membership/Membership";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/schedules",
                element: <Schedules />
            },
            {
                path: "/membership",
                element: <Membership />
            },
            {
                path: "/pricing",
                element: <Pricing />
            }

        ]
    },
]);