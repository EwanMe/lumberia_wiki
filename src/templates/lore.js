import React from "react"
import Layout from "../components/Layout"
import "./Lore.css"

export default function Template({ data }) {
  const lore = data.markdownRemark

  return (
    <Layout>
      <h1>{lore.frontmatter.title}</h1>
      <hr />
      <small>Published {lore.frontmatter.date}</small>
      <div dangerouslySetInnerHTML={{ __html: lore.html }} className="lore" />
    </Layout>
  )
}

export const loreQuery = graphql`
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
