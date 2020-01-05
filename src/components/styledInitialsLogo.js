import React from "react"
import styled from "styled-components"
import { animateScroll as scroll } from "react-scroll"

const Initials = styled.span`
  position: absolute;
  top: 3rem;
  left: 3rem;
  font-family: "Cormorant Garamond";
  font-weight: 600;
  font-size: 3rem;
  &:hover {
    cursor: ${({ cursorPointer }) => (cursorPointer ? "pointer" : "default")};
  }
  color: ${({ letterColor }) =>
    letterColor === "white" ? "white" : "var(--primary)"};
  @media ${props => props.theme.mediaQueries.small} {
    left: 1rem;
    top: 1rem;
  }
`

const StyledInitialsLogo = ({ letterColor, cursorPointer, scrollToTop }) => (
  <Initials
    cursorPointer={cursorPointer}
    letterColor={letterColor}
    onClick={() => {
      if (scrollToTop) {
        scroll.scrollToTop({ duration: 800 })
      }
    }}
  >
    eb.
  </Initials>
)

export default StyledInitialsLogo
