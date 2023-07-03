import { Link } from "react-router-dom";

const SignUp = ({ err }) => {
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
									<form action="/signup" method="post">
										<div className="form-floating mb-3">
											<input
												type="text"
												className="form-control"
												id="username"
												name="username"
												placeholder="Username"
												autoFocus
												autoComplete="username"
											/>
											<label htmlFor="username">Username</label>

											{err && (
												<div
													id="usernameError"
													className="alert alert-danger"
													data-bs-dismiss="alert"
													role="alert"
												>
													<i>{err.username}</i>
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
											/>
											<label htmlFor="floatingInputEmail">Email address</label>
											{err && (
												<div
													id="emailError"
													className="alert alert-danger"
													data-bs-dismiss="alert"
													role="alert"
												>
													<i>{err.email}</i>
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
											/>
											<label htmlFor="password">Password</label>
											{err && (
												<div
													id="passwordError"
													className="alert alert-danger"
													data-bs-dismiss="alert"
													role="alert"
												>
													<i>{err.password}</i>
												</div>
											)}
										</div>

										<div className="d-grid mb-2">
											<button
												className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
												type="submit"
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

										<Link className="d-block text-center mt-2 small" to="/login">
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
