import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BLOOD_RED } from '../../../../pw/components/styling/color'
import {
  HUNT_XP_MILESTONES,
  MAX_HUNT_XP,
  MAX_COURAGE_UNDERSTANDING,
  COURAGE_UNDERSTANDING_MILESTONES,
} from '../../../data/GAME_CONST'
import { KdmContext } from '../../../KdmContext'
import CheckboxStatDisplay from '../_common/CheckboxStatDisplay'
import { BaseFlexDiv } from '../_common/CommonStyled'
import { XP_TYPE } from '../../../data/survivor/Experiences'

//TODO: add courage/understanding abilities + footer descriptions
export default function () {
  const { currentSurvivor, setCurrentSurvivor } = React.useContext(KdmContext)
  const [experiences, setExperiences] = useState(currentSurvivor?.experiences)

  useEffect(() => {
    setExperiences
  }, [currentSurvivor])

  const handleHuntXpChange = (value: number, xpType: XP_TYPE) => {
    if (currentSurvivor) {
      let tempSurvivor = currentSurvivor
      let experiences = currentSurvivor.experiences

      switch (xpType) {
        case XP_TYPE.HUNT:
          experiences = { ...experiences, huntXp: value }
          break
        case XP_TYPE.COURAGE:
          experiences = {
            ...experiences,
            courage: { ...experiences.courage, value: value },
          }
          break
        case XP_TYPE.UNDERSTANDING:
          experiences = {
            ...experiences,
            understanding: { ...experiences.understanding, value: value },
          }
          break
      }

      tempSurvivor.experiences = experiences
      setCurrentSurvivor(tempSurvivor)
    } else {
      console.error(
        'Error handling hunt experience change: no current survivor'
      )
    }
  }

  return (
    <>
      {experiences && (
        <BaseFlexDiv flexDir="column">
          <CheckboxStatDisplay
            label="Hunt XP"
            value={experiences.huntXp}
            maxValue={MAX_HUNT_XP}
            descFooter={HuntXpFooter}
            checkboxMargins={true}
            checkHighlights={HUNT_XP_MILESTONES}
            changeCallback={(value: number) => {
              handleHuntXpChange(value, XP_TYPE.HUNT)
            }}
          ></CheckboxStatDisplay>
          <CheckboxStatDisplay
            label="Courage"
            value={experiences.courage.value}
            maxValue={MAX_COURAGE_UNDERSTANDING}
            descFooter={CourageFooter}
            checkboxMargins={true}
            checkHighlights={COURAGE_UNDERSTANDING_MILESTONES}
            changeCallback={(value: number) => {
              handleHuntXpChange(value, XP_TYPE.COURAGE)
            }}
          ></CheckboxStatDisplay>

          <CheckboxStatDisplay
            label="Understanding"
            value={experiences.understanding.value}
            maxValue={MAX_COURAGE_UNDERSTANDING}
            descFooter={UnderstandingFooter}
            checkboxMargins={true}
            checkHighlights={COURAGE_UNDERSTANDING_MILESTONES}
            changeCallback={(value: number) => {
              handleHuntXpChange(value, XP_TYPE.UNDERSTANDING)
            }}
          ></CheckboxStatDisplay>
        </BaseFlexDiv>
      )}

      {!experiences && <span>Couldn't load survivor experience data</span>}
    </>
  )
}

const RedSpan = styled.span`
  color: ${BLOOD_RED};
  font-weight: bold;
`

const CourageUndDiv = styled.div`
  border: 1px solid gray;
  padding: 5px;
`

const HuntXpFooter = (
  <>
    <RedSpan>1st - 4th ☑&nbsp;</RedSpan>
    <span> = Age 📖 </span>
    <RedSpan>5th ☑&nbsp;</RedSpan>
    <span> = Retirement 📖</span>
  </>
)

const CourageFooter = (
  <>
    <RedSpan>☑&nbsp;</RedSpan>
    <span> = Bold 📖 </span>
    <RedSpan>☑☑&nbsp;</RedSpan>
    <span> = See the Truth 📖 </span>
  </>
)

const UnderstandingFooter = (
  <>
    <RedSpan>☑&nbsp;</RedSpan>
    <span> = Insight 📖 </span>
    <RedSpan>☑☑&nbsp;</RedSpan>
    <span> = White Secret 📖 </span>
  </>
)
