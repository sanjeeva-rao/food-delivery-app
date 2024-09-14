import { Link } from "react-router-dom";

const Header = () => (
    <div className="header">
        <div className="logo"></div>
        <div className="navItems">
            <Link to="/"><h2 className="nav-items-inside" >Home</h2></Link>
            <Link to="/about"><h2 className="nav-items-inside">About</h2></Link>
            <h2 className="nav-items-inside">Cart</h2>
        </div>
    </div>
)

export default Header;