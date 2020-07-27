import * as React from 'react'
import { Blurb } from './Blurb'
import styled from 'styled-components'
import { Topnav } from '../topnav/Topnav'
import { BackgroundImage } from './BackgroundImage'

export const Homepage = () => {
  return (
    <BackgroundImage imageUrl="https://i.imgur.com/P9gbnLf.jpg">
      <OuterContentContainer id="outerContainer">
        <Topnav />
        <ContentContainer id="innerContainer">
          <Blurb></Blurb>
        </ContentContainer>
      </OuterContentContainer>
    </BackgroundImage>
  )
}

const OuterContentContainer = styled.div`
  width: 100vw;
  text-align: center;
`

const ContentContainer = styled.div`
  width: 100%;
  display: inline-block;
`
