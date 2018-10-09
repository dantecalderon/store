import React from 'react'
import styled from 'styled-components'

import Wrapper from '../Wrapper'
import Category from './Category'

import ternos from '../../assets/images/home/terno.jpg'
import corbatas from '../../assets/images/home/corbatas.jpg'
import camisas from '../../assets/images/home/camisas.jpg'

const Container = styled.div`	
	padding: 50px 23px;
	background: #f9f2e8;
`

const Title = styled.h3`
	font-family: 'Oswald';
	font-size: 30px;
	text-align: center;
	width: 100%;
`

export default () => (
	<Container>
		<Wrapper
			flexDirection='column'>
			<Title>DESCUBRE NUESTROS PRODUCTOS</Title>
			<div className="pure-g">
				<div className="pure-u-1-3"><Category image={ ternos } /></div>
				<div className="pure-u-1-3"><Category image={ camisas } /></div>
				<div className="pure-u-1-3"><Category image={ corbatas } /></div>
			</div>

		</Wrapper>
	</Container>
)