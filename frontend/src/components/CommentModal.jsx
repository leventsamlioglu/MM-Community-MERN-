
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import Form from "react-bootstrap/Form";
import axios from "axios";
import {  useParams } from "react-router-dom";
import { useRef, useState } from "react";

export default function CommentModal ({clickComment, showCom, setShowCom}){
const {id}=useParams()
const usName=localStorage.getItem("userName");


const useRefComment=useRef()

const	sendComment =()=> {
	console.log();
	axios.post(`http://localhost:4000/comments/create/${id}`, {
			comment: useRefComment.current.value,
			user:usName
	} )


}





    return(

		<Modal show={showCom}
        
	className="modal fade"
	id="commentModal"
	tabIndex="-1"
	role="dialog"
	aria-labelledby="commentModalLabel"
	aria-hidden="true"
>

	<div className="modal-dialog" role="document">
		<div className="modal-content">
		<Modal.Header>
		<Modal.Title className="modal-header">
				<h5 className="modal-title" id="commentModalLabel">
					Make a comment!
				</h5>
				</Modal.Title>
				
					
				<CloseButton type="button"
					className="close"
					data-bs-dismiss="modal"
					aria-label="Close" onClick={() => setShowCom(false)} />
					


			
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
							rows="3"
ref={useRefComment}
							></textarea>
					</div>
					<div className="modal-footer">
					<Button onClick={clickComment} type="button"
							className="btn btn-secondary"
							data-bs-dismiss="modal">
                    Close
                </Button>
						
						<Button type="submit" onClick={sendComment} className="btn btn-primary">
							Send
							</Button>
					</div>
					
				
			</div>
			</Form>
            </Modal.Body>
		</div>
	</div>




</Modal>

    )
}