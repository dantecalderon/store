import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	margin-top: 20px;
	margin-bottom: 15px;
`

const Section = styled.section`
`

const Title = styled.h4`
	font-family: 'Oswald';
	color: #c19a67;
	font-size: 18px;
`
const Items = styled.ul`
	list-style: none;
	padding-left: 0;
`

const Item = styled.li`
	font-size: 13px;
	font-family: 'Oswald';	
  padding: 5px 0;

	a {
	}
`

export default props => (
	<Container className="pure-g">
		<Section className="pure-u-1-1 pure-u-sm-1-2 pure-u-lg-1-4">
			<Title>¿Tienes algúna pregunta?</Title>
			<Items>
				<Item>Tel. 928124770</Item>
				<Item>Email. dantehemerson@gmail.com</Item>
				<Item>Direccion: Av. Volteando la Esquina 223</Item>
			</Items>
		</Section>
		<Section className="pure-u-1-1 pure-u-sm-1-2 pure-u-lg-1-4">
			<Title>Nosotros</Title>		
			<Items>
				<Item>Tel. 928124770</Item>
				<Item>Email. dantehemerson@gmail.com</Item>
				<Item>Direccion: Av. Volteando la Esquina 223</Item>
			</Items>
		</Section>			
		<Section className="pure-u-1-1 pure-u-sm-1-2 pure-u-lg-1-4">
			<Title>Nosotros</Title>		
			<Items>
				<Item>Tel. 928124770</Item>
				<Item>Email. dantehemerson@gmail.com</Item>
				<Item>Direccion: Av. Volteando la Esquina 223</Item>
			</Items>
		</Section>
		<Section className="pure-u-1-1 pure-u-sm-1-2 pure-u-lg-1-4">
			<Title>Servicio al cliente</Title>		
			<Items>
				<Item>Tel. 928124770</Item>
				<Item>Email. dantehemerson@gmail.com</Item>
				<Item>Direccion: Av. Volteando la Esquina 223</Item>
			</Items>
		</Section>
	</Container>
)