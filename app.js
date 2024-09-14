import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body  from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import ErrorComp from "./src/components/ErrorComp";
import ResMenu from "./src/components/ResMenu";

const App = () => (
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
)

const browserRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/restaurants/:resId",
                element: <ResMenu/>
            }
        ],
        errorElement: <ErrorComp/>
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={browserRouter}/>)