import AuthComponent from "../components/authComponent";

export default function signIn() {
	return (
		<AuthComponent
			buttonName={"Acessar"}
			authType={"signIn"}
			failMessage={"E-mail ou senha inválidos!!!"}
			routerMessage={"Primeiro acesso? Crie sua conta!"}
			routerLink={"/signup"}
			promiseLink={"/mainpage"}
		/>
	)
}