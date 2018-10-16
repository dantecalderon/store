import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Container = styled.div`
	padding: 10px;
	text-align: center;
	font-family: 'Oswald';
	margin-bottom: 30px;
`
const ImageWrapper = styled.div`
	img {
		width: 100%;
	}
`

const Title = styled.h3`
	text-transform: uppercase;
	font-size: 24px;
  margin-top: 8px;	
`

const Button = styled(Link)`
	background: #24292e;	
	color: white;
	text-decoration: none;
	padding: 10px 21px;
	font-size: 13px;
	display: inline-block;
`

export default props => (
	<Container>
		<ImageWrapper>
			<Img fluid={ props.image.childImageSharp.fluid } />
		</ImageWrapper>
		<Title>{ props.title }</Title>
		<Button to={ props.to }>DESCUBRIR »</Button>
	</Container>
)