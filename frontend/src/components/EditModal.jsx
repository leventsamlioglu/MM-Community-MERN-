import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";



const EditModal = ({ post, show,click,setShow }) => {
	const [title, setTitle] = useState("");
	const [question, setQuestion] = useState("");
	const titleRef = useRef();
	const questionRef = useRef();
const {id}=useParams()
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
			//  Navigate(`/posts/create/${id}`)
	};
	return (
		<Modal
			show={show}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			
			<div className="modal-dialog" role="document">
			
				<div className="modal-content">
				<Modal.Header>
					<Modal.Title className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">
							Post
						</h5>
						</Modal.Title>
						<CloseButton onClick={() => setShow(false)}
							type="button"
							className="close"
							data-bs-dismiss="modal"
							aria-label="Close"
						
							
						 />
						
						</Modal.Header>
						
						
					
					<div className="modal-body">
					<Modal.Body>
					<Form
							// onSubmit={(e) => {
							// 	e.preventDefault();
								
							// }}
						>
							<label for="title">Title</label>
							<input
								className="form-control mb-3"
								id="title"
								name="title"
								ref={titleRef}
							/>
							<div className="form-group mb-3">
								<textarea
									className="form-control border-danger"
									id="question"
									name="question"
									rows="3"
									ref={questionRef}
								>
									{post.question}
								</textarea>
							</div>
							<div className="modal-footer">
							<Button onClick={click}
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
				</div>
			</div>
		</Modal>
	);
};

export default EditModal;
