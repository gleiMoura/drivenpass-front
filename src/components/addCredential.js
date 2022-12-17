import styled from "styled-components";
import HeaderComponent from "./headerComponent";
import API from "../repository/API";
import { Page } from "../styles/pagesStyles";
import { AiOutlineCheck } from "react-icons/ai";

const AddCredential = ({setAddBoolean}) => {

	function submitForm(e) {
		e.preventDefault();

		const { token } = JSON.parse(localStorage.getItem("data"));

		const config = {
			headers: {
				authorization: `Bearer ${token}`
			}
		};

		//cria um body com o conteúdo que deve ser enviado
		const body = {
			title: e.target[0].value,
			url: e.target[1].value,
			userName: e.target[2].value,
			password: e.target[3].value
		};

		console.log(body)

		const promise = API.createCredential(config, body);
		promise.then(answer => {
			console.log("Created!", answer.data);
			setAddBoolean(false);
		}).catch(err => {
			console.log(err.data);
			console.error(err.request.response)
		})
	}

	return (
		<Page>
			<HeaderComponent headerTitle={"Adicionar Credencial"} />
			<Form onSubmit={e => submitForm(e)}>
				<label>Título</label>
				<input type="text" required />
				<label>URL</label>
				<input type="url" required />
				<label>Usuário</label>
				<input type="text" required />
				<label>Senha</label>
				<input type="password" required />
				<button>
					<AiOutlineCheck />
				</button>
				<div onClick={() => {
					setAddBoolean(false)
				}}>
					voltar
				</div>
			</Form>
		</Page>
	)
};

export default AddCredential;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 300px;
	height: auto;
	position: relative;

	label{
		font-family: 'Recursive';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 22px;
		color: #222222;
		margin: 10px 0 10px 0;
	}

	input{ 
		background: #FFFFFF;
		border: 3px solid #005985;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
		border-radius: 5px;
		height: 40px;
		width: 100%;
	}

	button{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: #9BFBB0;
		position: absolute;
		bottom: -100px;
		right: 0;
		font-size: 30px;
		color: white;
		border: none;
		cursor: pointer;
	}

	div{
		color: black;
		position: absolute;
		bottom: -80px;
		left: 0;
		font-size: 20px;
		cursor: pointer;
	}
`;
