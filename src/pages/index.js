import React from 'react'

import Layout from '../components/Layouts/Default'
import Carousel from '../components/HomeCarousel'
import Discover from '../components/Discover'

class Index extends React.Component {	
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