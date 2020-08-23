import React from 'react'
import styled from 'styled-components'
import { BLOOD_RED } from '../../../../pw/components/styling/color'
import CheckboxStatDisplay from '../_common/CheckboxStatDisplay'

const huntCheckboxPrefix = 'huntXpTracker'

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
      maxValue={16}
      descFooter={HuntXpFooter}
      checkboxMargins={true}
      checkHighlights={[1, 5, 9, 14, 15]}
    ></CheckboxStatDisplay>
  )
}

const RedSpan = styled.span`
  color: ${BLOOD_RED};
  font-weight: bold;
`
