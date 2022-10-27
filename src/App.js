import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
		<>
		<BrowserRouter>
				<Routes>
						<Route path = "/" element={<SignIn />}></Route>
						<Route path = "/signup" element={<SignUp />}></Route>
				</Routes>
		</BrowserRouter>
</>
  );
}

export default App;
