import HeaderComponent from "../components/headerComponent";
import credentialContext from "../contextsAPI/credentialContext";
import AddCredential from "../components/addCredential";
import { BiLogIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Page, AllCredentials, Title, Add, Element } from "../styles/pagesStyles";

export default function Credentials() {
	const [addBoolean, setAddBoolean] = useState(false); //boolean to put AddCredential in page
	const navigate = useNavigate();

	const { credentials } = useContext(credentialContext);

	return (
		<>
			{
				addBoolean === false ?
					<Page>
						<HeaderComponent headerTitle={"Credenciais"} />
						{
							credentials.length === 0 ?
								<AllCredentials>
									<Title>
										There isn't credentials yet!
									</Title>
									<Add onClick={() => {
										setAddBoolean(true)
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
										setAddBoolean(true);
									}}>
										+
									</Add>
								</AllCredentials>
						}
					</Page> :
						<AddCredential setAddBoolean={setAddBoolean} />
		}

		</>
	)
};


