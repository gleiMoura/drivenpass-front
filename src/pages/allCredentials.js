import { useContext } from "react";
import HeaderComponent from "../components/headerComponent";
import credentialContext from "../contextsAPI/credentialContext";
import styled from "styled-components";
import { BiLogIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

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
						<Add>
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
						<Add>
							+
						</Add>
					</AllCredentials>
			}
		</Page>
	)
};

const Page = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const AllCredentials = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
	width: 375px;
	height: 75vh;
	position: relative;
`;

const Element = styled.div`
	display: flex;
	justify-content: first baseline;
	align-items: center;
	cursor: pointer;

	.Element__icon{
		font-size: 50px;
		color: #005985;
		margin-right: 20px;
	}
`;

const Title = styled.p`
	font-size: 18px;
	font-family: 'Recursive';
	color: black;
`;

const Add = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	background-color: #005985;
	color: white;
	font-size: 30px;
	border-radius: 50%;
	position: absolute;
	bottom: 10px;
	right: 10px;
	cursor: pointer;
`;
