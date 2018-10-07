import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const Container = styled.nav`
	background: ${ props => props.theme.background };
	color: ${ props => props.theme.textColor }
`

const List = styled.ul`
	margin: 0;
	list-style: none;
	padding: 0;
	display: flex;
`

const ItemWrapper = styled.li`

`

const Item = styled.a`
	padding: 25px 10px;
	display: inline-block;
	cursor: pointer;
	font-weight: 600;
	font-size: 14px;
	&:hover {
		background: ${ props => props.theme.backgroundHoverItem };
	}
`

const LogoWrapper = styled.li`
	display: flex;
	align-items: center;
	cursor: pointer;
	&:hover {
		background: ${ props => props.theme.backgroundHoverItem };
	}
`

const Logo = styled.h2`
	color: black;
	font-family: monospace;
	margin: 0;
	padding: 0;
`

const theme = {
	background: 'white',
	textColor: 'black',
	backgroundHoverItem: 'gray',
}

export default props => (
	<ThemeProvider theme={ theme }>
		<Container>
			<List>
				<LogoWrapper>
					<Logo>CYNTHIA ROWLEY</Logo>
				</LogoWrapper>
				<ItemWrapper>
					<Item>HOME</Item>
				</ItemWrapper>
				<ItemWrapper>
					<Item>SHOP</Item>
				</ItemWrapper>
				<ItemWrapper>
					<Item>COLLECTION</Item>
				</ItemWrapper>
				<ItemWrapper>
					<Item>CART</Item>
				</ItemWrapper>
			</List>
		</Container>
	</ThemeProvider>




)