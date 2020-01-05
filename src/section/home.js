import React from "react"
import styled from "styled-components"
import StyledInitialsLogo from "../components/styledInitialsLogo"
import StyledFullBackgroundImg from "../components/fullBackgroundImg"
import { scroller } from "react-scroll"

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: var(--primary);
  width: auto;
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

const HomeSection = () => {
  return (
    <StyledFullBackgroundImg>
      <StyledInitialsLogo letterColor="primary"></StyledInitialsLogo>
      <StyledInnerWrapper>
        <NameHeading>
          <Heading>
            Hey, <strong>I'm Etienne. </strong>
          </Heading>
          <div></div>
        </NameHeading>
        <Heading>
          I'm a <strong> Fullstack developer</strong> from France
        </Heading>
        <SlimArrowDown
          aria-label="scroll to about section"
          className={"icon-arrows-slim-down"}
          onClick={() =>
            scroller.scrollTo("about", { duration: 800, smooth: true })
          }
        />
      </StyledInnerWrapper>
    </StyledFullBackgroundImg>
  )
}

export default HomeSection;
