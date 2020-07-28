import * as React from 'react'
import { KdmContextProvider } from '../../../kdm/KdmContext'
import { GearCard } from '../../../kdm/gearCard/GearCard'
import {
  CardData,
  GearCardData,
  ARMOR_LOC,
  AFF_POS,
  AFFINITY_COLOR,
} from '../../../kdm/gearCard/CardData'
import { Background } from './Background'
import { KDM_PAGE_BACKGROUND } from '../styling/color'
import { BottomNav } from '../../../kdm/components/BottomNav'
import styled from 'styled-components'
import { SurvivorSheet } from '../../../kdm/pages/SurvivorSheet'

export const KdmTracker = () => {
  const TEST_GAME_DATA = new GearCardData(
    'Lance of Longinus',
    ARMOR_LOC.TORSO,
    ['weapon', 'melee', 'spear', 'two-handed', 'bone'],
    ['Irreplaceable', 'Reach 2'],
    [
      { position: AFF_POS.TOP, color: AFFINITY_COLOR.RED },
      { position: AFF_POS.RIGHT, color: AFFINITY_COLOR.BLUE },
      { position: AFF_POS.LEFT, color: AFFINITY_COLOR.GREEN },
      { position: AFF_POS.BOTTOM, color: AFFINITY_COLOR.RED },
    ],
    { activationCost: 1, speed: 2, accuracy: 6, strength: 9 }
  )

  return (
    <TestContentContainer>
      <Background bgColor={KDM_PAGE_BACKGROUND}>
        <KdmContextProvider>
          <SurvivorSheet />
          <BottomNav />
        </KdmContextProvider>
      </Background>
    </TestContentContainer>
  )
}

const TestContentContainer = styled.div`
  height: 1200px;
`
