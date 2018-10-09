import React from 'react'
import styled from 'styled-components'

import Wrapper from '../Wrapper'

const Container = styled.div`
	background: #24292E;
	color: white;
`

export default props => (
	<Container>
		<Wrapper>
			<p>&copy; Modas Elengant 2018 - All rights reserved</p>
		</Wrapper>
	</Container>
)