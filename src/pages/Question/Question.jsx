// import React, { useState, useContext, useRef } from "react";
// import classes from "./Question.module.css";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "../../axios/axiosConfig";
// import { AppState } from "../../App";
// function Question() {
// 	const { user } = useContext(AppState);
// 	const navigate = useNavigate();
// 	const token = localStorage.getItem("token");
// 	const titleDOM = useRef();
// 	const userDescDOM = useRef();
// 	const [message, setMessage] = useState();
// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		const titlevalue = titleDOM.current.value;
// 		const Descvalue = userDescDOM.current.value;
		
// 		if (!titlevalue || !Descvalue) {
// 			alert("Please fill all the fields");
// 		}
// 		try {
// 			await axios.post("/question/askquestion", {
// 				userid: user.userid,
// 				title: titlevalue,
// 				description: Descvalue,
// 			});
// 						setMessage("your question has been posted successfully");

// 			setTimeout(() => {
// 				const currentTime = new Date();
// 				const formattedTime = currentTime.toLocaleString("en-US", {
// 					hour: "numeric",
// 					minute: "numeric",
// 					second: "numeric",
// 					hour12: true,
// 				});

// 				navigate("/", { state: { time: formattedTime } });
// 			}, 2000);
// 		} catch (error) {
// 			alert("Posting the Question failed. Please try again");
// 		}
// 	};

// 	return (
// 		<div className={classes.mainCont}>
// 			<div className={classes.steps}>
// 				<h3>Steps to write a good question</h3>
// 				<ul>
// 					<li>Summarize your problem in a one-line title.</li>
// 					<li>Describe your problem in more detail.</li>
// 					<li>Describe what you tried and what you expect to happen.</li>
// 					<li>Review your question and post it to the site.</li>
// 				</ul>
// 			</div>
// 			<div className={classes.mainForm}>
// 				<h3>Ask a public question</h3>
// 				<Link to={"/"}>Go to Question page</Link>
// 				<div className={classes.message}>
// 					<h4>{message}</h4>
// 				</div>
// 				<form onSubmit={handleSubmit}>
// 					<input ref={titleDOM} type="text" placeholder="Title" />
// 					<textarea
// 						ref={userDescDOM}
// 						name="description"
// 						id="desc"
// 						rows="6"
// 						cols="50"
// 						maxLength="200"
// 						placeholder="Question Description"
// 					></textarea>
// 					<button type="submit">Post your Question</button>
// 				</form>
// 			</div>
// 		</div>
// 	);
// }

// export default Question;


import React, { useState } from "react";
import classes from "./Question.module.css";
import axios from "../../axios/axiosConfig";
import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { Appstate } from "../../App";

function Question() {
	const { user } = useContext(Appstate);
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	const titleDOM = useRef();
	const userDescDOM = useRef();

	const [message, setmessage] = useState();
	const [messagee, setMessagee] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();

		const titlevalue = titleDOM.current.value;
		const Descvalue = userDescDOM.current.value;

		if (!titlevalue || !Descvalue) {
			setMessagee("The fields are required");
			return; // Stop further execution if the fields are required
		}
		try {
			await axios.post("/question/askquestion", {
				userid: user.userid,
				title: titlevalue,
				description: Descvalue,
			});
			setmessage("The Question Posted Successfully ");
			setTimeout(() => {
				const currentTime = new Date();
				const formattedTime = currentTime.toLocaleString("en-US", {
					hour: "numeric",
					minute: "numeric",
					second: "numeric",
					hour12: true,
				});

				navigate("/home", { state: { time: formattedTime } });
			}, 1500);
		} catch (error) {
			alert("Something went wrong. Please try again later.");
			console.log(error);
		}
	}
	return (
		<div className={classes.askquestion}>
			<div>
				<div className={classes.askquestion__title}>
					<h3>Steps to write a good question</h3>
					<ul>
						<li>Summerize your problem in one-line title.</li>
						<li>Describe your problem in more detail.</li>
						<li>Describe what you tried and you expect to happen.</li>
						<li>Review your question and post it to the site.</li>
					</ul>
				</div>
				<div className={classes.form__container}>
					<h3>Ask a public question</h3>

					<Link to={"/"}>Go to Question page</Link>
					<div>
						<p
							style={{
								color: "red",
								textAlign: "center",
								paddingBottom: "5px",
							}}
						>
							{" "}
							{messagee}
						</p>
					</div>
					<div
						style={{
							color: "green",
							textAlign: "center",
							paddingBottom: "5px",
						}}
					>
						{message}
					</div>
					<form action="" onSubmit={handleSubmit}>
						<input ref={titleDOM} type="text" placeholder="Title" />

						<textarea
							name="description"
							ref={userDescDOM}
							id="desc"
							rows="6"
							cols="50"
							maxLength="200"
							placeholder="Question Description"
						></textarea>
						<button type="submit">Post Question</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Question;
