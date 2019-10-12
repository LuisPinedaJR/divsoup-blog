import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import usePosts from "../hooks/use-posts"
import PostPreview from "../components/post-preview"

const IndexPage = () => {
  const posts = usePosts()
  return (
    <Layout>
      <SEO title="DivSoup" />
      <h1>DivSoup Blog</h1>
      <p>This is the home page of the blog</p>
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/about">About</Link>

      <h2>Read my blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}

export default IndexPage
