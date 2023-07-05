import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useState } from "react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const emailRef = useRef();
	const passwordRef = useRef();
	const navigate = useNavigate();

	const submitHandler = () => {
		axios
			.post("http://localhost:4000/login", { email, password })
			.then((res) => {
				if (res.data.username !== undefined) {
					localStorage.setItem("userToken", res.data.userToken);
					localStorage.setItem("userName", res.data.username);
					localStorage.setItem("userId", res.data.userId);
					navigate("/");
				} else setError(res.data);
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
								<div className="col-md-9 col-lg-8 mx-auto">
									<h3 className="login-heading mb-4">Welcome back!</h3>

									{/* <!-- Sign In Form --> */}
									<form
										onSubmit={(e) => {
											e.preventDefault();
											submitHandler();
										}}
									>
										<div className="form-floating mb-3">
											<input
												type="email"
												className="form-control"
												id="email"
												name="email"
												placeholder="name@example.com"
												autoComplete="email"
												autoFocus
												ref={emailRef}
											/>
											{error && error === "User could not be found" && (
												<div
													id="emailError"
													className="alert alert-danger"
													data-bs-dismiss="alert"
													role="alert"
												>
													{error}
												</div>
											)}

											<label htmlFor="email">Email address</label>
										</div>
										<div className="form-floating mb-3">
											<input
												type="password"
												className="form-control"
												id="password"
												name="password"
												placeholder="Password"
												autoComplete="password"
												ref={passwordRef}
											/>
											<label htmlFor="password">Password</label>
											{error && error === "Incorrect password" && (
												<>
													<div
														id="passwordError"
														className="alert alert-danger"
														data-bs-dismiss="alert"
														role="alert"
													>
														{error}
													</div>
												</>
											)}
										</div>

										<div className="form-check mb-3">
											<input
												className="form-check-input"
												type="checkbox"
												value=""
												id="rememberPasswordCheck"
												autoComplete="checkbox"
											/>

											<label
												className="form-check-label"
												htmlFor="rememberPasswordCheck"
											>
												Remember password
											</label>
										</div>

										<div className="d-grid">
											<button
												className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
												type="submit"
												onClick={() => {
													setEmail(emailRef.current.value);
													setPassword(passwordRef.current.value);
												}}
											>
												Sign in
											</button>
											<Link
												className="btn btn-lg btn-light btn-login text-uppercase fw-bold mb-2"
												to="/"
											>
												Back
											</Link>
											<div className="text-center">
												<Link className="small" to="/">
													Forgot password?
												</Link>
											</div>
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

export default Login;
