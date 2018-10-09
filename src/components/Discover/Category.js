import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	padding: 10px;
`
const ImageWrapper = styled.div`
	img {
		width: 100%;
	}
`

export default props => (
	<Container>
		<ImageWrapper>
			<img src={ props.image } />
		</ImageWrapper>
	</Container>
)