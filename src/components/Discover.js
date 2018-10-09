import React from 'react'
import styled from 'styled-components'

import Wrapper from './Wrapper'

const Container = styled.div`	
	padding: 0 23px;
`

const Title = styled.h3`
	font-family: 'Oswald';
	font-size: 29px;
	text-align: center;
	width: 100%;
`

export default () => (
	<Container>
		<Wrapper
			>
			<Title>DESCUBRE NUESTROS PRODUCTOS</Title>
		</Wrapper>
	</Container>
)