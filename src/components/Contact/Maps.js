import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

`

const Title = styled.h3`
	font-family: 'Oswald';
	font-size: 28px;
	text-align: center;
	padding: 0 23px;
	margin-top: 60px;
`

export default props => (
	<Container>		
		<Title>NOS ENCONTRAMOS AQUÍ</Title>
		<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3518.9628944717356!2d-79.0284964561925!3d-8.111432980388697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d87186eba2f%3A0xa846105cd15bab01!2sPlaza+de+Armas+de+Trujillo!5e0!3m2!1ses-419!2spe!4v1539135521795" width="100%" height="400" frameborder="0" style={{border:'0', display: 'block'}} allowfullscreen></iframe>
	</Container>
)