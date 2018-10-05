import React from 'react'
import 'purecss/build/pure-min.css'

import '../../../styles/global.js'
import Navbar from '../../Navbar'


class DefaultLayout extends React.Component {
	render() {
		return(
			<div>
				<Navbar/>
				{ this.props.children }
			</div>
		)
	}
}

export default DefaultLayout