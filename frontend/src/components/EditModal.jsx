import { useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const EditModal = ({ post, show }) => {
	const [title, setTitle] = useState("");
	const [question, setQuestion] = useState("");
	const titleRef = useRef();
	const questionRef = useRef();

	const submitHandler = () => {
		axios
			.post(`http://localhost:4000/updatePost/${post._id}`, { title, question })
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
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">
							Post
						</h5>
						<button
							type="button"
							class="close"
							data-bs-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<form
							onSubmit={(e) => {
								e.preventDefault();
								submitHandler();
							}}
						>
							<label for="title">Title</label>
							<input
								class="form-control mb-3"
								id="title"
								name="title"
								ref={titleRef}
							/>
							<div class="form-group mb-3">
								<textarea
									class="form-control border-danger"
									id="question"
									name="question"
									rows="3"
									ref={questionRef}
								>
									{post.question}
								</textarea>
							</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-secondary"
									data-bs-dismiss="modal"
								>
									Close
								</button>
								<button
									type="submit"
									class="btn btn-primary"
									onClick={() => {
										setTitle(titleRef.current.value);
										setQuestion(questionRef.current.value);
									}}
								>
									Save changes
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default EditModal;
