module.exports = {
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-netlify-cms',
		{
		  resolve: 'gatsby-plugin-netlify',
		  options: {		    		  
		    mergeSecurityHeaders: true,
		    mergeLinkHeaders: true,
		    mergeCachingHeaders: true,
		    generateMatchPathRewrites: true
		  }
		}
	]
}