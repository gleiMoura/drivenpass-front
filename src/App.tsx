import './App.css'
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './authProvider';

function App() {
  return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SignIn/>} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
  )
}

export default App
