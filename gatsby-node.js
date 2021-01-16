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
                slug
                path
                date
                title
              }
            }
          }
        }
      }
    `).then(results => {
      const allEdges = results.data.allMarkdownRemark.edges

      _.each(allEdges, (edge, index) => {
        createPage({
          path: `/${edge.node.frontmatter.slug}`,
          component: path.resolve(`./src/templates/${edge.node.collection}.js`),
          context: {
            slug: edge.node.frontmatter.slug,
          },
        })
      })

      resolve()
    })
  })
}
