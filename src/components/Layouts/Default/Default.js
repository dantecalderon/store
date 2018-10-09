import React from 'react'
import {Helmet} from 'react-helmet'

import '../../../styles/global.js'
import 'purecss/build/grids-min.css' // Only for this is purecss
import 'purecss/build/grids-responsive-min.css'
import Navbar from '../../Navbar'


class DefaultLayout extends React.Component {
	render() {
		return(
			<div>
				<Helmet>         
          <title>Simple Store</title>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i|Oswald:400,500,600,700" rel="stylesheet"/>
        </Helmet>
				<Navbar/>
				{ this.props.children }
			</div>
		)
	}
}

export default DefaultLayout