import React from 'react'
import styled from 'styled-components'

import img from '../assets/images/home/catalog_shirt.jpg'

const Container = styled.article`
`
const ImageWrapper = styled.div`
	img {
		width: 100%;    
	}
`

const DescriptionWrapper = styled.div`

`

const Title = styled.h3`
	margin: 0;
	font-weight: 400;
	font-size: 14px;
`

const Price = styled.p`
	margin: 0;
	font-size: 19px;
`

export default props => (
	<Container className={ props.className }>
		<ImageWrapper>
			<img src={img} />
		</ImageWrapper>
		<DescriptionWrapper>
			<Title>Light Oxford Shirt</Title>
			<Price>S/. 49.99</Price>
		</DescriptionWrapper>
	</Container>
)