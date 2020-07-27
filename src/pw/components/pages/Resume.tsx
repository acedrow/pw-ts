import * as React from 'react'
import styled from 'styled-components'
import { Topnav } from '../topnav/Topnav'
import { BackgroundImage } from './BackgroundImage'

export const Resume = () => {
  return (
    <BackgroundImage imageUrl="https://i.imgur.com/P9gbnLf.jpg">
      <Topnav />
      <ResumePageContainer>
        <h1> RESUME TEST </h1>
        <SideMenu></SideMenu>
      </ResumePageContainer>
    </BackgroundImage>
  )
}

const SideMenu = () => {
  return <></>
}

const ResumePageContainer = styled.div`
  margin: 20px 0 0 20px;
`
