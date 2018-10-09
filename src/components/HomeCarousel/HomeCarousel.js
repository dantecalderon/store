import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import img1 from '../../assets/images/home_carousel/carousel1.jpg'
import img2 from '../../assets/images/home_carousel/carousel2.jpg'
import img3 from '../../assets/images/home_carousel/carousel3.jpeg'
import img4 from '../../assets/images/home_carousel/carousel4.jpg'
import img5 from '../../assets/images/home_carousel/carousel5.jpg'

const Container = styled.div`
	background: #f9f2e8;
`

const Item = styled.div`
	outline: none;
	img {
		width: 100%;
		outline: none;
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
				  <img src={img1}/>
				</Item>
				<Item>
				   <img src={img2}/>
				</Item>
				<Item>
				   <img src={img3}/>
				</Item>
				<Item>
				   <img src={img4}/>
				</Item>
				<Item>
				   <img src={img5}/>
				</Item>			
			</Slider>
		</Container>
	)
}