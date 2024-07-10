// // import React from 'react'
// // import Header from '../Header/Header';

// // function Layout({children}) {
// //   return (
// // 		<div>
// // 			<Header />
// // 			{children}
// // 		</div>
// // 	);
// // }

// // export default Layout
// import React from "react";
// import { useLocation } from "react-router-dom";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

// function Layout({ children }) {
// 	const location = useLocation();

// 	// Check if the current location is either '/login' or '/register'
// 	// const hideHeader =
// 	// 	location.pathname === "/login" || location.pathname === "/register";

// 	return (
// 		<div>
// 			 <Header />
// 			{/* Comment: Added conditional rendering for Header */}
// 			{children}
// 			<Footer />
// 		</div>
// 	);
// }

// export default Layout;

import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
