import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    
    let username = localStorage.getItem("userName")
    let id = localStorage.getItem("userId")
    
    const clickHandler=()=>{
        localStorage.removeItem("userName")
        localStorage.removeItem("userId")
        localStorage.removeItem("userToken")
        navigate("/")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark justify-content-between  p-4 w-100">
            <Link to="/" className="navbar-brand" style={{ fontSize: "2em" }}>
                Matrix Master Community
            </Link>

            <ul className="navbar-nav mr-auto" style={{ fontSize: "1.5em" }}>
                {username ? (
                    <>
                        <li className="nav-item active">
                            <p className="nav-link">
                                Welcome: <i>{username}</i>
                            </p>
                        </li>
                        <li className="nav-item active">
                            <Link to={`/profile/${id}`} className="nav-link">
                                Profile
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/logout" className="nav-link" onClick={clickHandler}>
                                Logout
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="nav-item active">
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/signup" className="nav-link">
                                {" "}
                                Sign up{" "}
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;