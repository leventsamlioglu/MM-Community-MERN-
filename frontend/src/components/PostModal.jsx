import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";
import axios from "axios";

const PostModal = ({ click, show, setShow }) => {
	const [titleError, setTitleError] = useState("");
	const [questionError, setQuestionError] = useState("");

	const titleRef = useRef();
	const questionRef = useRef();

	const id = localStorage.getItem("userId");

	const submitHandler = () => {
		axios
			.post(`http://localhost:4000/sendPost/${id}`, {
				title: titleRef.current.value,
				question: questionRef.current.value,
			})
			.then((res) => {
				if (Object.keys(res.data).length === 2) {
					setTitleError(res.data.title.message);
					setQuestionError(res.data.question.message);
				} else if (Object.keys(res.data)[0] === "title") {
					setTitleError(res.data.title.message);
					setQuestionError("");
				} else if (Object.keys(res.data)[0] === "question") {
					setTitleError("");
					setQuestionError(res.data.question.message);
				} else {
					setShow(false);
					window.location.reload();
					// navigate("/");
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<Modal
			show={show}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header>
				<Modal.Title id="contained-modal-title-vcenter">
					Send a question to community
				</Modal.Title>
				<CloseButton onClick={() => setShow(false)} />
			</Modal.Header>
			<Modal.Body>
				<Form>
					<div className="form-group">
						<label htmlFor="title">Title</label>
						<input
							className="form-control mb-3"
							id="title"
							name="title"
							required
							minLength="3"
							ref={titleRef}
						/>
						{titleError && (
							<div
								id="titleError"
								className="alert alert-danger"
								data-bs-dismiss="alert"
								role="alert"
							>
								{titleError}
							</div>
						)}

						<label htmlFor="question">Question</label>
						<textarea
							className="form-control mb-3"
							id="question"
							name="question"
							rows="5"
							minLength="5"
							required
							ref={questionRef}
						></textarea>
						{questionError && (
							<div
								id="titleError"
								className="alert alert-danger"
								data-bs-dismiss="alert"
								role="alert"
							>
								{questionError}
							</div>
						)}
					</div>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={click} className="btn btn-secondary">
					Close
				</Button>
				<Button
					type="submit"
					className="btn btn-primary"
					onClick={() => {
						submitHandler();
					}}
				>
					Send
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default PostModal;
