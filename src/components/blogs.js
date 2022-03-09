/* 記事リスト */
import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Blogs = ({ posts }) => {

  return (
    <ol style={{ listStyle: `none` }}>
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug

        return (
          <li key={post.fields.slug}>
            <article
              className="post-list-item"
              itemScope
              itemType="http://schema.org/Article"
              style={{
                width: "100%",
                padding: 8,
                // border: "solid",
              }}
            >
              {
                post.frontmatter.hero ?
                  <div style={{
                    float: "left",
                    maxWidth: "250px",
                    width: "30%",
                    margin: "24px",
                    marginLeft: 0,
                  }}>
                    {/* <img
                      alt={`${post.frontmatter.title}`}
                      src={`${post.frontmatter.hero?.childImageSharp.original.src}`}
                      style={{
                        width: "100%",
                        borderRadius: 24,
                      }}
                    /> */}
                    <GatsbyImage style={{borderRadius: 8}} image={getImage(post.frontmatter.hero?.childImageSharp.gatsbyImageData)} alt={post.frontmatter.title} />
                    <small>{post.frontmatter.date}</small>
                  </div>
                : ""
              }
              <header>
                  <h2>
                  <Link to={`${post.fields.slug}${post.frontmatter.title}`} itemProp="url">
                      <span itemProp="headline">{title}</span>
                  </Link>
                  </h2>
                  {
                    !post.frontmatter.hero ? <small>{post.frontmatter.date}</small> : ''
                  }
              </header>
              <section>
                  <p
                    style={{ overflow: "hidden" }}
                    dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
              </section>
            </article>
          </li>
        )
      })}
    </ol>
  )
}

export default Blogs