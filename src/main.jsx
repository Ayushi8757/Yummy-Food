import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { Outlet, RouterProvider,createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ResturantMenu from "./Components/ResturantMenu";

const AppLayout=()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

const appRouter=createBrowserRouter(
    [
        {
            path:"/",
            element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>
            },
             {
            path:"/resturant/:resId",
         element:<ResturantMenu/>
         }
        ]
        }
    ]
)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)


