import React, { useContext, useState, useEffect } from 'react'
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
import handleXpChange from './handleXpChange'

interface XpTrackerProps {
  xpType: XP_TYPE
  alwaysShowFooter?: boolean
}

export default (props: XpTrackerProps) => {
  const { currentSurvivor, setCurrentSurvivor } = useContext(KdmContext)

  useEffect(() => {
    console.log(`ExperienceTracker ue`)
  }, [currentSurvivor, setCurrentSurvivor])

  return (
    <>
      {props.xpType === XP_TYPE.HUNT && (
        <CheckboxStatDisplay
          label={'Hunt XP'}
          value={currentSurvivor.experiences.huntXp}
          maxValue={MAX_HUNT_XP}
          descFooter={HuntXpFooter}
          checkboxMargins={true}
          checkHighlights={HUNT_XP_MILESTONES}
          alwaysShowFooter={props.alwaysShowFooter}
          changeCallback={(value: number) => {
            handleXpChange(
              value,
              props.xpType,
              currentSurvivor,
              setCurrentSurvivor
            )
          }}
        />
      )}
      {props.xpType === XP_TYPE.UNDERSTANDING && (
        <CheckboxStatDisplay
          label={'Understanding'}
          value={currentSurvivor.experiences.understanding.value}
          maxValue={MAX_COURAGE_UNDERSTANDING}
          descFooter={UnderstandingFooter}
          checkboxMargins={true}
          checkHighlights={COURAGE_UNDERSTANDING_MILESTONES}
          alwaysShowFooter={props.alwaysShowFooter}
          changeCallback={(value: number) => {
            handleXpChange(
              value,
              props.xpType,
              currentSurvivor,
              setCurrentSurvivor
            )
          }}
        />
      )}
      {props.xpType === XP_TYPE.COURAGE && (
        <CheckboxStatDisplay
          label={'Courage'}
          value={currentSurvivor.experiences.courage.value}
          maxValue={MAX_COURAGE_UNDERSTANDING}
          descFooter={CourageFooter}
          checkboxMargins={true}
          checkHighlights={COURAGE_UNDERSTANDING_MILESTONES}
          alwaysShowFooter={props.alwaysShowFooter}
          changeCallback={(value: number) => {
            handleXpChange(
              value,
              props.xpType,
              currentSurvivor,
              setCurrentSurvivor
            )
          }}
        />
      )}
    </>
  )
}

const RedSpan = styled.span`
  color: ${BLOOD_RED};
  font-weight: bold;
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
