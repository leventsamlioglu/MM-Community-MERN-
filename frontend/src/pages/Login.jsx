import { Link } from "react-router-dom";

const Login = ({ error }) => {
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
									<form action="/login" method="post">
										<div className="form-floating mb-3">
											<input
												type="email"
												className="form-control"
												id="email"
												name="email"
												placeholder="name@example.com"
												autoComplete="email"
											/>
											{error && error.message === "User could not be found" && (
												<div
													id="emailError"
													className="alert alert-danger"
													data-bs-dismiss="alert"
													role="alert"
												>
													{error.message}
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
											/>
											<label htmlFor="password">Password</label>
											{error && error.message === "Incorrect password" && (
												<>
													<div
														id="passwordError"
														className="alert alert-danger"
														data-bs-dismiss="alert"
														role="alert"
													>
														{error.message}
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
