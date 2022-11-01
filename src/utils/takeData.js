import API from "../repository/API";

function getAllCredentials() {
	let credentials = null;

	const { token } = JSON.parse(localStorage.getItem("data"));
	
	const config = {
		headers: {
			authorization: `Bearer ${token}`
		}
	};
	
	const promise = API.getCredentials(config);
	promise.then(response => {
		credentials = response.data;
	});
	promise.catch(err => {
		console.log(err.data);
		console.log(err.error);
	});

	return credentials;
}

const data = {
	getAllCredentials,
}

export default data;
