import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const StyledFullScreenWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
`

const FullBackgroundImg = ({ className, children }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: {eq: "wladislaw-sokolowskij-unsplash.jpg"}) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Single Image Data
  const imageData = desktop.childImageSharp.fluid

  return (
    <StyledFullScreenWrapper>
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={imageData}
        backgroundColor={`#040e18`}
        title="Fullscreen Background"
        id="fullscreenbg"
        role="img"
        aria-label="Fullscreen Background"
        preserveStackingContext={true}
      >
        {children}
      </BackgroundImage>
    </StyledFullScreenWrapper>
  )
}

const StyledFullBackgroundImg = styled(FullBackgroundImg)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export default StyledFullBackgroundImg
