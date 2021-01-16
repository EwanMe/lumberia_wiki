const path = require("path")
const _ = require("lodash")
const Promise = require("bluebird")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (_.get(node, "internal.type") === `MarkdownRemark`) {
    // Get the parent node
    const parent = getNode(_.get(node, "parent"))

    createNodeField({
      node,
      name: "collection",
      value: _.get(parent, "sourceInstanceName"),
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              html
              id
              fields {
                collection
              }
              frontmatter {
                path
                date
                title
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: path.resolve(
            `./src/templates/${node.fields.collection}.js`
          ),
          context: {
            slug: node.frontmatter.slug,
          },
        })
      })

      resolve()
    })
  })
}
