import axios from "axios";
import { useRef, useState } from "react";
import {useNavigate} from "react-router-dom"


const Profile = () => {
	const navigate = useNavigate()
	const [error, setError] = useState("");
	const passwordRef1 = useRef();
	const passwordRef2 = useRef();

	let id = localStorage.getItem("userId");
	let userName = localStorage.getItem("userName");
	let userEmail = localStorage.getItem("userEmail");

	const submitHandler = (e) => {
		e.preventDefault();
		let password = passwordRef1.current.value;
		let confirmPassword = passwordRef2.current.value;
		axios
			.post(`http://localhost:4000/changepassword/${id}`, {
				password,
				confirmPassword,
			})
			.then((res) => {
				if (
					res.data.message === "Please enter a password!" ||
					res.data.message === "Passwords don't match!"
				) {
					setError(res.data.message);
				}
			});
			navigate("/")
	};

	return (
		<div className="d-flex profile fs-3">
			<form
				onSubmit={submitHandler}
				className="border border-primary w-75 m-auto p-4"
			>
				<div className="form-group row">
					<label htmlFor="staticUsername" className="col-sm-5 col-form-label">
						Username
					</label>
					<div className="col-sm-7">
						<input
							type="text"
							readOnly
							className="form-control-plaintext"
							id="staticUsername"
							value={userName}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="staticEmail" className="col-sm-5 col-form-label">
						Email
					</label>
					<div className="col-sm-7">
						<input
							type="text"
							readOnly
							className="form-control-plaintext"
							id="staticEmail"
							value={userEmail}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="inputPassword" className="col-sm-5 col-form-label">
						Password
					</label>
					<div className="col-sm-7">
						<input
							type="text"
							readOnly
							className="form-control-plaintext"
							id="inputPassword"
							value="*********"
						/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="password" className="col-sm-5 col-form-label">
						<b>New password</b>
					</label>
					<div className="col-sm-7">
						<input
							type="password"
							name="password"
							id="password"
							className="form-control"
							autoFocus
							ref={passwordRef1}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label
						htmlFor="confirmPassword"
						className="col-sm-5 col-form-label mt-2"
					>
						<b>Confirm password</b>
					</label>
					<div className="col-sm-7">
						<input
							type="password"
							name="confirmPassword"
							id="confirmPassword"
							className="form-control mt-2"
							ref={passwordRef2}
						/>
					</div>
				</div>
				{error && <p className="text-center text-danger mt-5">{error}</p>}
				<button
					type="submit"
					className="btn btn-primary mt-3"
					style={{ width: "-webkit-fill-available" }}
				>
					Change Password
				</button>
			</form>
		</div>
	);
};

export default Profile;
