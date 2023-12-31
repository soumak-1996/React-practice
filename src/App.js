import React, { lazy, useState,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import useOnlineStatus from "./utils/useOnlineStatus";
import Shimmer from "./Components/Shimmer";
import { Provider } from "react-redux";
import appStore from "./utils/appstore";
//Chunking
// Code Splitting
// Dynamic Bundling
// lazy loading
const Grocery = lazy(() => import("./Components/Grocery") );

const Cart = lazy(() => import("./Components/Cart"));
const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header/>
                <Outlet/>
            </div>
        </Provider>
    )
}
const approuter = createBrowserRouter([
    {
        path: "/",
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path: "/contact",
                element : <Contact/>
            },
            {
                path : "/restaurants/:resId",
                element : <RestaurantMenu/>
            },
            {
                path : "/grocery",
                element : <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path : "/cart",
                element : <Suspense fallback={<Shimmer/>}><Cart/></Suspense>
            }
        ],
        errorElement: <Error/>
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter}/>);