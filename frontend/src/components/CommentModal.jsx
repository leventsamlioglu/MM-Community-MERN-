export default function CommentModal (){




    



    return(


        <div
	className="modal fade"
	id="commentModal"
	tabindex="-1"
	role="dialog"
	aria-labelledby="commentModalLabel"
	aria-hidden="true"
>
	<div className="modal-dialog" role="document">
		<div className="modal-content">
			<div className="modal-header">
				<h5 className="modal-title" id="commentModalLabel">
					Make a comment!
				</h5>
				<button
					type="button"
					className="close"
					data-bs-dismiss="modal"
					aria-label="Close"
				>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div className="modal-body">
				<form action="/comments/create/<%=post._id%>" method="post">
					<div className="form-group mb-3">
						<textarea
							className="form-control border-danger"
							id="comment"
							name="comment"
							rows="3"
							></textarea>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-bs-dismiss="modal"
						>
							Close
						</button>
						<button type="submit" className="btn btn-primary">Send</button>
					</div>
					
				</form>
			</div>
		</div>
	</div>
</div>

    )
}