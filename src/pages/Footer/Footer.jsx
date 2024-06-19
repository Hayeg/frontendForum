// import React from 'react'
// import Flogo from '../../assets/10004.png'
// import { FaFacebook } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";
// import { TiSocialYoutubeCircular } from "react-icons/ti";
// import classes from '../Footer/Footer.module.css'
// import { Link } from 'react-router-dom';

// function Footer() {
//   return (
// 		<section className={classes.main_footer}>
// 			<div className={classes.footer}>
// 				<div className={classes.logo_icon}>
// 					<div>
// 						{/* Logo */}
// 						<img src={Flogo} alt="Logo" />
// 					</div>
// 					<div className={classes.icons}>
// 						{/* icons */}
// 						<div>
// 							<FaFacebook size={25} />
// 						</div>
// 						<div>
// 							<FaSquareInstagram size={25} />
// 						</div>
// 						<div>
// 							<TiSocialYoutubeCircular size={30} />
// 						</div>
// 					</div>
// 				</div>
// 				<div>
// 					<h2>Useful Link</h2>
// 					<ul>
// 						<li>
// 							<Link to={"/Terms"}>How it works</Link>
// 						</li>
// 						<li>
// 							<Link to={"/Terms"}>Terms of Service </Link>
// 						</li>
// 						<li>
// 							<Link to={"/Terms"}>Privacy policy</Link>
// 						</li>
// 					</ul>
// 				</div>
// 				<div>
// 					<h2>Contact Info</h2>
// 					<ul>
// 						<li>
// 							<Link to={"#"}>Evangadi Networks</Link>
// 						</li>
// 						<li>
// 							<Link to={"#"}>support@evangadi.com</Link>
// 						</li>
// 						<li>
// 							<Link to={"#"}>+1-202-386-2702</Link>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// export default Footer
import React from "react";
import classes from "./Footer.module.css";
import Evangadifoot from "../../assets/10004.png";
import { Link } from "react-router-dom";
function Footer(props) {
	return (
		<div>
			{" "}
			<div className={classes.Footer}>
				<div className={classes.media}>
					<div className={classes.footerlogo}>
						<img src={Evangadifoot} alt="" />
					</div>
					<div className={classes.icon}>
						<ul>
							<li>
								<svg
									viewBox="0 0 24 24"
									fill="white"
									height="3em"
									width="2em"
									{...props}
								>
									<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
								</svg>
							</li>
							<li>
								{" "}
								<svg
									viewBox="0 0 1024 1024"
									fill="white"
									height="3em"
									width="2em"
									{...props}
								>
									<path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
								</svg>
							</li>
							<li>
								{" "}
								<svg
									viewBox="0 0 1024 1024"
									fill="white"
									height="3em"
									width="2em"
									{...props}
								>
									<path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
								</svg>
							</li>
						</ul>
					</div>
				</div>
				<div className={classes.Link}>
					<h3>Useful Link</h3>
					<ul>
						<li>
							<Link to={"/terms"}>How it works</Link>
						</li>
						<li>
							<Link to={"/terms"}>Terms of Service</Link>
						</li>
						<li>
							<Link to={"/terms"}>Privacy policy</Link>
						</li>
					</ul>
				</div>
				<div className={classes.Info}>
					<h3>Contact Info</h3>
					<p>Evangadi Networks</p>
					<p>Support@evangadi.com </p>
					<p>+1-202-386-2702</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
