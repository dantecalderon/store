import React from 'react'
import styled from 'styled-components'

import Input from './Input'

const Container = styled.div`
	padding: 0 20px;
	box-sizing: border-box;	
`

const Button = styled.button`
	background: #24292e;	
	color: white;
	cursor: pointer;
	font-family: 'Oswald';
	text-decoration: none;
	border: 0;
	padding: 10px 50px;
	font-size: 16px;
	margin: 20px 0;	
	display: inline-block;
`

export default props => (
	<Container className={ props.className }>
		<Input title='Nombre completo'/>
		<Input title='E-Mail'/>
		<Input title='Asunto'/>
		<Input title='Mensaje' textArea/>
		<Button>Enviar</Button>
	</Container>
)