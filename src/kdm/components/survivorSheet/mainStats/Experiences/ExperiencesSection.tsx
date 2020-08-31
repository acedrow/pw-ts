import React, { useContext } from 'react'
import styled from 'styled-components'
import { BLOOD_RED } from '../../../../../pw/components/styling/color'
import {
  COURAGE_UNDERSTANDING_MILESTONES,
  HUNT_XP_MILESTONES,
  MAX_COURAGE_UNDERSTANDING,
  MAX_HUNT_XP,
} from '../../../../data/GAME_CONST'
import { XP_TYPE } from '../../../../data/survivor/ExperiencesData'
import { KdmContext } from '../../../../KdmContext'
import CheckboxStatDisplay from '../../_common/CheckboxStatDisplay'
import { BaseFlexDiv } from '../../_common/CommonStyled'
import { StatsSectionContainer } from '../StatsSectionContainer'
import ExperienceTracker from './ExperienceTracker'
import { Survivor } from '../../../../data/survivor/SurvivorData'
import handleXpChange from './handleXpChange'

//TODO: add courage/understanding abilities + footer descriptions
export default function () {
  const { currentSurvivor, setCurrentSurvivor } = useContext(KdmContext)

  return (
    <StatsSectionContainer
      title={'Experience'}
      bottomBorder={true}
      collapsible={true}
      // startsCollapsed={true}
    >
      {currentSurvivor.experiences && (
        <BaseFlexDiv flexDir="column">
          <ExperienceTracker xpType={XP_TYPE.HUNT} />
          <ExperienceTracker xpType={XP_TYPE.COURAGE} />
          <ExperienceTracker xpType={XP_TYPE.UNDERSTANDING} />
        </BaseFlexDiv>
      )}

      {!currentSurvivor.experiences && (
        <span>Couldn't load survivor experience data</span>
      )}
    </StatsSectionContainer>
  )
}
