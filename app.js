import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
    <div className="app">
        <Header/>
        <Body/>
    </div>
)

const Header = () => (
    <div className="header">
        <div className="logo"></div>
        <div className="navItems">
            <h2 className="nav-items-inside">Home</h2>
            <h2 className="nav-items-inside">About</h2>
            <h2 className="nav-items-inside">Cart</h2>
        </div>
    </div>
)

const Body = () => (
    <div className="body">
        <div className="res-card">
            <img className="res-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"></img>
            <h3>Chinese Restaurent</h3>
        </div>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)