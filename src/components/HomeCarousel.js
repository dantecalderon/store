import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import Img from 'gatsby-image'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Container = styled.div`
	background: #f9f2e8;
`

const Item = styled.div`
	outline: none;
	img {
		width: 100%;
		outline: none;
		display: block;
	}
`

export default props => {
	const settings = {
	  dots: true,
	  fade: true,	  
	  speed: 900	  
	}	
	return (	
		<Container>
			<Slider { ...settings }>
				<Item>
				  <Img fluid={ props.images.carousel1.childImageSharp.fluid} />
				</Item>
				<Item>
				  <Img fluid={ props.images.carousel2.childImageSharp.fluid} />
				</Item>
				<Item>
				  <Img fluid={ props.images.carousel3.childImageSharp.fluid} />
				</Item>
				<Item>
				  <Img fluid={ props.images.carousel4.childImageSharp.fluid} />
				</Item>
				<Item>
				  <Img fluid={ props.images.carousel5.childImageSharp.fluid} />
				</Item>			
			</Slider>
		</Container>
	)
}