import * as React from 'react'
import styled from 'styled-components'
import { BottomNav } from '../../../kdm/components/BottomNav'
import { GearDrawer } from '../../../kdm/components/gearDrawer/GearDrawer'
import { KdmContextProvider } from '../../../kdm/KdmContext'
import { SurvivorSheet } from '../../../kdm/pages/SurvivorSheet'
import { KDM_PAGE_BACKGROUND } from '../styling/color'
import { Background } from './Background'
import { ViewWidthTracker } from '../../../util/ViewWidthTracker'

//largest view width (px) mobile layout is used before switching to larger screen view.
export const MAX_MOBILE_VIEW_WIDTH = 1000
//max width of the KDM tracker page container in px
export const MAX_VIEW_WIDTH = 1200

export const KdmTracker = () => {
  return (
    <Background bgColor={KDM_PAGE_BACKGROUND}>
      <InnerPageContainer id={'kdmTrackerInner'}>
        <KdmContextProvider>
          <ViewWidthTracker/>
          <GearDrawer></GearDrawer>
          <SurvivorSheet />
          <BottomNav />
        </KdmContextProvider>
      </InnerPageContainer>
    </Background>
  )
}

const InnerPageContainer = styled.div`
  max-width: ${MAX_VIEW_WIDTH}px;
  font-family: 'Roboto';
  margin: auto;
  /* TODO: testing values below, delete */
  height: 1200px;
`
