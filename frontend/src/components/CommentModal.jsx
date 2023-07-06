import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useRef } from "react";

export default function CommentModal({ clickComment, showCom, setShowCom }) {
	const { id } = useParams();
	console.log({id});
	const userName = localStorage.getItem("userName");

	const useRefComment = useRef();

	const sendComment = () => {
		axios.post(`http://localhost:4000/comments/create/${id}`, {
			comment: useRefComment.current.value,
			user: userName,
		});
	};

	return (
		<Modal
			show={showCom}
			size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
		>
			
					<Modal.Header>
						<Modal.Title className="modal-header">
							<h5 className="modal-title" id="commentModalLabel">
								Make a comment!
							</h5>
						</Modal.Title>

						<CloseButton
							type="button"
							className="close"
							data-bs-dismiss="modal"
							aria-label="Close"
							onClick={() => setShowCom(false)}
						/>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<div className="modal-body">
								{/* <form action="/comments/create/<%=post._id%>"  */}
								<div className="form-group mb-3">
									<textarea
										className="form-control border-danger"
										id="comment"
										name="comment"
										rows="5"
										ref={useRefComment}
									></textarea>
								</div>
								<div className="modal-footer">
									<Button
										onClick={clickComment}
										type="button"
										className="btn btn-secondary"
										data-bs-dismiss="modal"
									>
										Close
									</Button>

									<Button
										type="submit"
										onClick={sendComment}
										className="btn btn-primary"
									>
										Send
									</Button>
								</div>
							</div>
						</Form>
					</Modal.Body>
				
		</Modal>
	);
}
