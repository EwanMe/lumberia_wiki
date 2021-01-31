import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Lumberian Records" />
    <div className="home">
      <div className="home-section">
        <h1>Welcome</h1>
        <hr />
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut erat
          vitae quam auctor convallis ut et enim. Proin commodo lacus ultricies,
          rhoncus ante et, tincidunt ipsum. Praesent semper luctus sollicitudin.
          Vivamus vitae orci vestibulum, sagittis quam vel, molestie orci. Donec
          porttitor enim in malesuada varius. Ut vulputate, lacus non gravida
          molestie, est mauris rutrum eros, eu mattis augue est ut turpis.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Quisque ac mi massa.
          Maecenas eu bibendum velit, at tempor elit. Nam mattis vestibulum
          mattis. Pellentesque sollicitudin rhoncus pulvinar. Etiam tristique
          condimentum neque, pretium faucibus enim semper nec.{" "}
        </p>
      </div>
      <div className="home-section cell" id="latestArticles">
        <h1>Latest articles</h1>
        <hr />
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            <h3 className="listHeader">{post.node.frontmatter.title}</h3>
            <small>Published {post.node.frontmatter.date}</small>
            <br />
            <Link to={post.node.frontmatter.path}>Read more</Link>
          </div>
        ))}
      </div>
      <div className="home-section cell" id="latestLore">
        <h1>Latest lore</h1>
        <hr />
      </div>
    </div>
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
