import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";
import axios from "axios";

const EditModal = ({ post, show, click, setShow }) => {
	const titleRef = useRef();
	const questionRef = useRef();

	const submitHandler = () => {
		axios
			.post(`http://localhost:4000/updatePost/${post._id}`, {
				title: titleRef.current.value,
				question: questionRef.current.value,
			})
			.then((res) => {
				console.log(res);
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
				<Modal.Title className="modal-header">
					<h5 className="modal-title" id="exampleModalLabel">
						Post
					</h5>
				</Modal.Title>
				<CloseButton
					onClick={() => setShow(false)}
					type="button"
					className="close"
					data-bs-dismiss="modal"
					aria-label="Close"
				/>
			</Modal.Header>

			<div className="modal-body">
				<Modal.Body>
					<Form>
						<label htmlFor="title">Title</label>
						<input
							className="form-control mb-3"
							id="title"
							name="title"
							ref={titleRef}
							defaultValue={post.title}
						/>
						<div className="form-group mb-3">
							<textarea
								className="form-control border-danger"
								id="question"
								name="question"
								rows="3"
								ref={questionRef}
								defaultValue={post.question}
							></textarea>
						</div>
						<div className="modal-footer">
							<Button
								onClick={click}
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Close
							</Button>
							<Button
								type="submit"
								className="btn btn-primary"
								onClick={() => {
									// setTitle(titleRef.current.value);
									// setQuestion(questionRef.current.value);
									submitHandler();
								}}
							>
								Save changes
							</Button>
						</div>
					</Form>
				</Modal.Body>
			</div>
		</Modal>
	);
};

export default EditModal;
