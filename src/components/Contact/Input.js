import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

`

const Label = styled.label`

`
const Input = styled.input`

`



export default props => (
	<Container>
		<Label>{ props.title }</Label>
		<Input { ...props } />
	</Container>
)