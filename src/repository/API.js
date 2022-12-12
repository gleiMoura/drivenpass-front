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

function getCredentialById(config, idCredential) {
	const promise = axios.get(`${BASE_URL}/credentials/${idCredential}`, config);
	return promise;
};

function deleteCredentialById(config, idCredential) {
	const promise = axios.delete(`${BASE_URL}/credential/${idCredential}`, config);
	return promise;
}

function getNotes(config) {
const promise = axios.get(`${BASE_URL}/notes`, config);
return promise;
};

function getCards(config) {
	const promise = axios.get(`${BASE_URL}/cards`, config);
	return promise;
};

function getWifi(config) {
	const promise = axios.get(`${BASE_URL}/wifi`, config);
	return promise;
};

const API = {
	authentication,
	getCredentials,
	getCredentialById,
	deleteCredentialById,
	getNotes,
	getCards,
	getWifi
};

export default API;