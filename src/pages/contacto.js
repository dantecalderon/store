import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layouts/Default'
import Wrapper from '../components/Wrapper'
import Form from '../components/Contact/Form'
import Information from '../components/Contact/Information'

import backgroundHeader from '../assets/images/contact/background.jpg'

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
`

const Subtitle = styled.h2`
	margin: 0;
	color: white;
	font-size: 21px;
	font-weight: 400;
`

const HeaderContent = styled.div`
	background: rgba(0, 0, 0, 0.31);
	padding: 140px 0 70px;
	text-shadow: 0 1px 2px #101820;	
`

const InformationWrapper = styled.div`

`

class Contacto extends React.Component {

	render() {
		return (
			<Layout>
				<HeaderContainer>
					<HeaderContent>
						<Title>Contactanos</Title>					
						<Subtitle>Estamos listos para ayudarlo en cualquier momento.</Subtitle>
					</HeaderContent>
				</HeaderContainer>
				<Wrapper>
					<InformationWrapper className='pure-g'>
						<Information/>
						<Form/>						
					</InformationWrapper>
				</Wrapper>
			</Layout>
		)
	}
}

export default Contacto