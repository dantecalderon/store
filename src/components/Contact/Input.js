import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;	
	padding-top: 20px;
`

const Label = styled.label`
	font-family: 'Oswald';
	margin-bottom: 3px;
`
const Input = styled.input`
	padding: 11px 10px;
	border: 2px solid black;
	font-size: 16px;
	font-weight: 400;
	&:focus {
		outline: none;
	}
`

const TextArea = styled.textarea`
	padding: 11px 10px;
	border: 2px solid black;
	font-size: 16px;
	font-weight: 400;
	font-family: 'Open Sans';
	resize: vertical;
	&:focus {
		outline: none;
	}
`



export default props => (
	<Container>
		<Label>{ props.title }</Label>
		{
			props.textArea ?	
			<TextArea { ...props } rows='6'/>		
			: <Input { ...props } />			
		}
	</Container>
)