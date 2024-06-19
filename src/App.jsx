// import { Route, Routes, useNavigate } from "react-router-dom";
// import "./index.css";
// import Home from "./Pages/Home/Home";
// import Login from "./Pages/Login/Login";
// import Register from "./Pages/Register/Register";
// import { useEffect, useState, createContext } from "react";
// import axios from "./axios/axiosConfig";
// import Layout from "./Pages/Layout/Layout";
// import Question from "./Pages/Question/Question";
// import Answer from "./Pages/Answer/Answer";
// import Terms from "./Pages/Terms/Terms";
// import Footer from "./Pages/Footer/Footer";
// import { AuthProvider } from "./AuthContext";

// export const AppState = createContext();

// function App() {
// 	const [user, setUser] = useState({});
// 	const token = localStorage.getItem("token");
// 	const navigate = useNavigate();
// 	const [isLoggedIn, setIsLoggedIn] = useState(false);

// 	async function checkUser() {
// 		try {
// 			const { data } = await axios.get("/users/check", {
// 				headers: { Authorization: "Bearer " + token },
// 			});
// 			setUser(data);
// 			setIsLoggedIn(true);
// 		} catch (error) {
// 			console.log(error.response);
// 			navigate("/login");
// 		}
// 	}

// 	useEffect(() => {
// 		if (token) {
// 			checkUser();
// 		} else {
// 			navigate("/login");
// 		}
// 	}, [token]);

// 	return (
// 		    <AuthProvider>
// 		<Layout>
// 			<AppState.Provider value={{ user, setUser }}>
// 				<Routes>
// 					<Route path="/" element={<Home />} />
// 					<Route path="/login" element={<Login />} />
// 					<Route path="/register" element={<Register />} />
// 					<Route path="/askquestion" element={<Question />} />
// 					<Route path="/answer/:questionId" element={<Answer />} />
// 					<Route path="/question/:questionId" element={<Question />} />
// 					<Route path="/terms" element={<Terms />} />
// 					<Route path="/" element={<Footer />} />
// 				</Routes>
// 			</AppState.Provider>
// 		</Layout>
// 		    </AuthProvider>
// 	);
// }

// export default App;
import React, { useEffect, useState, createContext } from "react";
import Home from "./Pages/Home/Home";
import { Route, Routes, useNavigate, Router } from "react-router-dom";
import Question from ".././src/Pages/Question/Question";
import Layout from "../src/Pages/Layout/Layout";
import Answer from "../src/Pages/Answer/Answer";
import LoginSignup from "../src/Pages/LoginSignup/LoginSignup";
import Terms from "../src/Pages/Terms/Terms";
// import Layout from "./Pages/Layout/Layout";
import axios from "./axios/axiosConfig";
export const Appstate = createContext();
function App() {
	const [user, setuser] = useState({});
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const token = localStorage.getItem("token");
	const navigate = useNavigate();
	async function chekuser() {
		try {
			const { data } = await axios.get("/users/check", {
				headers: { authorization: "Bearer " + token },
			});
			setuser(data);
			setIsLoggedIn(true);
		} catch (error) {
			navigate("/");
			setIsLoggedIn(false);
		}
	}
	useEffect(() => {
		chekuser();
	}, [token]);
	async function handleLogout() {
		try {
			// Clear user data and token from local storage
			setuser({});
			localStorage.removeItem("token");
			setIsLoggedIn(false);
			navigate("/");
		} catch (error) {
			console.error("Error logging out:", error);
		}
	}

	return (
		<Appstate.Provider value={{ user, setuser, isLoggedIn, handleLogout }}>
			{/* Header Layout */}
			<Layout>
				<Routes>
					<Route path="/" element={<LoginSignup />} />
					<Route path="/askquestion" element={<Question />} />
					<Route path="/home" element={<Home />} />
					<Route path="/answer/:questionId" element={<Answer />} />
					<Route path="/terms" element={<Terms />} />
				</Routes>
			</Layout>
		</Appstate.Provider>
	);
}

export default App;
