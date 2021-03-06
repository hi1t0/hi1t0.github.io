import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tags from "../components/tags"
import Blogs from "../components/blogs"

const TagsAndBlogListTemplate = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const posts = data.selectedTag.nodes
  const tags = data.allTag.group
  /*
   * タグでフィルターしているため複数のタグがある記事を
   * タグの数だけ取得してしまうから重複を排除
   */
  const uniquePosts = Array.from(
    new Map(posts.map((post) => [post.fields.slug, post])).values()
  );

  const url = `${data.site.siteMetadata?.siteUrl}${location.pathname}`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo url={url} title="hi1t0Tags" type="article" />
      <hr />
      <h4 style={{marginTop: "24px", marginBottom: "48px"}}>{pageContext.tag === '*' ? 'タグ一覧' : pageContext.tag}</h4>
      <Tags tags={tags} selectedTag={pageContext.tag}/>
      <Blogs posts={uniquePosts} />
      <hr />
      <Bio />
    </Layout>
  )
}

export default TagsAndBlogListTemplate

export const pageQuery = graphql`
  query ($tag: String) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    selectedTag: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          tags: { glob: $tag }
        }
      }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          hero {
            id
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    allTag: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`