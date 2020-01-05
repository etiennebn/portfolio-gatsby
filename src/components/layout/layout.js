/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import styled from 'styled-components'
import theme from "../../utils/styles/theme"
import GlobalStyles from "../../utils/styles/global"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: var(--background);
  color: var(--text);
  position: relative;
  transition: color 0.2s ease-out, background 0.2s ease-out;
`;

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;

const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <StyledMain>{children}</StyledMain>
        <GlobalStyles />
      </Wrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
