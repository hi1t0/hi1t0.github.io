import * as React from "react"
import { Link, graphql } from "gatsby"
import _ from "lodash"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ShareSns from "../components/share-sns"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={post.frontmatter.hero?.childImageSharp.gatsbyImageData}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          {
            post.frontmatter.tags ? post.frontmatter.tags.map((tag, i) => <span key={i} style={{margin: 8, padding: 10, fontSize: '0.8em', backgroundColor: "#E6E6E6", borderRadius: "30px"}} ><a style={{textDecoration: `none`}} href={`/${process.env.GATSBY_ROUTE_TAG}/${_.kebabCase(tag)}/`}>{tag}</a></span>) : ''
          }
        </header>
        <hr style={{marginTop: 12, marginBottom: 24}}/>
        {/* ↓↓↓↓目次↓↓↓↓ */}
        {
          post.tableOfContents ?
              <div style={{ backgroundColor: "#FEFEFE", border: "solid #EFEFEF", borderRadius: 4 }}>
                <h1 style={{ margin: 16 }}>目次</h1>
                <div style={{ margin: 24 }} dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
              </div>
          : ''
        }
        {/* ↑↑↑↑目次↑↑↑↑ */}
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        {/* 日本語を含むためエンコードする */}
        <ShareSns title={post.frontmatter.title} url={encodeURI(`${data.site.siteMetadata?.siteUrl}${post.fields.slug}${post.frontmatter.title}`)} />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`${previous.fields.slug}${previous.frontmatter.title}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`${next.fields.slug}${next.frontmatter.title}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        hero {
          id
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      tableOfContents(
        absolute: false
        pathToSlugField: "frontmatter.path"
        maxDepth: 3
      )
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`