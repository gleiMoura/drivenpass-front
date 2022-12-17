import HeaderComponent from "../components/headerComponent"
import API from "../repository/API";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Page, Component, Footer, Back, Delete } from "../styles/pagesStyles";
export default function Credential() {
	const [credentialData, setCredentialData] = useState([]);

	const navigate = useNavigate();

	const { idCredential } = useParams();
	
	const { token } = JSON.parse(localStorage.getItem("data"));

	const config = {
		headers: {
			authorization: `Bearer ${token}`
		}
	};

	useEffect(() => {
		const credentialPromise = API.getCredentialById(config, idCredential);

		credentialPromise.then(response => {
			setCredentialData(response.data);
		});
	}, [idCredential]);

	return (

		<Page>
			<HeaderComponent headerTitle={"Credenciais"} />
			<Component>
				<p className="page__title">
					{credentialData.title}
				</p>
			</Component>
			<Component className="page__URL">
				<h1>
					URL
				</h1>
				<p>
					{credentialData.url}
				</p>
			</Component>
			<Component className="page__user">
				<h1>
					Usuário
				</h1>
				<p>
					{credentialData.userName}
				</p>
			</Component>
			<Component className="page__password">
				<h1>
					Senha
				</h1>
				<p>
					{credentialData.password}
				</p>
			</Component>
			<Footer>
				<Back onClick={() => {
					navigate("/credentials");
				}}>
					voltar
				</Back>
				<Delete onClick={() => {
					const deletePromise = API.deleteCredentialById(config, idCredential);

					deletePromise.then(response => {
						console.log(response.data);
						navigate("/mainpage");
					}).catch(err => {
						console.error(err.data);
					});
				}} alt="deletar">
					X
				</Delete>
			</Footer>
		</Page>

	)
};

