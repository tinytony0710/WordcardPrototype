// import { useState } from "react";
import { Link } from "react-router-dom";



function Header() {
	return(
		<header id="header">
			<Link to="/" className="flex" title="主頁">
				<h1 className="text-2xl font-bold font-funny ">to mainpage</h1>
			</Link>
		</header>
	);
}



export default Header;