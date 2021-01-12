import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout style>
    <SEO title="Lumberian Records" />
    <h1>Latest articles</h1>
    <hr />
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3 class="listHeader">{post.node.frontmatter.title}</h3>
        <small>Published {post.node.frontmatter.date}</small>
        <br />
        <Link to={post.node.frontmatter.path}>Read more</Link>
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query ArticleIndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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

export default IndexPage
