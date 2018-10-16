module.exports = {
	plugins: [
		'gatsby-plugin-react-helmet',
		{
		  resolve: 'gatsby-source-filesystem',
		  options: {
		    name: 'products',
		    path: `${__dirname}/content/products/`
		  }
		},
		{
		  resolve: 'gatsby-source-filesystem',
		  options: {
		    name: 'uploads',
		    path: `${__dirname}/content/uploads/`
		  }
		},
		{
		  resolve: 'gatsby-source-filesystem',
		  options: {
		    name: 'assets',
		    path: `${__dirname}/src/assets/`
		  }
		},
    'gatsby-transformer-remark',
		'gatsby-plugin-netlify',
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
      	enableIdentityWidget: true,
    	},
		},
    'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-styled-components',
	]
}