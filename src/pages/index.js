import React from 'react'

import Layout from '../components/Layouts/Default'
import Carousel from '../components/HomeCarousel'
import Discover from '../components/Discover'

class Index extends React.Componet {	
	render() {
		return (
			<Layout>
				<Carousel/>
				<Discover/>
			</Layout>
		)		
	}
} 

export default Index 
