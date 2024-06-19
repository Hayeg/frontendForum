// import React, { useEffect, useState, useRef, useContext } from "react";
// import { useParams } from "react-router-dom";
// import axios from "../../axios/axiosConfig";
// import { AppState } from "../../App";
// import classes from "./Answer.module.css";
// import QuestionCard from "../QuestionCard/QuestionCard";
// import { FaArrowAltCircleRight } from "react-icons/fa";

// function Answer() {
// 	const answerDOM = useRef();
// 	const { user } = useContext(AppState);
// 	const [singledata, setsingledata] = useState({});
// 	let { questionId } = useParams();
// 	const [answering, setAnswering] = useState({});
// 	const [message, setMessage] = useState("");
// 	const [ansmessage, setansmessage] = useState("");


// 	async function handleSubmit(e) {
// 		e.preventDefault();
// 		const answervalue = answerDOM.current.value;

// 		if (!answervalue) {
// 			setMessage("The fields are required");
// 			return;
// 		}
// 		try {
// 			await axios.post("answer/answerQuestion", {
// 				userid: user.userid,
// 				questionid: questionId,
// 				answer: answervalue,
// 			});
// 			setansmessage("The Answer Posted Successfully");
// 			// Fetch the updated answers to update the state
// 				// const qanswer = await axios.get(
// 				// 	`/question/selectansawer?questionId=${questionId}`
// 				// );
// 			// setAnswering(qanswer);
// 			// ((prevAnswers) => [
// 			// 	...(Array.isArray(prevAnswers) ? prevAnswers : []),
// 			// 	{ username: user.username, answer: answervalue },
// 			// ]);

// 			// Clear the input field
// 			// answerDOM.current.value = "";
// 		} catch (error) {
// 			alert(error);
// 		}
// 	}
// useEffect(() => {
// 	async function selectSingleQuestion() {
// 		try {
// 			const { data } = await axios.get(
// 				`/question/selectsinglequestion?questionId=${questionId}`
// 			);
// 			setsingledata(data.question);
// 			// console.log(data.question);

// 			const {qanswer} = await axios.get(
// 				`/question/selectansawer?questionId=${questionId}`
// 			);
// 			setAnswering(qanswer.data); // Ensure we are setting an array
// 		} catch (error) {
// 			// console.error(error);
// 			// console.log(error.message);
// 		}
// 	}
// 	selectSingleQuestion();
// }, []);
// console.log(answering);
// 	return (
// 		<section className={classes.answer}>
// 			<section className={classes.answer__container}>
// 				<div className={classes.answer__title}>
// 					<h1>QUESTION</h1>
// 					<div>
// 						<div>
// 							<FaArrowAltCircleRight
// 								size={30}
// 								style={{ padding: "10px 5px 0px", color: "#516CF0" }}
// 							/>
// 							<div className={classes.title}>{singledata.title}</div>
// 							<div className={classes.line}></div>
// 							<p>{singledata.description}</p>
// 						</div>
// 					</div>
// 				</div>
// 				<hr />
// 				<div>
// 					<h1 style={{ fontSize: "40px", fontWeight: "500" }}>
// 						Answer From The Community
// 					</h1>
// 					<hr />
// 					<div className={classes.answer__display}>
// 						<QuestionCard
// 							flex={false}
// 							flexsmall={true}
// 							angle={false}
// 							avsize={100}
// 							data={ answering }
// 						/>
// 					</div>
// 				</div>
// 				<div>
// 					<div
// 						style={{
// 							color: "red",
// 							textAlign: "center",
// 							paddingBottom: "5px",
// 						}}
// 					>
// 						{message}
// 					</div>
// 					<form action="" onSubmit={handleSubmit}>
// 						<div
// 							style={{
// 								color: "green",
// 								textAlign: "center",
// 								paddingBottom: "7px",
// 							}}
// 						>
// 							{ansmessage}
// 						</div>
// 						<textarea
// 							name="answer"
// 							ref={answerDOM}
// 							id="answerid"
// 							placeholder="Your answer"
// 							rows="6"
// 							cols={"50"}
// 						></textarea>
// 						<button type="submit">Post Answer</button>
// 					</form>
// 				</div>
// 			</section>
// 		</section>
// 	);
// }

// export default Answer;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios/axiosConfig";
import { useContext } from "react";
import { Appstate } from "../../App";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Answer.module.css";
import QuestionCard from "../QuestionCard/QuestionCard";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Answer() {
	const answerDOM = useRef();
	const navigate = useNavigate();
	const { user } = useContext(Appstate);
	const [singleData, setSingleData] = useState({});
	let { questionId } = useParams();
	const [answer, setAnswer] = useState({});
	const [message, setMessage] = useState("");
	const [ansMessage, setAnsMessage] = useState("");

	async function selectSingleQuestion() {
		try {
			const { data } = await axios.get(
				`/question/selectsinglequestion?questionId=${questionId}`
			);
			setSingleData(data.question);
			const qanswer = await axios.get(
				`/question/selectansawer?questionId=${questionId}`
			);

			setAnswer(qanswer.data);
		} catch (error) {
			console.log(error);
		}
	}
	
	selectSingleQuestion();
console.log(answer);
	async function handleSubmit(e) {
		e.preventDefault();
		const answervalue = answerDOM.current.value;

		if (!answervalue) {
			setMessage("The fields are required");
			return; // Stop further execution if the fields are required
		}
		try {
			await axios.post("answer/answerQuestion", {
				userid: user.userid,
				questionid: questionId,
				answer: answervalue,
			});
			setAnsMessage("The Answer Posted Successfully");
			// alert("Answer Posted succesfull");
			// navigate("/answer/:questionId");
		} catch (error) {
			alert(error);
		}
	}

	return (
		<section className={classes.answer}>
			<section className={classes.answer__container}>
				<div className={classes.answer__title}>
					<h1>QUESTION</h1>
					<div>
						<div>
							<FaArrowAltCircleRight
								size={30}
								style={{ padding: "10px 5px 0px", color: "#516CF0" }}
							/>
							<span className={classes.title}>{singleData.title}</span>
						</div>

						<p>{singleData.description}</p>
					</div>
				</div>
				<hr />
				<div>
					<h1 style={{ fontSize: "40px", fontWeight: "500" }}>
						Answer From The Community
					</h1>
					<hr />
					<div className={classes.answer__display}>
						<QuestionCard
							flex={false}
							flexsmall={true}
							angle={false}
							avsize={50}
							data={answer}
						/>
					</div>
				</div>
				<div>
					<div
						style={{
							color: "red",
							textAlign: "center",
							paddingBottom: "5px",
						}}
					>
						{message}
					</div>
					<form action="" onSubmit={handleSubmit}>
						<div
							style={{
								color: "green",
								textAlign: "center",
								paddingBottom: "7px",
							}}
						>
							{ansMessage}
						</div>
						<textarea
							name="answer"
							ref={answerDOM}
							id="answerid"
							placeholder="Your answer"
							rows="6"
							cols={"50"}
						></textarea>
						<button type="submit">Post Answer</button>
					</form>
				</div>
			</section>
		</section>
	);
}

export default Answer;
