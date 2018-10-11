import React from 'react'
import styled from 'styled-components'

const Container = styled.div`	
	max-width: 800px;
	margin-left: auto;
	margin-right: auto;
`

const VideoContainer = styled.div`
	position: relative;
	padding-bottom: 56.25%;
	padding-top: 30px; height: 0; overflow: hidden;	
  box-shadow: 0px 25px 80px -7px rgba(0,0,0,0.8);

	iframe, object, embed {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`

export default props => (
	<Container>
		<VideoContainer>
			<iframe				
				width="860" 
				height="315" 
				src="https://www.youtube.com/embed/5XV6Ie0hZt8?rel=0" 
				frameborder="0" 
				allow="autoplay; encrypted-media" 
				allowfullscreen></iframe>
		</VideoContainer>
	</Container>
)

