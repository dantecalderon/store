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
      resolve: 'gatsby-transformer-remark',
      // options: {
      //   plugins: [
      //     'gatsby-remark-graphviz',
      //     'gatsby-remark-code-titles',
      //     {
      //       resolve: 'gatsby-remark-images',
      //       options: {
      //         maxWidth: 786,
      //         backgroundColor: '#ffffff',
      //       }
      //     },
      //     {
      //       resolve: 'gatsby-remark-responsive-iframe',
      //       options: {
      //         wrapperStyle: 'margin-bottom: 1.05rem'
      //       }
      //     },
      //     'gatsby-remark-autolink-headers',
      //     'gatsby-remark-prismjs',
      //     'gatsby-remark-copy-linked-files',
      //     'gatsby-remark-smartypants'
      //   ]
      // }
    },
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