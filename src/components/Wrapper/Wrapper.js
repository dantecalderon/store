import React from 'react'
import styled from 'styled-components'

export default styled.div`
	display: flex;
	align-items: center;
	max-width: ${ props =>  props.maxWidth ? props.maxWidth : '1160px' };
	height: 100%;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
`