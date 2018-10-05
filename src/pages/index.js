import React from 'react'

import Footer from '../components/Footer'

function holaMundo (){
	console.log('Hola Mundo')
	if(this == 8) {
		return 0
	}
}
export default () => <div>
	Hello world!
	<Footer />
</div>
