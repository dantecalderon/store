module.exports = {
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-netlify',
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
      	enableIdentityWidget: true,
    	},
		},
		'gatsby-plugin-styled-components',
	]
}