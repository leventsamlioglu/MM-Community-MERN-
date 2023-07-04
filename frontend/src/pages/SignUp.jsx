import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";

const SignUp = () => {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const userNameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const navigate = useNavigate();

	const submitHandler = () => {
		axios
			.post("http://localhost:4000/signup", {
				email,
				password,
				username: userName,
			})
			.then((res) => {
				let err = "";

				if (res.data.errors) {
					if (res.data.errors.email) {
						err = res.data.errors.email.message;
					} else if (res.data.errors.username) {
						err = res.data.errors.username.message;
					} else if (res.data.errors.password) {
						err = res.data.errors.password.message;
					}
				} else setError("");
				res.data === "signUpPost"
					? navigate("/login")
					: res.data === "user is exist"
					? setError(res.data)
					: setError(err);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="container-fluid ps-md-0">
			<div className="row g-0">
				<div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
				<div className="col-md-8 col-lg-6">
					<div className="login d-flex align-items-center py-5">
						<div className="container">
							<div className="row">
								<div className="card-body p-4 p-sm-5">
									<h5 className="card-title text-center mb-5 fw-light fs-5">
										Register
									</h5>
									<form
										onSubmit={(e) => {
											e.preventDefault();
											submitHandler();
										}}
									>
										<div className="form-floating mb-3">
											<input
												type="text"
												className="form-control"
												id="username"
												name="username"
												placeholder="Username"
												autoFocus
												autoComplete="username"
												ref={userNameRef}
											/>
											<label htmlFor="username">Username</label>

											{error === "Please enter a username!" && (
												<div
													id="usernameError"
													className="alert alert-danger"
													data-bs-dismiss="alert"
													role="alert"
												>
													<i>{error}</i>
												</div>
											)}
										</div>

										<div className="form-floating mb-3">
											<input
												type="email"
												className="form-control"
												id="floatingInputEmail"
												name="email"
												placeholder="name@example.com"
												autoComplete="email"
												ref={emailRef}
											/>
											<label htmlFor="floatingInputEmail">Email address</label>
											{(error === "user is exist" ||
												error === "Please enter an email!") && (
												<div
													id="emailError"
													className="alert alert-danger"
													data-bs-dismiss="alert"
													role="alert"
												>
													<i>{error}</i>
												</div>
											)}
										</div>

										<hr />

										<div className="form-floating mb-3">
											<input
												type="password"
												className="form-control"
												id="password"
												name="password"
												placeholder="Password"
												autoComplete="off"
												ref={passwordRef}
											/>
											<label htmlFor="password">Password</label>
											{error === "Please enter a password!" && (
												<div
													id="passwordError"
													className="alert alert-danger"
													data-bs-dismiss="alert"
													role="alert"
												>
													<i>{error}</i>
												</div>
											)}
										</div>

										<div className="d-grid mb-2">
											<button
												className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
												type="submit"
												onClick={() => {
													setEmail(emailRef.current.value);
													setPassword(passwordRef.current.value);
													setUserName(userNameRef.current.value);
												}}
											>
												Register
											</button>
											<Link
												className="btn btn-lg btn-light btn-login text-uppercase fw-bold mb-2"
												to="/"
											>
												Back
											</Link>
										</div>

										<Link
											className="d-block text-center mt-2 small"
											to="/login"
										>
											Have an account? Sign In
										</Link>

										<hr className="my-4" />

										<div className="d-grid mb-2">
											<button
												className="btn btn-lg btn-google btn-login fw-bold text-uppercase"
												type="submit"
											>
												<i className="fab fa-google me-2"></i> Sign up with
												Google
											</button>
										</div>

										<div className="d-grid">
											<button
												className="btn btn-lg btn-facebook btn-login fw-bold text-uppercase"
												type="submit"
											>
												<i className="fab fa-facebook-f me-2"></i> Sign up with
												Facebook
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
