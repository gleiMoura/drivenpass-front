import styled from "styled-components";
import { BsBoxArrowRight } from "react-icons/bs";
import padlock from "../assets/padlock.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function HeaderComponent({ headerTitle }: {headerTitle: string}) {
	const navigate = useNavigate();
	
	const { logout } = useAuth();
	
	return (
		<>
			<MainHeader>
				<Logo>
					<img src={padlock} alt="padlock" onClick={() => {
						navigate("/mainpage")
					}}/>
					<h1>DrivenPass</h1>
					<BsBoxArrowRight id="logout" onClick={() => {logout()}}/>
				</Logo>
				<Title>
					{headerTitle}
				</Title>
			</MainHeader>
		</>
	)
}

const MainHeader = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	#logout{
		color: #005985;
		font-size: 40px;
		cursor: pointer;
	}
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
	margin: 16px;
	img{
		width: 45px;
		height: 60px;
		margin-right: 10px;
		cursor: pointer;
	}
	h1{
		font-size: 36px;
		font-family: 'Righteous';
		color: #005985;
		text-align: center;
		letter-spacing: -0.012em;
		margin-right: 30px;
	}
`;

const Title = styled.h2`
	display: flex;
	align-items: flex-start;
	padding: 8px;
	width: 375px;
	height: 40px;
	background-color: #005985;
	font-family: 'Recursive';
	font-size: 18px;
	color: white
`;