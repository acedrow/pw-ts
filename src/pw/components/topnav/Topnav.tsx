import { lavender } from "../styling/color"
import * as React from "react"
import styled from "styled-components"
import { NavElement, NavElementType } from "./NavElement"
import { BaseFlexDiv } from '../../../kdm/components/survivorSheet/_common/CommonStyled';

export const mouseOverColor = 'white'
export const baseColor = lavender

export const Topnav = () => {
  return (
    <>
      {/* <Link to="/resume" > Topnav Resume Test</Link>
        <Link to="/" > Home  Test</Link> */}

      {/* TODO: put these in a list and map */}
      <TopNavContainer
        flexDir='row'
        justifyContent='flex-end'
      >
        <NavElement
          navItemText="Home"
          elementType={NavElementType.link}
          linkDest="/"
          style={NavElementStyle}
        ></NavElement>
        {/* <a href="mailto:ace.holt@gmail.com" style={NavElementStyle}>
          Contact
        </a> */}
        <NavElement
          navItemText="Resume"
          elementType={NavElementType.link}
          linkDest="/resume"
          style={NavElementStyle}
        ></NavElement>
        <NavElement
          navItemText="Contact"
          elementType={NavElementType.anchor}
          linkDest="mailto:ace.holt@gmail.com"
          style={NavElementStyle}
        ></NavElement>
        <NavElement
          navItemText="Music"
          elementType={NavElementType.button}
          buttonMethod={() => console.log('contact button')}
          style={NavElementStyle}
        ></NavElement>
        <NavElement
          navItemText="*"
          elementType={NavElementType.link}
          linkDest="/kdm-test"
          style={NavElementStyle}
        ></NavElement>
      </TopNavContainer>
    </>
  )
}

export const NavElementStyle = {
  padding: '20px',
  backgroundColor: 'Transparent',
  border: 'none',
  outline: 'none',
  overflow: 'hidden',
  color: lavender,
  transition: 'color 1s',
  fontFamily: 'Yeseva One, cursive',
  fontSize: 'medium',
  textDecoration: 'none',
}

const TopNavContainer = styled(BaseFlexDiv)`
  margin: 0 20px 0 20px;
`
