import { AuthUserType } from "../authProvider/types";

function setLocalStorage(key:string, body: object | null) {
	localStorage.setItem(key, JSON.stringify(body));
};

function getFromLocalStorage(key: string) {
	const json = localStorage.getItem(key);

	if(!json) {
		return null
	}

	const element = JSON.parse(json);

	return element ?? null
};

export const useLocalStorage = {
	setLocalStorage,
	getFromLocalStorage
};