import React, { useEffect, useState, createContext } from "react";
import Home from "./Pages/Home/Home";
import { Route, Routes, useNavigate, Router } from "react-router-dom";
import Question from ".././src/Pages/Question/Question";
import Layout from "../src/Pages/Layout/Layout";
import Answer from "../src/Pages/Answer/Answer";
import LoginSignup from "../src/Pages/LoginSignup/LoginSignup";
import Terms from "../src/Pages/Terms/Terms";
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
