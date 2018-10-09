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
	text-shadow: 0 0 30px black, 1px 1px 0  #6C6C6C, -1px -1px 0 #6C6C6C;
	padding: 140px 0 70px;
`

const AboutText = styled.div`
	max-width: 800px;
	padding: 0 23px;
	margin: 0 auto;
	p {
		line-height: 1.6;
		& > span:first-child {			
			font-size: 300%;
			color: #2499B7;
			font-weight: bold;
			line-height: 1.3;
		}
	}
`

export default () => (
	<Layout>
		<HeaderContainer>
			<Title>ACERCA DE NOSOTROS</Title>
		</HeaderContainer>
		<AboutText>
			<p><span>A</span> l contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. <b>Richard McClintock</b>, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus <b>Bonorum</b> et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32</p>
			<p> El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por <b>Cicero</b> son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.</p>		
		</AboutText>
	</Layout>
)
