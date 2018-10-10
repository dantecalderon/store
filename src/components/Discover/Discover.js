import React from 'react'
import styled from 'styled-components'

import Wrapper from '../Wrapper'
import Category from './Category'

import ternos from '../../assets/images/home/terno.jpg'
import corbatas from '../../assets/images/home/corbatas.jpg'
import camisas from '../../assets/images/home/camisas.jpg'

const Container = styled.div`	
	padding: 50px 0;
	background: #f9f2e8;
`

const Title = styled.h3`
	font-family: 'Oswald';
	font-size: 30px;
	text-align: center;
	width: 100%;
`

const CategoriesWrapper = styled.section`
	justify-content: center;
`

export default () => (
	<Container>
		<Wrapper
			flexDirection='column'>
			<Title>DESCUBRE NUESTROS PRODUCTOS</Title>
			<CategoriesWrapper className="pure-g">
				<div className="pure-u-1-1 pure-u-sm-19-24 pure-u-md-1-3">
					<Category
						title='Ternos' 
						to='/ternos'
						image={ ternos } />
				</div>
				<div className="pure-u-1-1 pure-u-sm-19-24 pure-u-md-1-3">
					<Category
						title='Camisas' 
						to='/camisas'
						image={ camisas } />
				</div>
				<div className="pure-u-1-1 pure-u-sm-19-24 pure-u-md-1-3">
					<Category
						title='Corbatas' 
						to='/corbatas'
						image={ corbatas } />
				</div>
			</CategoriesWrapper>

		</Wrapper>
	</Container>
)