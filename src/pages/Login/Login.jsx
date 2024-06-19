// // import React from 'react'
// // import { useNavigate } from "react-router-dom";
// // import axios from "../../axios/axiosConfig";
// // import { Link } from "react-router-dom";
// // import { useRef, useState } from "react";
// // import classes from '../Login/Login.module.css'

// // function Login() {
// //     const navigate = useNavigate();
// //   const emailDom = useRef();
// // const passwordDom = useRef();

// // async function handleSubmit(e) {
// // 	e.preventDefault();
// // 	const emailValue = emailDom.current.value;
// // 	const passValue = passwordDom.current.value;
// // 	if (!emailValue || !passValue) {
// // 		alert("Please fill all the fields");
// // 		return;
// // 	}
// // 	try {

// // 	const {data} = await axios.post("/users/login", {
// // 			email: emailValue,
// // 			password: passValue,
// // 		});
// // 		console.log(data)
// // 		alert("User login successfully");
// // 		console.log(data);
// // 		localStorage.setItem("token", data.token);
// // 		localStorage.setItem("username", data.username);
// // 		navigate("/");
// // 	} catch (error) {
// // 		alert("Invalid email or password");
// // 		console.error(error.response ? error.response.data : error);
		
// // 	}
// // }

// //   return (
// // 		<div className={classes.main}>
// // 			<section className={classes.main_container}>
// // 				<section className={classes.form_main}>
// // 					<form onSubmit={handleSubmit}>
// // 						<div className={classes.join}>
// // 							<h3>Login to your account</h3>
// // 						</div>
// // 						<div className={classes.have_account}>
// // 							<small className="sign">
// // 								Don’t have an account?
// // 								<Link to="/register"> Create a new account</Link>
// // 							</small>
// // 						</div>

// // 						<br />
// // 						<div>
// // 							<input ref={emailDom} type="email" placeholder="Email" />
// // 						</div>
// // 						<br />
// // 						<div className={classes.password_container}>
// // 							<input
// // 								ref={passwordDom}
// // 								type={"password"}
// // 								placeholder="Password"
// // 								className={classes.password_input}
// // 							/>
							
// // 						</div>
// // 						<br />
// // 						<button type="submit">Login</button>
// // 						<div className={classes.closing_form}>
// // 							<div className={classes.have_account}>
// // 								<small>
// // 									I agree to the <Link to="/Terms"> privacy policy</Link> and
// // 									<Link to="/Terms"> terms of service.</Link>
// // 								</small>
// // 							</div>

// // 							<br />
// // 							<div className={classes.have_account}>
// // 								<small>
// // 									<Link to="/register">Create a new account?</Link>
// // 								</small>
// // 							</div>
// // 						</div>
// // 					</form>
// // 				</section>
// // 				<div className={classes.last_container}>
// // 					<div>
// // 						<div className={classes.About}>
// // 							{" "}
// // 							<small>About</small>
// // 						</div>
// // 						<div className={classes.QA}>
// // 							{" "}
// // 							<h2>Evangadi Networks Q&A</h2>
// // 						</div>{" "}
// // 						<p>
// // 							No matter what stage of life you are in, whether you’re just
// // 							starting elementary school or being promoted to CEO of a Fortune
// // 							500 company, you have much to offer to those who are trying to
// // 							follow in your footsteps.
// // 						</p>{" "}
// // 						<br />
// // 						<p>
// // 							The right place to begin is by joining a network that will help
// // 							you connect with mentors of your own, whether you are interested
// // 							in sharing your knowledge or looking for mentors of your own. Your
// // 							life experiences can provide much inspiration for others who are
// // 							trying to follow in your footsteps, regardless of how old you are
// // 							or what stage of life you are in.
// // 						</p>{" "}
// // 						<br />
// // 						<p>
// // 							Whether you are willing to share your knowledge or you are just
// // 							looking to meet mentors of your own, please start by joining the
// // 							network here.
// // 						</p>{" "}
// // 						<br />
// // 						<button type="submit">How it works</button>
// // 					</div>
// // 				</div>
// // 			</section>
// // 		</div>
// // 	);
// // }

