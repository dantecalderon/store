const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
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
				return edge
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

			slug = `/product/${slugify(frontmatter.title,  {
				lower: true
			})}-${node.id.split('-')[0]}`
			createNodeField({
				node,
				name: 'slug',
				value: slug
			})
		}
	}
}