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
	font-size: 15px;
	color: #333845;
	font-weight: 600;
`

const Input = styled.input`
	padding: 11px 10px;
	border: 1px solid #d3d3d3;
	color: #1f232f !important;
	font-family: 'Open Sans';
	font-size: 14px !important;
	font-weight: 600;
	&:focus {
		outline: none;
		border-color: #1f232f !important;
	}
`

const TextArea = styled.textarea`
	padding: 11px 10px;
	border: 1px solid #d3d3d3;
	color: #1f232f !important;
	font-family: 'Open Sans';
	resize: vertical;
	font-size: 14px !important;
	font-weight: 600;
	&:focus {
		outline: none;
		border-color: #1f232f !important;
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