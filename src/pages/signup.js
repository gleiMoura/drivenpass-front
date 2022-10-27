import AuthComponent from "../components/authComponent";

export default function signUp() {
	return(
		<AuthComponent 
			buttonName={"criar"}
			authType={"signUp"}
			failMessage = {"E-mail ou senha inválidos!!!"}
			routerMessage = {"voltar"}
			routerLink = {"/"}
		/>
	)
}