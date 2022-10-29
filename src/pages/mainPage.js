import styled from "styled-components"
import HeaderComponent from "../components/mainPageHeader";

export default function MainPage() {
	return (
		<>
			<Header>
				<HeaderComponent headerTitle={"Minhas Senhas"}/> 
			</Header>
		</>
	)
}

const Header = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
`;