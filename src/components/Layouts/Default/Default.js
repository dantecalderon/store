import React from 'react'
import '../../../styles/global.js'

class DefaultLayout extends React.Component {
	render() {
		return(
			<div>
				{ this.props.children }
			</div>
		)
	}
}

export default DefaultLayout