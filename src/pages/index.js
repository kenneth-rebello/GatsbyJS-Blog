import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled.h3`
  margin-bottom: 1rem;
  color: midnightblue; 
`

const IndexPage = ({data}) => {

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>Yihuas thoughts</h1>
        <h4>No. of blogs: {data.allMarkdownRemark.totalCount}</h4>
        {
          data.allMarkdownRemark.edges.map(({node}) => (
            <div key={node.id}>
              <BlogLink to={node.fields.slug}>
                <BlogTitle>{ node.frontmatter.title} - {node.frontmatter.date}</BlogTitle>
                <p>{node.excerpt}</p>
              </BlogLink>
            </div>
          ))
        }
      </div>
    </Layout>
)}

export default IndexPage;


export const query = graphql`
query{
  allMarkdownRemark( sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          date
          description
          title
        }
        excerpt
        fields{
          slug
        }
      }
    }
  }
}`