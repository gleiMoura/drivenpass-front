import { useState } from "react";
import styled from "styled-components";
import padlock from "../assets/padlock.png";
import API from "../repository/API";

export default function authComponent({buttonName, authType}) {

	function submitForm(e) {
		e.preventDefault();

		const body = {
			email: e.target[0].value,
			password: e.target[1].value
		}

		const promise = API.authentication(body, authType);
		promise.then(response => {
      localStorage.setItem("data", JSON.stringify(response.data));
		})
		promise.catch() //colocar mensagem de erro em um estado e mudar com catch
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
				<input type="submit" value={buttonName} id="submit"/>
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
	}
`