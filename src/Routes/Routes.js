import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Layout2 from "../Pages/Layout2";
import Layout3 from "../Pages/Layout3";


export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
             {
                path:'/',
                element:<Home></Home>,
                
             },
             {
                path:'/layout2',
                element:<Layout2></Layout2>,
                loader:()=>fetch('http://localhost:5000/userinfo')
             },
             {
                path:'/layout3',
                element:<Layout3></Layout3>,
             },
        ]
    }
])