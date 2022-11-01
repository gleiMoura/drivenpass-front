import axios from "axios";

const BASE_URL = "http://localhost:4000";

function authentication(body, authType) {
	const promise = axios.post(`${BASE_URL}/${authType}`, body);
	return promise
};

function getCredentials(config) {
	const promise = axios.get(`${BASE_URL}/credentials`, config);
	return promise;
};

function getNotes(config) {
const promise = axios.get(`${BASE_URL}/notes`, config);
return promise;
}

function getCards(config) {
	const promise = axios.get(`${BASE_URL}/cards`, config);
	return promise;
}

const API = {
	authentication,
	getCredentials,
	getNotes
};

export default API;