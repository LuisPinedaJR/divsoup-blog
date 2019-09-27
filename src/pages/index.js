import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import usePosts from "../hooks/use.posts"

const IndexPage = () => {
  const posts = usePosts()
  return (
    <Layout>
      <SEO title="DivSoup" />
      <h1>DivSoup Blog</h1>
      <p>THis is the home page of the blog</p>
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/about">About</Link>

      <h2>Read my blog</h2>
      {posts.map(post => (
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      ))}
    </Layout>
  )
}

export default IndexPage
