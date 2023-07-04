import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const PostModal = ({ click, show }) => {
	return (
		<Modal
			show={show}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Send a question to community
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form>
					<div className="form-group">
						<label htmlFor="title">Title</label>
						<input
							className="form-control mb-3"
							id="title"
							name="title"
							required
							minLength="3"
						/>

						<label htmlFor="question">Question</label>
						<textarea
							className="form-control mb-3"
							id="question"
							name="question"
							rows="5"
							minLength="5"
							required
						></textarea>
					</div>
				</form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={click} className="btn btn-secondary">
					Close
				</Button>
				<Button type="submit" className="btn btn-primary">
					Send
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default PostModal;
