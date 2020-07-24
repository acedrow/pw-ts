import { useState, useEffect, CSSProperties } from "react"
import * as React from "react"
import { mouseOverColor, baseColor } from "Topnav"
import styled from "styled-components"
import { Link } from "react-router-dom"

export interface NavElProps {
  navItemText: string;
  elementType: NavElementType;
  linkDest?: string;
  style: CSSProperties;
  buttonMethod?: () => void;
}

export enum NavElementType {
  button = 'button',
  link = 'link',
  anchor = 'a',
}

export const NavElement = (props : NavElProps) => {
  const [style, setStyle] = useState(props.style)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    //TODO: spread operator here, test new hover color
    let tempStyle = {color: ''}
    Object.assign(tempStyle, style)

    tempStyle.color = hovered ? mouseOverColor : baseColor
    setStyle(tempStyle)
  }, [hovered])

  return (
    <>
      {props.elementType === NavElementType.button && (
        <button
          onClick={props.buttonMethod}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={style}
        >
          {props.navItemText}
        </button>
      )}
      {props.elementType === NavElementType.link && (
        <NavLink
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={style}
          to={props.linkDest}
        >
          {' '}
          {props.navItemText}
        </NavLink>
      )}
      {props.elementType === NavElementType.anchor && (
        <a
          href={props.linkDest}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={style}
        >
          {' '}
          {props.navItemText}
        </a>
      )}
    </>
  )
}

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`
