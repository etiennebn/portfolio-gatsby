import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import AboutSection from "../section/about"
import HomeSection from "../section/home"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HomeSection></HomeSection>
      <AboutSection></AboutSection>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: {eq: "coline-beulin-unsplash.jpg"}) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
