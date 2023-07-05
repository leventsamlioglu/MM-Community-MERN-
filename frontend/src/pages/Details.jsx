import { useEffect, useState } from "react"
import EditModal from "../components/EditModal"
import CommentModal from "../components/CommentModal";
import Like from "../components/Like"
import axios from "axios";
import { useParams } from "react-router-dom";


export default function Details () {



const [post,setPost]=useState({});
const [err,setErr]=useState();
const[comments,setComments]=useState([]);
const[question,setQuestion]=useState()
const {id}=useParams()

const handleClose = () => setShowModal(false);
const handleShow = () => setShowModal(true);
const [showModal, setShowModal] = useState(false);


const userId=localStorage.getItem("userId");
const username=localStorage.getItem("userName")
console.log(userId);

useEffect(()=> {

axios.get(`http://localhost:4000/posts/create/${id}`)
    .then((res)=> {console.log(res.data);
         setPost(res.data.post); setComments(res.data.comments); setErr(res.data.err)})
    .catch(err=>console.log(err))

},[])





const getEditPage=()=> {



}



    return(

<div>
		

		<div
			className="card text-center m-auto mt-4 mb-4 border-info"
			style={{width: '38rem'}}
		>
			<img
				src="https://blog.labelmaster.com/wp-content/uploads/Top-Questions-Blog-Post-567x360.jpg"
				className="card-img-top"
				alt="blog"
			/>
			<div className="card-body d-flex flex-column">
				<h3 className="card-title mb-4">{ post &&  post.title}</h3>
				

				<i>{ err && err['title'] }</i>
				<p class="card-text fs-5"> {post && post.question}</p>

			
				
				<i>{err && err['questions']}</i>
				
			</div>
            <div>
			{ 
            
                (userId===post.owner) ?
                <div>    
			
				<button
					type="button"
					id="editbutton"
					style={{width: "100%"}}
					className="btn btn-outline-warning"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal"
                    onClick={handleShow}
				>
					Edit
				</button>
			
			<form action={`/postDelete/$ {post._id}`} method="post">
				<button
					id="deleteButton"
					style={{width: "100%", marginTop:" 5px"}}
					className="btn btn-outline-danger mb-3"
				>
					Delete
				</button>
			</form>
            </div>
            :null
			  }
</div>
              
<div>
            {
                
                userId && (

			<button
				className="btn btn-primary"
				type="button"
				data-bs-toggle="modal"
				data-bs-target="#commentModal"
			>
				Make a Comment
			</button>
                )
			}
            </div>
			<div className="card-footer text-muted">Last update: 3 hours ago</div>
		</div>

		{/* <!-- OpenAI Comment --> */}
		<div className="row d-flex justify-content-center">
			<div className="col-md-7 col-lg-6 m-auto">
				<div className="card shadow-0 border" style={{backgroundColor: "#f0f2f5"}}>
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
        
		{
     
         (comments)  &&   (comments.map((comment)=>(
    
		<div className="row d-flex justify-content-center">
			<div className="col-md-7 col-lg-6">
				<div className="card shadow-0 border" style={{backgroundColor: "#f0f2f5"}}>
					<div className="card-body p-4">
						<div className="card mb-4">
							<div className="card-body">
								<div className="d-flex flex-column justify-content-between">
									<p>{comment.comment}</p>
                                    </div>
                                    <div>
									{ 
                                         (username==comment.user) ?
                                    
									<form
										action="/comments/delete/<%= comment._id%>"
										method="post"
									>
										<button className="btn btn-outline-danger mb-3">Delete</button>
									</form>
                                    :null
                                    
                                    }
                                    </div>
									<div className="d-flex justify-content-between">
									<div className="d-flex flex-row align-items-center">
										<img
											src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
											alt="avatar"
											width="25"
											height="25"
										/>
										<p className="small mb-0 ms-2">
											Commented by {comment && comment.user}
										</p>
									</div>

                                   
									
									<Like />
								</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
        </div>
           )  )  ) 
                                
                                
                                }
<div>
		{/* <!-- Edit Modal --> */}
		{showModal && <EditModal  click={handleClose} show={showModal} setShow={setShowModal} post={post} />}

		{/* <!-- Comment Modal --> */}
		<CommentModal />
	</div>


    
 </div>
    )
}
