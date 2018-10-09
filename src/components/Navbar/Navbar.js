import React from 'react'
import { Link } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import Logo from '../Logo'
import Wrapper from '../Wrapper'

const Container = styled.nav`
	background: ${ props => props.theme.background };
	color: ${ props => props.theme.textColor };
	font-family: 'Oswald', sans-serif;
	height: 80px;
	padding: 0 22px;
	box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
`

const List = styled.ul`
	margin: 0;
	margin-left: 20px;
	list-style: none;
	padding: 0;
	display: flex;
	align-items: center;
`

const ItemWrapper = styled.li`

`

const Item = styled(Link)`
	padding: 6px 18px;
	margin: 0 2px;
	color: ${ props => props.theme.textColor };
	text-decoration: none;
	position: relative;
	display: inline-block;
	cursor: pointer;
	font-weight: 600;
	z-index: 1;
	font-size: 14px;
	&:hover:before {		
		transform: scaleY(1);
	}
	&:before {
		content: "";
		position: absolute;		
		z-index: -1;
		transition: .3s;
		transform: scaleY(0);
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: ${ props => props.theme.backgroundHoverItem };
	}	
`

const theme = {
	background: 'white',
	textColor: '#555',
	backgroundHoverItem: '#E6C931',
}

export default props => (
	<ThemeProvider theme={ theme }>
		<Container>
			<Wrapper>
				<Logo/>			
				<List>		
					<ItemWrapper>
						<Item to='/'>INICIO</Item>
					</ItemWrapper>
					<ItemWrapper>
						<Item to='/shop'>TIENDA</Item>
					</ItemWrapper>
					<ItemWrapper>
						<Item to='/nosotros'>NOSOTROS</Item>
					</ItemWrapper>
					<ItemWrapper>
						<Item>CONTACTO</Item>
					</ItemWrapper>
				</List>
			</Wrapper>
		</Container>
	</ThemeProvider>




)