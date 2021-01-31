import React from "react"
import Layout from "../components/Layout"
import "./Article.css"

export default function Template({ data }) {
  const article = data.markdownRemark
  console.log(article)

  return (
    <Layout>
      <h1>{article.frontmatter.title}</h1>
      <hr />
      <small>Published {article.frontmatter.date}</small>
      <div
        dangerouslySetInnerHTML={{ __html: article.html }}
        className="articlePage"
      />
    </Layout>
  )
}

export const articleQuery = graphql`
  query ArticleByPath($path: String!) {
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
