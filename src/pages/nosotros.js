import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layouts/Default'
import backgroundHeader from '../assets/images/about/maquina-de-coser-by-annie-spratt.jpg'

const HeaderContainer = styled.div`
	background: url(${backgroundHeader});
	text-align: center;
	background-size: cover;
  background-position: center center;
`

const Title = styled.h1`
	color: white;
	font-family: 'Oswald';
	margin: 0;
	font-size: 45px;
	text-shadow: 0 0 30px black, 1px 1px 0  #C09800, -1px -1px 0 #C09800;
	padding: 140px 0 70px;
`

export default () => (
	<Layout>
		<HeaderContainer>
			<Title>ACERCA DE NOSOTROS</Title>
		</HeaderContainer>
		Tenemos una amplica experiencia		
	</Layout>
)
