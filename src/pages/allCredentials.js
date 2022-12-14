import HeaderComponent from "../components/headerComponent";
import credentialContext from "../contextsAPI/credentialContext";
import { BiLogIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Page, AllCredentials, Title, Add, Element } from "../styles/pagesStyles";

export default function Credentials() {
	const navigate = useNavigate();

	const { credentials } = useContext(credentialContext);

	return (
		<Page>
			<HeaderComponent headerTitle={"Credenciais"} />
			{
				credentials.length === 0 ?
					<AllCredentials>
						<Title>
							There isn't credentials yet!
						</Title>
						<Add onClick={() => {
							navigate("/credential/add")
						}}>
							+
						</Add>
					</AllCredentials>
					:
					<AllCredentials>
						{credentials.map(element => {
							return (
								<Element onClick={() => {
									navigate(`/credential/${element.id}`)
								}}>
									<BiLogIn className="Element__icon" />
									<Title>
										{element.title}
									</Title>
								</Element>
							)
						})}
						<Add onClick={() => {
							navigate("/credential/add")
						}}>
							+
						</Add>
					</AllCredentials>
			}
		</Page>
	)
};


