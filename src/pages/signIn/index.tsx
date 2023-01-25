import { useState } from "react";
import styled from "styled-components";
import padlock from "../../assets/padlock.png";
import { Link } from "react-router-dom";
import { signinRequest } from "../../repository/authRepo";

export default function SignIn() {
	const [message, setMessage] = useState("");

	async function submitForm(e: any) {
		e.preventDefault();

		const email = e.target[0].value
		const password = e.target[1].value

		await signinRequest(email, password)

		if (password.length < 10) {
			setMessage("senha deve conter no mínimo 10 caracteres!")
		} else {
			setMessage("Insira um E-mail ou senha válidos")
		}
	}

	return (
		<>
			<Header>
				<img src={padlock} alt="padlock" />
				<h1>DrivenPass</h1>
			</Header>
			<Form onSubmit={e => submitForm(e)}>
				<label>Usuário (email)</label>
				<input type="email" id="email" />
				<label>Senha</label>
				<input type="password" minLength={6} id="password" required />
				<input type="submit" value="Acessar" id="submit" />
				<p className={
					message === "Conta criada com sucesso!" ?
						"Form__messageGreen" :
						"Form__message"
				}>{message}</p>
				<Link to={"/signup"}>{"Primeiro acesso? Crie sua conta!"}</Link>
			</Form>
		</>
	)
}

const Header = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img{
		width: 113px;
		height: 154px;
	}

	h1{
		font-size: 36px;
		font-family: 'Righteous';
		color: #005985;
		text-align: center;
		letter-spacing: -0.012em;
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	label{
		font-family: 'Recursive';
		font-weight: 400;
		font-size: 18px;
		text-align: center;
		color: #000000;
		padding: 5px;
	}

	input{
		width: 250px;
		height: 40px;

		background-color: white;
		border: 2px solid #005985;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

		border-radius: 5px;
	}

	#submit{
		width: 250px;
		height: 40px;
		margin-top: 50px;

		background-color: #9BFBB0;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

		border-radius: 5px;
		cursor: pointer;
		font-family: 'Recursive';
		font-size: 18px;
		font-weight: 400;
		color: black;
	}

	a{
		font-family: 'Recursive';
		font-size: 18px;
		color: black;
		padding-top: 20px;
		border-top: 1px solid #DBDBDB;
	}

	.Form__message{
		margin-top: 15px;
		color: red;
	}

	.Form__messageGreen{
		margin-top: 15px;
		color: green;
	}
`