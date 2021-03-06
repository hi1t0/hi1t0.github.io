/* 記事リスト */
import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { styled } from "@mui/material/styles";
import { useTheme, useMediaQuery } from '@mui/material';

const BlogContainer = styled("article")(({ theme }) => ({
  // ...theme.mixins.blogContainer, // Github Pagesに上げる時にmixinsが反映されない
  width: "100%",
  padding: 24,
  /* ↓↓↓↓画像がはみ出なくなる↓↓↓↓ */
  "&::after": {
    content: '""',
    clear: "both",
    display: "block",
  },
  /* ↑↑↑↑画像がはみ出なくなる↑↑↑↑ */
  "@media (max-width:375px)": {
    minHeight: "150px",
    padding: 16,
  },
  "@media (min-width: 376px) and (max-width:768px)": {
  },
  "@media (min-width: 769px)" : {
  },
}));

const BlogImage = styled("div")({
  float: "left",
  maxWidth: "250px",
  width: "30%",
  height: "100%",
  marginLeft: 0,
  marginRight: 24,
  borderRadius: 8,
  "@media (max-width:375px)": {
    float: "none",
    minWidth: "100%",
    // minHeight: "100px",
    maxHeight: "160px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 16,
    overflow: "hidden",
  },
  "@media (min-width: 376px) and (max-width:768px)": {
  },
  "@media (min-width: 769px)" : {
  },
});

const BlogRightSection = styled("div")({
  // float: "right",
  // width: "70%",
})

const BlogTitle = styled("div")({
  fontWeight: "bold",
  "@media (max-width:375px)": {
    fontSize: "1.0em",
    marginBottom: "8px",
  },
  "@media (min-width: 376px) and (max-width:768px)": {
    fontSize: "1.2em",
    marginBottom: "16px",
  },
  "@media (min-width: 769px)" : {
    fontSize: "1.5em",
    marginBottom: "24px",
  },
});

const Blogs = ({ posts }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <ol style={{ listStyle: `none` }}>
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug

        return (
          <BlogContainer key={post.fields.slug}>
            {
              post.frontmatter.hero ?
                <Link to={`/${process.env.GATSBY_ROUTE_BLOG}${post.fields.slug}`} style={{ textDecoration: `none`, }}>
                  <BlogImage>
                    <GatsbyImage style={{borderRadius: 8,}} image={getImage(post.frontmatter.hero?.childImageSharp.gatsbyImageData)} alt={post.frontmatter.title} />
                  </BlogImage>
                </Link>
              : ""
            }
            <BlogRightSection>
            <BlogTitle>
              <Link to={`/${process.env.GATSBY_ROUTE_BLOG}${post.fields.slug}`} style={{ textDecoration: `none`, }}>
                  {title}
              </Link>
            </BlogTitle>
            {
              !post.frontmatter.hero || isMobile ? <small>{post.frontmatter.date}</small> : ''
            }
            <section>
                <p
                  style={{ overflow: "hidden" }}
                  dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                />
            </section>
            </BlogRightSection>
          </BlogContainer>
        )
      })}
    </ol>
  )
}

export default Blogs