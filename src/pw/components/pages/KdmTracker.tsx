import * as React from 'react'
import styled from 'styled-components'
import { BottomNav } from '../../../kdm/components/BottomNav'
import { GearDrawer } from '../../../kdm/components/gearDrawer/GearDrawer'
import { KdmContextProvider } from '../../../kdm/KdmContext'
import { SurvivorSheet } from '../../../kdm/pages/SurvivorSheet'
import { KDM_PAGE_BACKGROUND } from '../styling/color'
import { Background } from './Background'

export const KdmTracker = () => {

  return (
    <TestContentContainer id={'kdmTracker'}>
      <Background bgColor={KDM_PAGE_BACKGROUND}>
        <KdmContextProvider>
          <GearDrawer></GearDrawer>
          <SurvivorSheet />
          <BottomNav />
        </KdmContextProvider>
      </Background>
    </TestContentContainer>
  )
}

const TestContentContainer = styled.div`
  font-family: 'Roboto';
  height: 1200px;
`
