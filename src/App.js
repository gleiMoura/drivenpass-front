import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import MainPage from "./pages/mainPage";
import Credentials from "./pages/allCredentials";
import Credential from "./pages/credential";
import AddCredential from "./pages/addCredential"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CredentialContext from "./contextsAPI/credentialContext";
import CardContext from "./contextsAPI/cardContext";
import NoteContext from "./contextsAPI/noteContext";
import WifiContext from "./contextsAPI/wifiContext";
import { useState } from "react";


function App() {
	const [credentials, setCredentials] = useState([]);
	const [notes, setNotes] = useState([]);
	const [cards, setCards] = useState([]);
	const [wifi, setWifi] = useState([]);

	return (
		<>
			<CredentialContext.Provider value={{ credentials, setCredentials }}>
			<NoteContext.Provider value={{ notes, setNotes }}>
			<CardContext.Provider value={{ cards, setCards }}>
			<WifiContext.Provider value={{ wifi, setWifi }}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<SignIn />}></Route>
						<Route path="/signup" element={<SignUp />}></Route>
						<Route path="/mainpage" element={<MainPage />}></Route>
						<Route path="/credentials" element={<Credentials />}></Route>
						<Route path="/credential/:idCredential" element={<Credential />}></Route>
						<Route path="/credential/add" element={<AddCredential />}></Route>
					</Routes>
				</BrowserRouter>
			</WifiContext.Provider>
			</CardContext.Provider>
			</NoteContext.Provider>
			</CredentialContext.Provider>
		</>
	);
}

export default App;
