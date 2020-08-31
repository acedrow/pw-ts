import React, { useContext } from 'react'
import { KdmContext } from '../../../../KdmContext'
import NameAndSmallBoxDisplay from '../../../_common/NameAndSmallBoxDisplay'
import { HUNT_XP_MILESTONES } from '../../../../data/GAME_CONST'
import { XP_TYPE } from '../../../../data/survivor/ExperiencesData'

export default () => {
  const { currentSurvivor } = useContext(KdmContext)

  return (
    <>
    NAME-HEADER_TEST
      <NameAndSmallBoxDisplay
        label={'Hunt XP'}
        value={currentSurvivor.experiences.huntXp}
        milestones={HUNT_XP_MILESTONES}
        xpType={XP_TYPE.HUNT}
      />
    </>
  )
}
