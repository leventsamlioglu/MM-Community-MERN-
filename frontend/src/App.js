import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Details from "./pages/Details";
import EditModal from "./components/EditModal";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/posts/create/:id" element={<Details />} />
					<Route path="/editPost/:id" element={<EditModal />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
