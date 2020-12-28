import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout style>
    <SEO title="Lumberian Records" />
    <h1>Latest articles</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>Posted on {post.node.frontmatter.date}</small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>Read more</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query ArticleIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            date
            title
          }
        }
      }
    }
  }
`

export default IndexPage
