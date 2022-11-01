import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import MainPage from "./pages/mainPage";
import Credentials from "./pages/credentialPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountContext from "./contextsAPI/countContext";
import { useState } from "react";


function App() {
	const [count, setCount] = useState("nothing here");

	return (
		<>
			<CountContext.Provider value={{ count, setCount }}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<SignIn />}></Route>
						<Route path="/signup" element={<SignUp />}></Route>
						<Route path="/mainpage" element={<MainPage />}></Route>
						<Route path="/credentials" element={<Credentials />}></Route>
					</Routes>
				</BrowserRouter>
			</CountContext.Provider>
		</>
	);
}

export default App;
