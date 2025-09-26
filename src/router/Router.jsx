import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "@/layout/MainLayout";
import AuthLayout from "@/layout/AuthLayout";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";

const router = createBrowserRouter([
    {
        path:'/',
        Component: MainLayout,
        children:[
            {
                index: true,
                path: '/',
                Component: Home
            }
        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children:[
            {
                path:'/auth/login',
                Component: LoginPage
            },
            {
                path:'/auth/register',
                Component: SignupPage
            }
        ]
    }
])


export default router