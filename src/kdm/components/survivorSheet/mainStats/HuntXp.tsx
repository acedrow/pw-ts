import React from 'react'
import styled from 'styled-components'
import { BLOOD_RED } from '../../../../pw/components/styling/color'
import CheckboxStatDisplay from '../_common/CheckboxStatDisplay'
import { MAX_HUNT_XP, HUNT_XP_MILESTONES } from '../../../data/GAME_CONST';


export default function (props: { xpNumber: number }) {
  const HuntXpFooter = (
    <>
      <RedSpan>1st - 4th ☑&nbsp;</RedSpan>
      <span> = Age 📖 </span>
      <RedSpan>5th ☑&nbsp;</RedSpan>
      <span> = Retirement 📖</span>
    </>
  )

  return (
    <CheckboxStatDisplay
      value={2}
      maxValue={MAX_HUNT_XP}
      descFooter={HuntXpFooter}
      checkboxMargins={true}
      checkHighlights={HUNT_XP_MILESTONES}
    ></CheckboxStatDisplay>
  )
}

const RedSpan = styled.span`
  color: ${BLOOD_RED};
  font-weight: bold;
`
