import { useContext, useEffect } from "react";
import HeaderComponent from "../components/headerComponent";
import credentialContext from "../contextsAPI/credentialContext";
import API from "../repository/API";
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

