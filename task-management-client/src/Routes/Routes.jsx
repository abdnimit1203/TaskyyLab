import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Blogs from "../pages/Blogs";
import Pricing from "../pages/Pricing";
import Chats from "../pages/Chats";
import PrivateRoute from "./PrivateRoute";

export const router =  createBrowserRouter([
    {
        path: '/',
        element : <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/pricing',
                element: <Pricing/>
            },
            {
                path: '/chats',
                element: <Chats/>
            },
            
        ]

    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: "/dashboard",
        element:<PrivateRoute><Dashboard/></PrivateRoute> 
    }
])
