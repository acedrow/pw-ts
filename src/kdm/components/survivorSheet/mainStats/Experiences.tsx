import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BLOOD_RED } from '../../../../pw/components/styling/color'
import { HUNT_XP_MILESTONES, MAX_HUNT_XP } from '../../../data/GAME_CONST'
import { KdmContext } from '../../../KdmContext'
import CheckboxStatDisplay from '../_common/CheckboxStatDisplay'

export default function () {
  const { currentSurvivor } = React.useContext(KdmContext)
  const [experiences, setExperiences] = useState(currentSurvivor?.experiences)

  useEffect(() => {
    setExperiences
  }, [currentSurvivor])

  const HuntXpFooter = (
    <>
      <RedSpan>1st - 4th ☑&nbsp;</RedSpan>
      <span> = Age 📖 </span>
      <RedSpan>5th ☑&nbsp;</RedSpan>
      <span> = Retirement 📖</span>
    </>
  )

  return (
    <>
      {experiences && (
        <CheckboxStatDisplay
          value={experiences.huntXp}
          maxValue={MAX_HUNT_XP}
          descFooter={HuntXpFooter}
          checkboxMargins={true}
          checkHighlights={HUNT_XP_MILESTONES}
        ></CheckboxStatDisplay>
      )}

      {!experiences && <span>Couldn't load survivor experience data</span>}
    </>
  )
}

const RedSpan = styled.span`
  color: ${BLOOD_RED};
  font-weight: bold;
`
