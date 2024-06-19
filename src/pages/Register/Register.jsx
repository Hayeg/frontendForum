// import React from "react";
// import { useRef } from "react";
// import axios from "../../axios/axiosConfig";
// import {useNavigate} from 'react-router-dom'
// import { Link } from "react-router-dom";
// import classes from "./Register.module.css";


// function Register() {
//   const navigate = useNavigate();
// 	const userNameDom = useRef();
// 	const firstNameDom = useRef();
// 	const lastNameDom = useRef();
// 	const emailDom = useRef();
// 	const passwordDom = useRef();

// 	async function handleSubmit(e) {
// 		e.preventDefault();
// 		const userValue = userNameDom.current.value;
// 		const firstValue = firstNameDom.current.value;
// 		const lastValue = lastNameDom.current.value;
// 		const emailValue = emailDom.current.value;
// 		const passValue = passwordDom.current.value;
// 		if (!userValue || !firstValue || !lastValue || !emailValue || !passValue) {
// 			alert("Please fill all the fields");
// 		}
// 		try {
// 			await axios.post("/users/register", {
// 				username: userValue,
// 				firstname: firstValue,
// 				lastname: lastValue,
// 				email: emailValue,
// 				password: passValue,
// 			});
//       alert("User registered successfully");
// navigate("/")
// 		} catch (error) {
//       alert("Error registering user");
// 			console.error(error.response);
// 		}
// 	}

// 	return (
// 		<section className={classes.main}>
// 			<section className={classes.main_container}>
// 				<section className={classes.form_main}>
// 					<form onSubmit={handleSubmit}>
// 						<div className={classes.join}>
// 							{" "}
// 							<h3>Join the network</h3>
// 						</div>
// 						<div className={classes.have_account}>
// 							<small className="sign">
// 								Already have an account? <Link to="/login"> Sign In</Link>
// 							</small>
// 						</div>

// 						<div className="">
// 							<input ref={emailDom} type="email" placeholder="Email" />
// 						</div>
// 						<br />
// 						<div className={classes.flNames}>
// 							<input ref={firstNameDom} type="text" placeholder="First Name" />
// 							<input ref={lastNameDom} type="text" placeholder="Last Name" />
// 						</div>
// 						<br />
// 						<div>
// 							<input ref={userNameDom} type="text" placeholder="User Name" />
// 						</div>
// 						<br />
// 						<div>
// 							<input ref={passwordDom} type="password" placeholder="Password" />
// 						</div>
// 						<br />
// 						<button type="submit">Agree and Join</button>
// 						<div className={classes.closing_form}>
// 							<div className={classes.have_account}>
// 								<small>
// 									I agree to the <Link to="/Terms"> privacy policy</Link> and
// 									<Link to="/Terms"> terms of service.</Link>
// 								</small>
// 							</div>

// 							<br />
// 							<div className={classes.have_account}>
// 								<small>
// 									<Link to="/login">Already have an account?</Link>
// 								</small>
// 							</div>
// 						</div>
// 					</form>
// 				</section>
// 				<div className={classes.last_container}>
// 					<div>
// 						<div className={classes.About}>
// 							{" "}
// 							<small>About</small>
// 						</div>
// 						<div className={classes.QA}>
// 							{" "}
// 							<h2>Evangadi Networks Q&A</h2>
// 						</div>
// 						<p>
// 							No matter what stage of life you are in, whether you’re just
// 							starting elementary school or being promoted to CEO of a Fortune
// 							500 company, you have much to offer to those who are trying to
// 							follow in your footsteps.
// 						</p>{" "}
// 						<br />
// 						<p>
// 							The right place to begin is by joining a network that will help
// 							you connect with mentors of your own, whether you are interested
// 							in sharing your knowledge or looking for mentors of your own. Your
// 							life experiences can provide much inspiration for others who are
// 							trying to follow in your footsteps, regardless of how old you are
// 							or what stage of life you are in.
// 						</p>{" "}
// 						<br />
// 						<p>
// 							Whether you are willing to share your knowledge or you are just
// 							looking to meet mentors of your own, please start by joining the
// 							network here.
// 						</p>{" "}
// 						<br />
// 						<button type="submit">How it works</button>
// 					</div>
// 				</div>
// 			</section>
// 		</section>
// 	);
// }

// export default Register;
