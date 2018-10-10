import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layouts/Default'
import Wrapper from '../components/Wrapper'
import backgroundHeader from '../assets/images/about/maquina-de-coser-by-annie-spratt.jpg'
import tools from '../assets/images/about/tools.jpg'
import tela from '../assets/images/about/tela.jpg'

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
	text-shadow: 0 1px 2px #101820;
	background: rgba(0, 0, 0, 0.31);
	padding: 140px 0 70px;
`

const AboutText = styled.div`
	max-width: 800px;
	padding: 0 23px;
	margin: 0 auto;
	margin-bottom: 60px;
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

const Section = styled.div`
	color: #555;
	justify-content: center;
	align-items: center;
	div {
		img {
			width: 100%;
			display: block;
		}
	}
`

const SectionTitle = styled.h2`
	font-weight: 600;
	font-size: 28px;
`
const SectionDescription = styled.p`
	position: relative;  
  font-size: 16px;
  line-height: 1.9;  
`

const SectionContentutil = styled.div`
	box-sizing: border-box;
	padding: 0px 60px;
`

const Button = styled(Link)`
	background: #24292e;	
	color: white;
	text-decoration: none;
	padding: 14px 40px;
	font-size: 13px;
	display: inline-block;
	margin-bottom: 15px;	
`

export default () => (
	<Layout>
		<HeaderContainer>
			<Title>ACERCA DE NOSOTROS</Title>
		</HeaderContainer>
		<AboutText>
			<p><span>M</span><b>odas Elegant</b> contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. <b>Richard McClintock</b>, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus <b>Bonorum</b> et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32</p>
			<p> El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por <b>Cicero</b> son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.</p>		
		</AboutText>
		<Wrapper
			maxWidth='1720px'
			flexDirection='column'>
			<Section className='pure-g'>
				<div className='pure-u-1-1 pure-u-sm-19-24 pure-u-md-17-24 pure-u-lg-1-2'>
					<img src={ tools }/>				
				</div>
				<SectionContentutil className='pure-u-1-1 pure-u-lg-1-2'>
					<SectionTitle>Fabricación propia</SectionTitle>
					<SectionDescription>La industria de la moda tradicional busca constantemente mayores márgenes de ganancia, olvidando convenientemente los valores sociales fundamentales, como la compensación de los trabajadores y las condiciones de trabajo. Nos negamos a ser parte de eso. Todas nuestras prendas se producen en nuestras plantas de propiedad y operación en Sri Lanka. Nos oponemos directamente al trabajo infantil y nuestros empleados son bien compensados ​​y tratados con respeto.</SectionDescription>
				</SectionContentutil>
			</Section>
			<Section className='pure-g'>
				<SectionContentutil className='pure-u-1-1 pure-u-lg-1-2'>
					<SectionTitle>Tela de buena Calidad</SectionTitle>
					<SectionDescription>Ofrecemos una forma sostenible de ordenar y vestir moda. Todas nuestras emisiones de CO2 se compensan al 100% al sembrar un nuevo bosque lluvioso en Sri Lanka, lo que hace que la compañía sea neutral en carbono. Nuestras instalaciones de producción están revisadas y certificadas por GOTS (Global Organic Textile Standard) que garantiza estándares muy altos, tanto social como ambientalmente. Un beneficio adicional es que nuestra ropa no es "moda rápida", sino algo que se puede usar año tras año.</SectionDescription>
						<Button>Leer mas »</Button>
				</SectionContentutil>
				<div className='pure-u-1-1 pure-u-sm-19-24 pure-u-md-17-24 pure-u-lg-1-2'>
					<img src={ tela }/>				
				</div>
			</Section>
		</Wrapper>
	</Layout>
)
