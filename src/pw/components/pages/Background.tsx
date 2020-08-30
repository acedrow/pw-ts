import * as React from 'react'
import styled from 'styled-components'

export interface BgiProps {
  children: React.ReactNode
  imageUrl?: string
  bgColor?: string
}

export const Background = (props: BgiProps) => {
  console.log('imageUrl: ' + props.imageUrl)
  return (
    <BackgroundImageDiv
      id="background"
      imageUrl={props.imageUrl ? props.imageUrl : ''}
      bgColor={props.bgColor ? props.bgColor : ''}
    >
      {props.children}
    </BackgroundImageDiv>
  )
}

const BackgroundImageDiv = styled.div<{ imageUrl: string; bgColor: string }>`
  width: 100%;
  max-width: 100%;
  height: 100vh;
  ${props => !props.imageUrl && props.bgColor && `position: fixed; overflow: auto;`}
  background-image: ${(props) =>
    props.imageUrl ? 'url(' + props.imageUrl + ')' : ''};
  background-size: cover;
  background-color: ${(props) => (props.bgColor ? props.bgColor : '')};
  background-position: bottom;
`
