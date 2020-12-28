import React from "react"
import Link from "gatsby-link"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div className="content">
      <Link to="/">Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>Posted on {post.frontmatter.date}</h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const postQuery = graphql`
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
