import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Details from "./pages/Details";
import EditModal from "./components/EditModal";
import CommentModal from "./components/CommentModal";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/logout" element={<HomePage />} />
					<Route path="/posts/create/:id" element={<Details />} />
					<Route path="/editPost/:id" element={<EditModal />} />
					
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
