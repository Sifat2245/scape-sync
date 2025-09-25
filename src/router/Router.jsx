import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path:'/',
        Component: Home,
        children:[
            
        ]
    }
])


export default router