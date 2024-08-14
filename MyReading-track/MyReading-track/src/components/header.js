import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
        <h1>MyReading</h1>
        <div className="links">
            {/* check if link is active */}
            {window.location.pathname === "/" ? 
                <Link className="link active" to="/">Home</Link> 
                : 
                <Link className="link" to="/">Home</Link>
            }
            {window.location.pathname === "/search" ? 
                <Link className="link active" to="/search">Search</Link> 
                : 
                <Link className="link" to="/search">Search</Link>
            }
        </div>
        </div>
    );
}

export default Header;