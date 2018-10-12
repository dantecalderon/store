const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const slash = require('slash')
const slugify = require('slugify')

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return new Promise((resolve, reject) => {
		const ProductTemplate = path.resolve('src/templates/ProductTemplate.js')

		graphql(
			`
				query {
					allMarkdownRemark(
						limit: 1000
						filter: { fileAbsolutePath: { ne: null }}
					) {
						edges {
							node {
								fields {
									slug
								}
								frontmatter {
				          path
				          title
				          price
				          color
				          thumbnail
				          categories
				        } 
							}
						}
					}
				}
			`
		).then(result => {
			if(result.errors) {
				return reject(result.errors)				
			}

			const products = _.filter(result.data.allMarkdownRemark.edges, edge => {
				const slug = _.get(edge, 'node.fields.slug')
				if(!slug) return undefined	
				if(_.includes(slug, '/product/')) {
					return edge					
				}
				return undefined
			})

			products.forEach((edge, index) => {
				createPage({
					path: edge.node.fields.slug,
					component: slash(ProductTemplate),
					context: {
						slug: edge.node.fields.slug						
					}
				})
			})



			return resolve()
		})

	})
}

exports.onCreateNode = ({ node, actions, getNode, getNodes }) => {
	const { createNodeField } = actions
	const { frontmatter } = node

	let slug

	if(node.internal.type === 'MarkdownRemark') {
		const fileNode = getNode(node.parent)
		if(fileNode.sourceInstanceName === 'products') {
			// Slug format: [ProductName]-[uuid(first 8 digits)] i.e: name-of-product-5a323j23
			const title = slugify(frontmatter.title,  {
				lower: true
			})			
			const uuidMinimized = node.id.split('-')[0]
			slug = `/product/${title}-${uuidMinimized}`
			createNodeField({
				node,
				name: 'slug',
				value: slug
			})
			createNodeField({
				node,
				name: 'image',
				value: `.${frontmatter.thumbnail}`
			})
		}
	}
}