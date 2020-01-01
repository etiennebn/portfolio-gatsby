import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { animateScroll as scroll  } from 'react-scroll'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import StyledFullBackgroundImg from "../components/fullBackgroundImg"


const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fe6056;
  h1, h2 {
    font-size: 5rem;
    font-weight: 500;
    text-align: center;
    flex-wrap: wrap;
    strong {
      margin: 0 2rem;
      white-space: nowrap;
    }
  }
`

const Heading = styled.h1`
    margin: 0;
    //font-size: 7rem;
    //height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
  
    @media ${props => props.theme.mediaQueries.smallest} {
      flex-direction: column;
      background-color: aqua;
    }
`

const SlimArrowDown = styled.button`
  position: absolute;
  bottom: 10px;
  background: none;
  border: none;
  width: auto;
  padding: 0;
  color: #fe6056;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    bottom: 15px;
  }
`

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: chartreuse;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home"/>
      <StyledFullBackgroundImg>
        <StyledInnerWrapper>
          <Heading>Hey, <strong>I'm Etienne. </strong></Heading>
          <Heading>I'm a <strong> Web developper</strong> from France</Heading>
          <SlimArrowDown
            className={'icon-arrows-slim-down'}
            onClick={() => scroll.scrollToBottom({duration: 800})}/>
        </StyledInnerWrapper>
      </StyledFullBackgroundImg>
      <AboutWrapper id="about">
        <p>Now go build something great.</p>
      </AboutWrapper>
      {/*<p>Now go build something great.</p>*/}
      {/*<p>Welcome to your new Gatsby site.</p>*/}
    </Layout>
  );
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
