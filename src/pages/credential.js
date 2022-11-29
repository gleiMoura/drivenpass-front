import styled from "styled-components";
import { useParams } from "react-router-dom";
import HeaderComponent from "../components/headerComponent"
import API from "../repository/API";
import { useEffect, useState } from "react";

export default function Credential() {
	const [credentialData, setCredentialData] = useState([]);

	const { idCredential } = useParams();

	useEffect(() => {
		const { token } = JSON.parse(localStorage.getItem("data"));

		const config = {
			headers: {
				authorization: `Bearer ${token}`
			}
		};

		const credentialPromise = API.getCredentialById(config, idCredential);

		credentialPromise.then(response => {
			setCredentialData(response.data);
		});
	}, []);

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
		</Page>

	)
};

const Page = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Component = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 10px;

	h1{
		margin: 5px;
		font-size: 20px;
		font-weight: 700;
		width: 375px;
	}

	p{
		margin: 5px;
		font-size: 20px;
		width: 375px;
		height: auto;
		word-wrap: break-word;
	}
`;