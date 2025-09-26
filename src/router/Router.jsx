import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "@/layout/MainLayout";
import AuthLayout from "@/layout/AuthLayout";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import ForgetPassword from "@/pages/ForgetPassword";
import ResetPassword from "@/pages/ResetPassword";
import PrivateRoute from "@/routes/PrivateRoute";
import VerifyOTP from "@/pages/VerifyOTP";

const router = createBrowserRouter([
    {
        path:'/',
        Component: MainLayout,
        children:[
            {
                index: true,
                path: '/',
                element: <PrivateRoute>
                    <Home></Home>
                </PrivateRoute>
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
            },
            {
                path:'/auth/forget-password',
                Component: ForgetPassword
            },
            {
                path: '/auth/reset-password/:token',
                Component: ResetPassword
            },
            {
                path:'/auth/verify-otp',
                Component: VerifyOTP
            }
        ]
    }
])


export default router