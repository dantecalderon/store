import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.li`
	display: flex;
	align-items: center;
	cursor: pointer;	
	margin-right: 20px;
`

const Logo = styled.h2`
	color: ${ props => props.theme.textColor };
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	margin: 0;
	padding: 0;
`

export default props => (
	<Wrapper>
		<Logo>MODAS ELEGANT</Logo>
	</Wrapper>
)