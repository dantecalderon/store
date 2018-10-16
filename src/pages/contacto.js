import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layouts/Default'
import Wrapper from '../components/Wrapper'
import Form from '../components/Contact/Form'
import Information from '../components/Contact/Information'
import Maps from '../components/Contact/Maps'
import Background from '../components/BackgroundImage'

const HeaderContainer = styled(Background)`	
	text-align: center;
	padding: 90px 0;
	background-color: rgba(0, 0, 0, .4);
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

const InformationWrapper = styled.div`
	width: 100%;
`

const TitleSection = styled.h3`
	font-family: 'Oswald';
	font-size: 28px;
	text-align: center;
	padding: 0 23px;
	text-transform: uppercase;
	margin: 40px 0 30px;
`

class Contacto extends React.Component {

	render() {
		return (
			<Layout>
				<HeaderContainer background={ this.props.data.backgroundHeader }>					
						<Title>Contactanos</Title>					
						<Subtitle>Estamos listos para ayudarlo en cualquier momento.</Subtitle>
				</HeaderContainer>
				<TitleSection>Póngase en contacto con nosotros</TitleSection>
				<Wrapper>
					<InformationWrapper className='pure-g'>
						<Information className='pure-u-1-1 pure-u-md-1-2'/>
						<Form className='pure-u-1-1 pure-u-md-1-2'/>						
					</InformationWrapper>
				</Wrapper>
				<Maps/>
			</Layout>
		)
	}
}

export default Contacto

export const pageQuery = graphql`
	query {	
		backgroundHeader: file(relativePath: { eq: "images/contact/background.jpg" }) {
	    childImageSharp {
	      fluid(maxWidth: 1920, quality: 100){
	        ...GatsbyImageSharpFluid
	      }
	    }
	  }
	}
`