// // export default Login

// import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../../axios/axiosConfig";
// import { Link } from "react-router-dom";
// import classes from "../Login/Login.module.css";

// function Login() {
// 	const navigate = useNavigate();
// 	const emailDom = useRef();
// 	const passwordDom = useRef();

// 	async function handleSubmit(e) {
// 		e.preventDefault();
// 		const emailValue = emailDom.current.value;
// 		const passValue = passwordDom.current.value;

// 		if (!emailValue || !passValue) {
// 			alert("Please fill all the fields");
// 			return;
// 		}

// 		try {
// 			const { data } = await axios.post("/users/login", {
// 				email: emailValue,
// 				password: passValue,
// 			});

// 			console.log(data);
// 			alert("User login successfully");
// 			localStorage.setItem("token", data.token);
// 			localStorage.setItem("username", data.username);
// 			navigate("/");
// 		} catch (error) {
// 			alert(
// 				error.response ? error.response.data.msg : "Invalid email or password"
// 			);
// 			console.error(error.response ? error.response.data : error);
// 		}
// 	}

// 	return (
// 		<div className={classes.main}>
// 			<section className={classes.main_container}>
// 				<section className={classes.form_main}>
// 					<form onSubmit={handleSubmit}>
// 						<div className={classes.join}>
// 							<h3>Login to your account</h3>
// 						</div>
// 						<div className={classes.have_account}>
// 							<small className="sign">
// 								Don’t have an account?
// 								<Link to="/register"> Create a new account</Link>
// 							</small>
// 						</div>
// 						<br />
// 						<div>
// 							<input ref={emailDom} type="email" placeholder="Email" />
// 						</div>
// 						<br />
// 						<div className={classes.password_container}>
// 							<input
// 								ref={passwordDom}
// 								type="password"
// 								placeholder="Password"
// 								className={classes.password_input}
// 							/>
// 						</div>
// 						<br />
// 						<button type="submit">Login</button>
// 						<div className={classes.closing_form}>
// 							<div className={classes.have_account}>
// 								<small>
// 									I agree to the <Link to="/Terms">privacy policy</Link> and
// 									<Link to="/Terms">terms of service</Link>.
// 								</small>
// 							</div>
// 							<br />
// 							<div className={classes.have_account}>
// 								<small>
// 									<Link to="/register">Create a new account?</Link>
// 								</small>
// 							</div>
// 						</div>
// 					</form>
// 				</section>
// 				<div className={classes.last_container}>
// 					<div>
// 						<div className={classes.About}>
// 							<small>About</small>
// 						</div>
// 						<div className={classes.QA}>
// 							<h2>Evangadi Networks Q&A</h2>
// 						</div>
// 						<p>
// 							No matter what stage of life you are in, whether you’re just
// 							starting elementary school or being promoted to CEO of a Fortune
// 							500 company, you have much to offer to those who are trying to
// 							follow in your footsteps.
// 						</p>
// 						<br />
// 						<p>
// 							The right place to begin is by joining a network that will help
// 							you connect with mentors of your own, whether you are interested
// 							in sharing your knowledge or looking for mentors of your own. Your
// 							life experiences can provide much inspiration for others who are
// 							trying to follow in your footsteps, regardless of how old you are
// 							or what stage of life you are in.
// 						</p>
// 						<br />
// 						<p>
// 							Whether you are willing to share your knowledge or you are just
// 							looking to meet mentors of your own, please start by joining the
// 							network here.
// 						</p>
// 						<br />
// 						<button type="submit">How it works</button>
// 					</div>
// 				</div>
// 			</section>
// 		</div>
// 	);
// }

// export default Login;
