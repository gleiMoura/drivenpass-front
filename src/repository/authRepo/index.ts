import { api } from "../api";

export async function signinRequest(email: string, password: string) {
	try {
		const request = await api.post(`signIn`, { email, password });
		return request.data
	} catch (error) {
		return null
	}
};

export async function signupRequest(email: string, password: string) {
	try {
		const request = await api.post(`signUp`, { email, password });
		return request.data
	} catch (error) {
		return null
	}
};