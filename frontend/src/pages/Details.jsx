import { useEffect, useState } from "react";
import EditModal from "../components/EditModal";
import CommentModal from "../components/CommentModal";
// import Like from "../components/Like";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Details() {
	const navigate = useNavigate();

	const [post, setPost] = useState({});
	const [err, setErr] = useState();
	const [comments, setComments] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [showComment, setShowComment] = useState(false);
	const [postOwner, setPostOwner] = useState();

	const { id } = useParams();

	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	const commentClose = () => setShowComment(false);
	const commentShow = () => setShowComment(true);

	const userId = localStorage.getItem("userId");
	const username = localStorage.getItem("userName");
	const userToken = localStorage.getItem("userToken") || null;
	axios.defaults.headers.common["userToken"] = userToken;

	useEffect(() => {
		axios
			.get(`http://localhost:4000/posts/create/${id}`)
			.then((res) => {
				setPostOwner(res.data.post.owner._id);
				setPost(res.data.post);
				setComments(res.data.comment);
				setErr(res.data.err);
			})
			.catch((err) => console.log(err));
	}, [id]);

	const deletePost = () => {
		axios
			.post(`http://localhost:4000/postDelete/${id}`)
			.then((res) => {})
			.catch((err) => console.log(err));

		navigate("/");
	};

	const commentDelete = (commentId) => {
		axios
			.post(`http://localhost:4000/comments/delete/${commentId}`)
			.then((res) => {
				window.location.reload();
			});
	};

	return (
		<div>
			<div
				className="card text-center m-auto mt-4 mb-4 border-info"
				style={{ width: "38rem" }}
			>
				<img src="../../questions.jpg" className="card-img-top" alt="blog" />
				<div className="card-body d-flex flex-column">
					<h3 className="card-title mb-4">{post && post.title}</h3>

					<i>{err && err["title"]}</i>
					<p className="card-text fs-5"> {post && post.question}</p>

					<i>{err && err["questions"]}</i>
				</div>
				<div>
					{userId === postOwner ? (
						<div>
							<Button
								type="button"
								id="editButton"
								style={{ width: "100%", background: "none" }}
								className="btn btn-outline-warning"
								data-bs-toggle="modal"
								data-bs-target="#exampleModal"
								onClick={handleShow}
							>
								Edit
							</Button>

							<Button
								id="deleteButton"
								style={{ width: "100%", marginTop: " 5px", background: "none" }}
								className="btn btn-outline-danger mb-3"
								onClick={() => deletePost()}
							>
								Delete
							</Button>
						</div>
					) : null}
				</div>

				<div>
					{userId && (
						<Button
							className="btn btn-primary mb-3"
							type="button"
							data-bs-toggle="modal"
							data-bs-target="#commentModal"
							onClick={commentShow}
						>
							Make a Comment
						</Button>
					)}
				</div>
				<div className="card-footer text-muted">Last update: 3 hours ago</div>
			</div>

			{/* <!-- OpenAI Comment --> */}
			<div className="row d-flex justify-content-center">
				<div className="col-md-7 col-lg-6 m-auto">
					<div
						className="card shadow-0 border"
						style={{ backgroundColor: "#f0f2f5" }}
					>
						<div className="card-body p-4">
							<div className="card mb-4">
								<div className="card-body">
									<div className="d-flex justify-content-between">
										<p> {post && post.answer}</p>
									</div>
									<div className="d-flex justify-content-between">
										<div className="d-flex flex-row align-items-center">
											<img
												src="https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png"
												alt="avatar"
												width="25"
												height="25"
											/>
											<p className="small mb-0 ms-2">Commented by OpenAI</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Comments --> */}

			{comments &&
				comments.map((comment, index) => (
					<div key={index} className="row d-flex justify-content-center">
						<div className="col-md-7 col-lg-6">
							<div
								className="card shadow-0 border"
								style={{ backgroundColor: "#f0f2f5" }}
							>
								<div className="card-body p-4">
									<div className="card mb-4">
										<div className="card-body">
											<div className="d-flex flex-column justify-content-between">
												<p>{comment.comment}</p>
											</div>
											<div className="d-flex justify-content-between">
												<div className="d-flex flex-row align-items-center">
													<img
														src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
														alt="avatar"
														width="25"
														height="25"
													/>
													<p className="small mb-0 ms-2 ">
														Commented by {comment.user}
													</p>

													{username === comment.user ? (
														<Button
															className="btn btn-outline-danger"
															style={{ background: "none", marginLeft: "6em" }}
															onClick={() => {
																commentDelete(comment._id);
															}}
														>
															Delete
														</Button>
													) : null}
												</div>
												{/* <Like /> */}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			<div>
				{/* <!-- Edit Modal --> */}
				{showModal && (
					<EditModal
						click={handleClose}
						show={showModal}
						setShow={setShowModal}
						post={post}
					/>
				)}

				{/* <!-- Comment Modal --> */}
				{showComment && (
					<CommentModal
						clickComment={commentClose}
						showCom={showComment}
						setShowCom={setShowComment}
					/>
				)}
			</div>
		</div>
	);
}
