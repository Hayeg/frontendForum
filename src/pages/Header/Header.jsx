import React from "react";
import { Link } from "react-router-dom";
import Hlogo from "../../assets/10003.png";
import classes from '../Header/Header.module.css'

function Header() {
	return (
		<section className={classes.Header}>
				<div>
					<Link to={""}>
						{" "}
						<img src={Hlogo} alt="evangadi logo" />
					</Link>
				</div>
			<div className={classes.main_con}>
				<div>
					<ul>
						<li>
							<Link to={""}>Home</Link>
						</li>
						<li>
							<Link to={"/Terms"}>How it works</Link>
						</li>
						<li>
							<Link to={"/login"}>
								{" "}
								<button>Sign Out</button>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Header;
