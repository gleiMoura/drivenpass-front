import { createContext, useEffect, useState } from "react";
import { AuthContextType, AuthProviderType, AuthUserType } from "./types";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { signinRequest } from "../repository/authRepo/index";

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({children}: AuthProviderType) => {
	const [user, setUser] = useState<AuthUserType | null >(null)

	useEffect(() => {
		const user = useLocalStorage.getFromLocalStorage("user");
		
		if(user) {
			setUser(user);
		}
	}, [])

	async function authenticate(email: string, password: string) {
		const response = await signinRequest(email, password);

		const payload = {token: response.token, email};

		setUser(payload);
		useLocalStorage.setLocalStorage("user", payload);
	}

	function logout() {
		setUser(null)
		useLocalStorage.setLocalStorage("user", null)
	}

	return(
		<AuthContext.Provider value={{...user, authenticate, logout}}>
			{children}
		</AuthContext.Provider>
	)
}