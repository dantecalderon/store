import React from 'react'
import '../../../styles/global.js'
import 'purecss/build/pure-min.css'

class DefaultLayout extends React.Component {
	render() {
		return(
			<div>
				<a class="pure-button pure-button-primary" href="#">A Primary Button</a>
				{ this.props.children }
			</div>
		)
	}
}

export default DefaultLayout