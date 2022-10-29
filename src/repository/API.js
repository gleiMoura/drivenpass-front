import axios from "axios";

const BASE_URL = "http://localhost:4000";

function authentication(body, authType) {
	const promise = axios.post(`${BASE_URL}/${authType}`, body);
	return promise
}

const API = {
	authentication
};

export default API;