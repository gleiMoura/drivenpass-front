import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import MainPage from "./pages/mainPage";
import Credentials from "./pages/credentialPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CredentialContext from "./contextsAPI/credentialContext";
import { useState } from "react";


function App() {
	const [credentialsData, setCredentialsData] = useState([]);

	return (
		<>
			<CredentialContext.Provider value={{ credentialsData, setCredentialsData }}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<SignIn />}></Route>
						<Route path="/signup" element={<SignUp />}></Route>
						<Route path="/mainpage" element={<MainPage />}></Route>
						<Route path="/credentials" element={<Credentials />}></Route>
					</Routes>
				</BrowserRouter>
			</CredentialContext.Provider>
		</>
	);
}

export default App;
