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
  //align-items: center;
  justify-content: flex-start;
  color: var(--primary);
  width: auto;
  //background-color: white;
  padding: 0 1.5rem;
`

const NameHeading = styled.div`
  display: flex;
  align-items: flex-end;
  h1 {
    margin-right: 3rem;
  }
  div {
    display: flex;
    height: 0.5rem;
    flex-grow: 1;
    background-color: var(--primary);
    margin-bottom: 1rem;
    @media ${props => props.theme.mediaQueries.small} {
      display: none;
    }
  }
`

const Heading = styled.h1`
    display: flex;
    //width: 100%;
    //background-color: aliceblue;
    font-size: 3rem;
    font-weight: 500;
    text-align: left;
    flex-wrap: wrap;
    margin: 0;
    strong {
      margin: 0 1rem;
      white-space: nowrap;
    }
`

const SlimArrowDown = styled.button`
  position: absolute;
  bottom: 10px;
  left: calc(50% - 25px);
  width: 50px;
  background: none;
  border: none;
  padding: 0;
  color: var(--primary);
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    bottom: 15px;
  }
`

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background-color: var(--primary);
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--white);
  h2 {
    font-weight: 500;
    margin: 0.8rem 0;
  }
  width: 50%;
  @media ${props => props.theme.mediaQueries.small} {
    width: 90%;
  }
`

const Initials = styled.span`
  position: absolute;
  top: 3rem;
  left: 3rem;
  font-family: "Cormorant Garamond";
  font-weight: 600;
  font-size: 3rem;
  &.white {
    color: var(--white);
  }
  &.primary {
    color: var(--primary);
  }
  @media ${props => props.theme.mediaQueries.small} {
    left: 1rem;
    top: 1rem;
  }
`

const IndexPage = ({ data }) => {
  const getEtienneAge = () => {
    const today = new Date();
    const birthDate = new Date('11/10/1993');
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1;
    }
    return (
      <> { age } </>
    );
  }
  return (
    <Layout>
      <SEO title="Home"/>
      <StyledFullBackgroundImg>
        <Initials className="white">
          eb.
        </Initials>
        <StyledInnerWrapper>
          <NameHeading>
            <Heading>Hey, <strong>I'm Etienne. </strong></Heading>
            <div></div>
          </NameHeading>
          <Heading>I'm a <strong> Web developer</strong> from France</Heading>
          <SlimArrowDown
            className={'icon-arrows-slim-down'}
            onClick={() => scroll.scrollToBottom({duration: 800})}/>
        </StyledInnerWrapper>
      </StyledFullBackgroundImg>
      <AboutWrapper id="about">
        <Initials className="white">
          eb.
        </Initials>
        <Content>
          <h2>
            Hello my name is Etienne Bourgoin. I am a { getEtienneAge() } years old french web developer.
          </h2>
          <h2>
            I am currently working for April as a lead developer.
          </h2>
          <h2>
            I was born and I a grew up in a digital environment.
          </h2>
        </Content>
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
