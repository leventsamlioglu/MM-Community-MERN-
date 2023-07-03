import { useEffect, useState } from "react";
import axios from "axios";
import PostModal from "../components/PostModal";

const HomePage = () => {
	const [posts, setPosts] = useState([]);
	const [showModal, setShowModal] = useState(false);

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
				<button
					type="button"
					className="btn btn-warning btn-lg mb-4 mt-4 fs-2 btn-anime"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal"
					style={{ width: "50%", color: "black" }}
					onClick={handleShow}
				>
					Ask a question!
				</button>

				<div className="users" style={{ marginTop: "50px" }}>
					{posts && (
						<>
							<h2 className="mb-4 text-center" style={{ fontSize: "6rem" }}>
								All Questions
							</h2>
							<div className="row row-cols-3 g-4 mt-4">
								{posts.map((post, index) => (
									// let formattedDate = post.createdAt.getDate()+ "-" + (post.createdAt.getMonth()+1) + "-" +post.createdAt.getFullYear()

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
													<a
														href="/posts/create/<%= post._id %>"
														className="fst-italic"
													>
														See more...
													</a>
												</div>
											</div>

											<div className="card-footer">
												<small className="text-muted ">
													Posted by{" "}
													<i className="text-danger">
														{post.owner.username.toString()}
													</i>{" "}
													at: XXX
												</small>
											</div>
										</div>
									</div>
								))}
							</div>
						</>
					)}
					{!posts && <p>There are no blogs to display...</p>}
				</div>
			</div>

			{showModal && <PostModal />}
		</>
	);
};

export default HomePage;
