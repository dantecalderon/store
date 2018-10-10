import React from 'react'
import styled from 'styled-components'

import Logo from '../Logo'

const Container = styled.div`
 	padding: 20px 40px;
 	box-sizing: border-box;
 	display: flex !important;
 	flex-direction: column;
 	justify-content: flex-start;
`

const Item = styled.div`
	margin: 18px 0;
	display: flex;
	align-items: center;
`

const ItemContent = styled.div`

`
const ItemTitle = styled.h4`
	font-family: 'Oswald';
	margin: 0;
`

const Value = styled.p`
	margin: 0;
	font-size: 14px;	
	a {
		text-decoration: none;
		color: inherit;
	}
`

const LogoItem = styled.div`
	margin-right: 8px;
`

const LogoWrapper = styled.div`
	margin-bottom: 20px;
	margin-top: 12px;
	position: relative;
	margin-left: -10px;
	text-align: center;
	a {
		display: inline-flex;
		transform: scale(1.2);
	}
`

export default props => (
	<Container className={ props.className }>
		<LogoWrapper>
			<Logo/>
		</LogoWrapper>
		<Item>
			<LogoItem>
				<img src='https://icongr.am/clarity/mobile-phone.svg'/>
			</LogoItem>
			<ItemContent>
				<ItemTitle>TELÉFONO</ItemTitle>
				<Value>+51 959290183</Value>
				<Value>+51 (044) 443902</Value>
			</ItemContent>
		</Item>
		<Item>
			<LogoItem>
				<img src='https://icongr.am/clarity/map-marker.svg'/>
			</LogoItem>
			<ItemContent>
				<ItemTitle>DIRECCIÓN</ItemTitle>
				<Value>Av. Nicolas de Piérola 499 Trujillo, Peru</Value>
			</ItemContent>
		</Item>
		<Item>
			<LogoItem>
				<img src='https://icongr.am/clarity/email.svg'/>
			</LogoItem>
			<ItemContent>
				<ItemTitle>EMAIL</ItemTitle>
				<Value><a href='mailto:dantehemerson@gmail.com'>dantehemerson@gmail.com</a></Value>				
			</ItemContent>
		</Item>
		<Item>
			<LogoItem>
				<img src='https://icongr.am/clarity/group.svg'/>
			</LogoItem>
			<ItemContent>
				<ItemTitle>REDES SOCIALES</ItemTitle>
				<Value><a href='mailto:dantehemerson@gmail.com'>dantehemerson@gmail.com</a></Value>				
			</ItemContent>
		</Item>		

	</Container>
)