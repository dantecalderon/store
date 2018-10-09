import { injectGlobal } from 'styled-components'

injectGlobal`
	body {		
		color: #1f232f;
		margin: 0;
		padding: 0;
		font-family: 'Open sans', sans-serif;
	}
	.pure-g, .pure-g [class*=pure-u] {	
		font-family: 'Open sans', sans-serif !important;
	}
	.slick-prev {
		left: 20px !important;
		z-index: 2;
	}
	.slick-next {
		right: 20px !important;
	}
`