import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
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
		{/**	<img src={ product.frontmatter.thumbnail }/>			**/}
		</Layout>
	)	
}

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			htmlAst
			fields {
				slug
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