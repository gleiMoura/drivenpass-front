import HeaderComponent from "../components/headerComponent";
import API from "../repository/API";
import styled from "styled-components"
import { Link } from "react-router-dom";
import { BiLogIn, BiPencil, BiCreditCard, BiWifi } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";

export default function MainPage() {
	const [credentials, setCredentials] = useState(0);
	const [notes, setNotes] = useState(0);
	const [cards, setCards] = useState(0);
	const [wifi, setWifi] = useState(0);

	const { token } = JSON.parse(localStorage.getItem("data"));

	const config = {
		headers: {
			authorization: `Bearer ${token}`
		}
	};

	useEffect(() => {
		const credentialPromise = API.getCredentials(config);
		const notePromise = API.getNotes(config);

		credentialPromise.then(response => {
			setCredentials(response.data);
		});

		notePromise.then(response => {
			setNotes(response.data);
		});
	}, [])


	const subsectionList = [{
		icon: <BiLogIn className="Subsection__icon" />,
		name: "credenciais",
		linkName: "credentials",
		count: credentials.length
	}, {
		icon: <BiPencil className="Subsection__icon" />,
		name: "Notas Seguras",
		linkName: "safetyNotes",
		count: 4
	}, {
		icon: <BiCreditCard className="Subsection__icon" />,
		name: "Cartões",
		linkName: "cards",
		count: 3
	}, {
		icon: <BiWifi className="Subsection__icon" />,
		name: "Senhas de Wifi",
		linkName: "wifi",
		count: 5
	}];

	function Subsections() {
		return (
			subsectionList.map(element => {
				return (
					<Link to={"/" + element.linkName}>
						<Subsection>
							{element.icon}
							<Title>{element.name}</Title>
							<Count>
								{element.count}
							</Count>
						</Subsection>
					</Link>
				)
			})
		);
	}


	return (
		<>
			<Page>
				<HeaderComponent headerTitle={"Minhas Senhas"} />
				<Main>
					<Subsections />
				</Main>
			</Page>

		</>
	)
}

const Page = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Main = styled.main`
	width: 375px;

	a{

		text-decoration: none;
	}
`

const Subsection = styled.div`
	display: flex;
	align-items: center;
	margin-top: 20px;
	position: relative;

	.Subsection__icon{
		font-size: 50px;
		color: #005985;
	}
`;

const Title = styled.p`
	font-size: 18px;
	font-family: 'Recursive';
	color: black;
	margin-left: 30px;
`;

const Count = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 18px;
	font-family: 'Recursive';
	width: 35px;
	height: 35px;
	border-radius: 50%;
	background-color: #005985;
	color: white;
	position: absolute;
	right: 5px;
	top: 5px
`;

