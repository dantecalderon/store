import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layouts/Default'

export default props => {
	const product = props.data.markdownRemark
	console.log(props.data)
	return (
		<Layout>
			<h1>{ product.frontmatter.title }</h1>
			<p>{ product.frontmatter.price }</p>
			<p>{ product.frontmatter.color }</p>
			<p>{ product.frontmatter.categories }</p>
			<Img fluid={ product.fields.image.childImageSharp.fluid } />
		</Layout>
	)	
}

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			htmlAst
			fields {
				slug
				image {
					childImageSharp {
					  fluid(maxWidth: 1000, quality: 100) {
					  	...GatsbyImageSharpFluid
					  }
					}
				}
			}
			frontmatter {
				title
				price
				color
				categories
				color				
			}
		}
	}
`