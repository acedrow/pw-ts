import React, { useContext } from 'react'
import { KdmContext } from '../../../../KdmContext'
import NameAndSmallBoxDisplay from '../../../_common/NameAndSmallBoxDisplay'
import {
  HUNT_XP_MILESTONES,
  COURAGE_UNDERSTANDING_MILESTONES,
} from '../../../../data/GAME_CONST'
import { XP_TYPE } from '../../../../data/survivor/ExperiencesData'
import { BaseFlexDiv } from '../../_common/CommonStyled'

export default () => {
  const { currentSurvivor } = useContext(KdmContext)

  return (
    <>
      <BaseFlexDiv flexDir="row">
        <BaseFlexDiv flexDir="column">
          <NameAndSmallBoxDisplay
            label={'Hunt XP'}
            value={currentSurvivor.experiences.huntXp}
            milestones={HUNT_XP_MILESTONES}
            xpType={XP_TYPE.HUNT}
          />
          <NameAndSmallBoxDisplay
            label={'Courage'}
            value={currentSurvivor.experiences.courage.value}
            milestones={COURAGE_UNDERSTANDING_MILESTONES}
            xpType={XP_TYPE.COURAGE}
          />
          <NameAndSmallBoxDisplay
            label={'Understanding'}
            value={currentSurvivor.experiences.understanding.value}
            milestones={COURAGE_UNDERSTANDING_MILESTONES}
            xpType={XP_TYPE.UNDERSTANDING}
          />
        </BaseFlexDiv>
        <BaseFlexDiv flexDir="column">
         
        </BaseFlexDiv>
      </BaseFlexDiv>
    </>
  )
}
