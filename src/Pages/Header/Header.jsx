
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
