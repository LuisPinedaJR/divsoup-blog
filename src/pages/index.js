import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="DivSoup" />
    <h1>DivSoup Blog</h1>
    <p>THis is the home page of the blog</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/about">About</Link>
  </Layout>
)

export default IndexPage
