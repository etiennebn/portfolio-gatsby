import React from "react"
import styled from "styled-components"
import StyledInitialsLogo from "../components/styledInitialsLogo"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  min-height: 100vh;
  background-color: var(--primary);
  padding: 5rem;
  padding-top: 20rem;
  @media ${props => props.theme.mediaQueries.medium} {
    padding-top: 5rem;
  }
`

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
`

const SocialLink = styled.a`
  text-decoration: none;
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--white);
  margin: 0 1.5rem;
  transition: all 0.2s ease-out;
`

const SocialIcon = styled(FontAwesomeIcon)`
  color: var(--white);
  font-size: 2.2rem;
  transition: color 0.2s ease-out;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--white);
  font-size: 1.5rem;
  h2 {
    font-weight: 500;
    margin: 1rem 0;
    span.bold {
      font-weight: 700;
    }
    a {
      color: white;
      text-decoration: underline;
    }
  }
  width: 50%;
  @media ${props => props.theme.mediaQueries.medium} {
    width: 90%;
  }
`

const CuriculumVitae = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media ${props => props.theme.mediaQueries.medium} {
    width: 100%;
  }
  h2 {
    text-transform: uppercase;
    font-weight: 700;
  }
  ul {
    list-style-type: none;
    padding: 0 1rem;
    margin: 0;
    li {
      margin: 0.8rem 0;
    }
  }
`

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  @media ${props => props.theme.mediaQueries.medium} {
    width: 100%;
  }
  h2 {
    text-transform: uppercase;
    font-weight: 700;
  }
  h3 {
    margin: 0;
  }
  ul {
    list-style-type: none;
    padding: 0 1rem;
    margin: 0;
    li {
      margin: 0.8rem 0;
      span.period {
        margin-right: 0.5rem;
        color: var(--primary-lighter);
        font-weight: 700;
      }
      a {
        color: white;
        text-decoration: underline;
        font-weight: 700;
      }
    }
  }
`

const AboutSection = () => {
  const getEtienneAge = () => {
    const today = new Date()
    const birthDate = new Date("11/10/1993")
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1
    }
    return <> {age} </>
  }
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            github
            linkedin
          }
        }
      }
    }
  `)
  return (
    <AboutWrapper name="about" id="about">
      <StyledInitialsLogo
        cursorPointer
        scrollToTop
        letterColor="white"
      ></StyledInitialsLogo>
      <Content>
        <h2>
          Hello my name is <span className="bold"> Etienne Bourgoin </span>.
        </h2>
        <h2>
          I am a {getEtienneAge()} years old french Full-Stack JavaScript
          Developer.
        </h2>
        <p>
          I love building scalable web applications with some of the main
          frameworks such as Angular, Vue, React for the UI or Express for the
          back end. I like to take part in all the steps of building a web app
          such as UI/UX, coding, DevOps, testing or SEO.
        </p>
        <CuriculumVitae>
          <SkillsContainer>
            <h2>Skills</h2>
            <ul>
              <li>JavaScript ES6</li>
              <li>Angular, RxJS</li>
              <li>React, Gatsby, Styled-components, Spring & GraphQL</li>
              <li>VueJs, Vuex & Vue Router</li>
              <li>NodeJS, Express, OAuth & MongoDB</li>
              <li>HTML5 & SASS</li>
            </ul>
          </SkillsContainer>
          <ExperienceContainer>
            <h2>Work Experience</h2>
            <ul>
              <li>
                <span className="period">Apr. 2019 - today :</span>
                <span className="work">
                  Lead Developer and Devops Engineer for an
                  <a
                    href="https://www.april.com/journalists/press-releases/april-launches-its-multi-brand-marketplace"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    insurance marketplace (B2B){" "}
                  </a>
                  <a
                    href="https://www.april.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    @APRIL{" "}
                  </a>
                </span>
              </li>
              <li>
                <span className="period">Nov. 2018 - Mar. 2019 :</span>
                <span className="work">
                  Front-end developer{" "}
                  <a
                    href="https://www.niji.fr/en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    @NIJI{" "}
                  </a>
                </span>
              </li>
            </ul>
            <h2>Studies</h2>
            <ul>
              <li>
                <span className="period">2013 - 2018 :</span>
                <span className="work">
                  French engineering degree in computer science{" "}
                  <a
                    href="https://www.cpe.fr/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    @CPE{" "}
                  </a>
                </span>
              </li>
            </ul>
          </ExperienceContainer>
        </CuriculumVitae>
      </Content>
      <SocialLinksContainer>
        <SocialLink
          rel="noreferrer"
          target="_blank"
          aria-label="Github"
          href={`https://github.com/${site.siteMetadata.social.github}`}
        >
          <SocialIcon icon={faGithub} />
        </SocialLink>
        <SocialLink
          rel="noreferrer"
          target="_blank"
          aria-label="LinkedIn"
          href={`https://www.linkedin.com/in/${site.siteMetadata.social.linkedin}`}
        >
          <SocialIcon icon={faLinkedinIn} />
        </SocialLink>
      </SocialLinksContainer>
    </AboutWrapper>
  )
}

export default AboutSection
