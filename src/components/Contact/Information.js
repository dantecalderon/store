import React from 'react'
import styled from 'styled-components'

import Logo from '../Logo'

const Container = styled.div`
 	padding: 20px 10px;
 	box-sizing: border-box;
 	background: skyblue;
`

export default props => (
	<Container className={ props.className }>
		<Logo/>
		<hr/>

	</Container>
)