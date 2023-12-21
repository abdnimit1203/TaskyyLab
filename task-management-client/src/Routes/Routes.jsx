import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

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
            
        ]

    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    }
])
