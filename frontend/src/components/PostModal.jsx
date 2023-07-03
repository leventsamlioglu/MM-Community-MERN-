const PostModal = () => {
	return (
		<div
			className="modal fade"
			id="exampleModal"
			tabIndex="-1"
			role="dialog"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog" role="document">
				<div className="modal-content text-dark">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">
							Send a question to our community
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
						<form action="/sendPost/<%=userId%>" method="post">
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
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-bs-dismiss="modal"
								>
									Close
								</button>
								<button type="submit" className="btn btn-primary">
									Send
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostModal;
