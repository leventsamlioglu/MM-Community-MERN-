import { useEffect, useState } from "react";
import axios from "axios";
import PostModal from "../components/PostModal";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const HomePage = () => {
	const [posts, setPosts] = useState([]);
	const [showModal, setShowModal] = useState(false);

	let userToken = localStorage.getItem("userToken") || null;
	let userName = localStorage.getItem("userName") || null;
	axios.defaults.headers.common["userToken"] = userToken;

	useEffect(() => {
		axios.get("http://localhost:4000/").then((res) => {
			setPosts(res.data);
		});
	}, []);

	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	return (
		<>
			<div className="container text-center">
				{userName && (
					<button
						type="button"
						className="btn btn-warning btn-lg mb-4 mt-5 fs-2 btn-anime"
						// data-bs-toggle="modal"
						// data-bs-target="#exampleModal"
						style={{ width: "50%", color: "black" }}
						onClick={handleShow}
					>
						Ask a question!
					</button>
				)}

				<div className="users" style={{ marginTop: "50px" }}>
					{posts && (
						<>
							<h2 className="mb-4 text-center" style={{ fontSize: "6rem" }}>
								All Questions
							</h2>
							<div className="row row-cols-3 g-4 mt-4">
								{posts.map((post, index) => {
									let date = new Date(post.createdAt);
									let formattedDate =
										date.getDate() +
										"-" +
										(date.getMonth() + 1) +
										"-" +
										date.getFullYear();

									return (
										<div key={index} className="col">
											<div className="card h-100 border-info">
												<img
													src="/image.webp"
													className="card-img-top img-fluid"
													alt="Question"
												/>

												<div className="card-body d-flex justify-content-between flex-column">
													<h4
														className="card-title fst-bold mb-4"
														style={{ fontSize: "1.5em" }}
													>
														{post.title}
													</h4>
													<p className="card-text fst-italic">
														{post.question.slice(0, 250)}
													</p>
													<div className="mb-2">
														<Link
															to={`/posts/create/${post._id}`}
															className="fst-italic"
														>
															See more...
														</Link>
													</div>
												</div>

												<div className="card-footer">
													<small className="text-muted ">
														Posted by{" "}
														<i className="text-danger">
															{post.owner.username.toString()}
														</i>{" "}
														at: {formattedDate}
													</small>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</>
					)}
					{!posts && <p>There are no blogs to display...</p>}
				</div>
			</div>
			<Footer />
			{showModal && (
				<PostModal
					click={handleClose}
					show={showModal}
					setShow={setShowModal}
				/>
			)}
		</>
	);
};

export default HomePage;
