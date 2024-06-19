// import React, { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Hlogo from "../../assets/10003.png";
// import classes from '../Header/Header.module.css'
// import { AppState } from "../../App";
// import { useAuth } from "../../AuthContext";

// function Header() {
// 	  const { isAuthenticated } = useAuth();
// 		const navigate = useNavigate();

// 	return (
// 		<section className={classes.Header}>
// 			<div>
// 				{isAuthenticated ? (
// 					<Link to={"home"}>
// 						<img src={Hlogo} alt="logo" />
// 					</Link>
// 				) : (
// 					<Link to={"/login"}>
// 						<img src={Hlogo} alt="logo" />
// 					</Link>
// 				)}
// 			</div>
// 			<div className={classes.main_con}>
// 				<div>
// 					<ul>
// 						<li>
// 							{isAuthenticated ? (
// 								<Link to="/home">Home</Link>
// 							) : (
// 								<Link to="/login">Home</Link>
// 							)}
// 						</li>
// 						<li>
// 							<Link to={"/Terms"}>How it works</Link>
// 						</li>
// 						<li>
// 							<Link to={"/login"}>
// 								{" "}
// 								<button>Sign Out</button>
// 							</Link>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// export default Header;
import React, { useState } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import Evangadi from "../../assets/10003.png";
import { useContext } from "react";
import { Appstate } from "../../App";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Header() {
	const { user, isLoggedIn, handleLogout } = useContext(Appstate);
	const navigate = useNavigate();

	const token = localStorage.getItem("token");
	const handleSignInOut = () => {
		if (isLoggedIn) {
			handleLogout();
		} else {
			navigate("/");
		}
	};
	return (
		<div className={classes.main_container}>
			<div className={classes.Header_Part}>
				<div className={classes.Logo}>
					{token ? (
						<Link to="/home">
							<img src={Evangadi} alt="Evangadi" />
						</Link>
					) : (
						<Link to="/">
							<img src={Evangadi} alt="Evangadi" />
						</Link>
					)}
				</div>
				<div className={classes.Menu}>
					<ul>
						{token ? (
							<Link to="/home">
								<li>Home</li>
							</Link>
						) : (
							<Link to="/">
								<li>Home</li>
							</Link>
						)}

						<li>How it Works</li>
					</ul>
				</div>
				<div className={classes.button}>
					<Link to="">
						{/* {user ? (
              <button className={classes.styled_button}>LOG OUT</button>
            ) : (
              <button className={classes.styled_button}>SIGN IN</button>
            )} */}

						<button className={classes.styled_button} onClick={handleSignInOut}>
							{isLoggedIn ? "Sign Out" : "Sign In"}
							       
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;
