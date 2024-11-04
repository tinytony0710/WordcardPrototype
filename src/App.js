// import { useState } from "react";
// eslint-disable-next-line
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import Mainpage from "./Pages/Mainpage";
import Potatopage from "./Pages/Potatopage";
import Potato1 from "./Pages/Potato1";
import Potato2 from "./Pages/Potato2";
import Potato3 from "./Pages/Potato3";
import Wouldcard from "./Pages/Wouldcard";

import './style.css';



function App() {
	return(
		<HashRouter>
		<Routes>
			<Route path="/" element={<Layout/>}>

				<Route path="*" element={<h1 className="mt-32 text-white text-8xl">Error 404: Not Found</h1>}/>

				<Route path="/" element={<Mainpage/>}/>

				<Route path="/demo" element={<Potatopage/>}>
					<Route path="/demo/talk" element={<Potato1/>}/>
					<Route path="/demo/potato" element={<Potato2/>}/>
					<Route path="/demo/wordle" element={<Potato3/>}/>
					<Route path="/demo/wouldcard" element={<Wouldcard/>}/>
				</Route>
			</Route>
		</Routes>
		</HashRouter>
	);
}



export default App;