import HeaderComponent from "../components/headerComponent";
import API from "../repository/API";
import styled from "styled-components"
import { Link } from "react-router-dom";
import { BiLogIn, BiPencil, BiCreditCard, BiWifi } from "react-icons/bi";
import { useEffect, useContext } from "react";
import credentialContext from "../contextsAPI/credentialContext";
import noteContext from "../contextsAPI/noteContext";
import cardContext from "../contextsAPI/cardContext";
import wifiContext from "../contextsAPI/wifiContext"

export default function MainPage() {
	const { credentials, setCredentials } = useContext(credentialContext);
	const { notes, setNotes } = useContext(noteContext);
	const { cards, setCards } = useContext(cardContext);
	const { wifi, setWifi } = useContext(wifiContext);

	useEffect(() => {
		const { token } = JSON.parse(localStorage.getItem("data"));

		const config = {
			headers: {
				authorization: `Bearer ${token}`
			}
		};
		const credentialPromise = API.getCredentials(config);
		const notePromise = API.getNotes(config);
		const cardPromise = API.getCards(config);
		const wifiPromise = API.getWifi(config);

		credentialPromise.then(response => {
			setCredentials(response.data);
		});

		notePromise.then(response => {
			setNotes(response.data);
		});

		cardPromise.then(response => {
			setCards(response.data);
		});

		wifiPromise.then(response => {
			setWifi(response.data);
		})
	}, []);

	const subsectionList = [{
		icon: <BiLogIn className="Subsection__icon" />,
		name: "credenciais",
		linkName: "credentials",
		count: credentials.length
	}, {
		icon: <BiPencil className="Subsection__icon" />,
		name: "Notas Seguras",
		linkName: "safetyNotes",
		count: notes.length
	}, {
		icon: <BiCreditCard className="Subsection__icon" />,
		name: "Cartões",
		linkName: "cards",
		count: cards.length
	}, {
		icon: <BiWifi className="Subsection__icon" />,
		name: "Senhas de Wifi",
		linkName: "wifi",
		count: wifi.length
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
		<Page>
			<HeaderComponent headerTitle={"Minhas Senhas"} />
			<Main>
				<Subsections />
			</Main>
		</Page>
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

