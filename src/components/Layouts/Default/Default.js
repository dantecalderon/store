import React from 'react'
import {Helmet} from 'react-helmet'

import '../../../styles/global.js'
import Navbar from '../../Navbar'


class DefaultLayout extends React.Component {
	render() {
		return(
			<div>
				<Helmet>         
          <title>Simple Store</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
				<Navbar/>
				{ this.props.children }
			</div>
		)
	}
}

export default DefaultLayout