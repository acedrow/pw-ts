import * as React from 'react'
import styled from 'styled-components'
import { BottomNav } from '../../../kdm/components/BottomNav'
import { GearDrawer } from '../../../kdm/components/gearDrawer/GearDrawer'
import { KdmContextProvider } from '../../../kdm/KdmContext'
import { SurvivorsPage } from '../../../kdm/pages/SurvivorsPage'
import { ViewWidthTracker } from '../../../util/ViewWidthTracker'
import { KDM_PAGE_BACKGROUND } from '../styling/color'

//largest view width (px) mobile layout is used before switching to larger screen view.
export const MAX_MOBILE_VIEW_WIDTH = 1000
//max width of the KDM tracker page container in px
export const MAX_VIEW_WIDTH = 1200

export const KdmTracker = () => {
  return (
    <KdmBackground id='kdmBackground'>
      <InnerPageContainer id={'kdmTrackerInner'}>
        <KdmContextProvider>
          <ViewWidthTracker />
          <GearDrawer />
          <SurvivorsPage />
          <BottomNav />
        </KdmContextProvider>
      </InnerPageContainer>
    </KdmBackground>
  )
}

const KdmBackground = styled.div`
  background-color: ${KDM_PAGE_BACKGROUND};
`

const InnerPageContainer = styled.div`
  max-width: ${MAX_VIEW_WIDTH}px;
  font-family: 'Roboto';
`
