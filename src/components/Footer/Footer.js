import React from 'react'
import styled from 'styled-components'

import Wrapper from '../Wrapper'
import Logo from '../Logo'
import Menu from './Menu'


const Container = styled.div`
	background: #24292E;
	color: white;
	padding: 30px 22px 24px;
`

const Copy = styled.p`
	text-align: center;
	color: #888f97;
	font-size: 13px;
`

export default props => (
	<Container>
		<Wrapper 
			flexDirection='column'
			justifyContent='center'>
			<Logo light/>
			<Menu/>
			<Copy>&copy; Modas Elengant 2018 - All rights reserved</Copy>
		</Wrapper>
	</Container>
)