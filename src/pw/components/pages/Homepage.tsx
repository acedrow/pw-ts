import * as React from "react"
import { Blurb } from "./Blurb"
import styled from "styled-components"

export const Homepage = () => {
  return (

      <OuterContentContainer id='outerContainer'>
        <ContentContainer id='innerContainer'>
          <Blurb></Blurb>
        </ContentContainer>
      </OuterContentContainer>

  )
}

const OuterContentContainer = styled.div`
  width: 100vw;
  text-align: center

`

const ContentContainer = styled.div`
  width: 100%;
  display: inline-block
`
