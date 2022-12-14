import styled from "styled-components";

export const Page = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const Component = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 10px;

	h1{
		margin: 5px;
		font-size: 20px;
		font-weight: 700;
		width: 375px;
	}

	p{
		margin: 5px;
		font-size: 20px;
		width: 375px;
		height: auto;
		word-wrap: break-word;
	}
`;

export const Footer = styled.div`
	width: 375px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
`;

export const Back = styled.div`
	font-size: 20px;
	cursor: pointer;
	margin: 20px;
`;

export const Delete = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	margin: 20px;
	background-color: red;
	color: white;
	font-size: 30px;
	border-radius: 50%;
	cursor: pointer;
`;

export const AllCredentials = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
	width: 375px;
	height: 75vh;
	position: relative;
`;

export const Element = styled.div`
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

export const Title = styled.p`
	font-size: 18px;
	font-family: 'Recursive';
	color: black;
`;

export const Add = styled.h1`
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