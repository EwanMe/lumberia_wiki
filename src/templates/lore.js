import React from "react"
import Layout from "../components/layout"
import "./lore.css"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <hr />
      <small>Published {post.frontmatter.date}</small>
      <div dangerouslySetInnerHTML={{ __html: post.html }} className="lore" />
    </Layout>
  )
}

export const postQuery = graphql`
  query LoreByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date
        title
      }
    }
  }
`
