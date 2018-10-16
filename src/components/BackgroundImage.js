import React from 'react'
import Img from 'gatsby-image'

export default props => (
	<div { ...props } style={ { position: 'relative' } }>
		<Img      
      style={ { position: 'absolute', 'z-index': '-1', left: 0, top: 0, right: 0, bottom: 0 } }
      fluid={ props.background.childImageSharp.fluid }/>
   	{ props.children }
	</div>
)