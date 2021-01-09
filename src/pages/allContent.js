import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const allContent = ({ data }) => {
  return (
    <Layout>
      <SEO title="Lumberian Records" />
      <h1>All Content</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(post => (
          <li key={post.node.id}>
            <Link to={post.node.frontmatter.path}>
              {post.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query allContentQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
      edges {
        node {
          frontmatter {
            path
            date
            title
          }
          excerpt
        }
      }
    }
  }
`
export default allContent
