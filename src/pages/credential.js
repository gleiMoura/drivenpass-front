import styled from "styled-components";
import { useParams } from "react-router-dom";
import HeaderComponent from "../components/headerComponent"
import API from "../repository/API";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Credential() {
	const navigate = useNavigate();

	const [credentialData, setCredentialData] = useState([]);

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
						navigate("/credentials");
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

const Page = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
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

const Footer = styled.div`
	width: 375px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
`;

const Back = styled.div`
	font-size: 20px;
	cursor: pointer;
	margin: 20px;
`;

const Delete = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	margin: 20px;
	background-color: red;
	color: white;
	font-size: 30px;
	border-radius: 50%;
	cursor: pointer;
`;