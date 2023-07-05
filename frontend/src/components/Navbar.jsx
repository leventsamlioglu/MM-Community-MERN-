import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	const userName = localStorage.getItem("userName");

	const clickHandler = () => {
		localStorage.removeItem("userName");
		localStorage.removeItem("userId");
		localStorage.removeItem("userToken");
		navigate("/");
		window.location.reload();
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark justify-content-between p-4 w-100">
			<Link to="/" className="navbar-brand" style={{ fontSize: "2em" }}>
				Matrix Master Community
			</Link>

			<ul className="navbar-nav mr-auto" style={{ fontSize: "1.5em" }}>
				{userName ? (
					<>
						<li className="nav-item active">
							<p className="nav-link">
								Welcome: <i>{userName}</i>
							</p>
						</li>
						<li className="nav-item active">
							<Link to="/profile/<%=userId%>" className="nav-link">
								Profile
							</Link>
						</li>
						<li className="nav-item active">
							<Button
								className="nav-link"
								id="btnLogout"
								onClick={clickHandler}
							>
								Logout
							</Button>
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
