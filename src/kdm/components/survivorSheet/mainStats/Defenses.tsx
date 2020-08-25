import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DefenseType, DEFENSE_NAME } from '../../../data/survivor/SurvivorData'
import { CounterButton, BaseFlexDiv } from '../_common/CommonStyled';
import { StatsSectionContainer } from './StatsSectionContainer'
import CheckboxStatDisplay from '../_common/CheckboxStatDisplay'
import _ from 'lodash'

// armor:  👒 ✋ 🦵 🥋 waist will use belt clip art
// brain: 🧠

const defenseCheckboxPrefix = 'defenseXpTracker'

export const BLANK_DEFENSE_STATS: DefenseType[] = [
  { name: DEFENSE_NAME.BRAIN, value: 0, checkBoxes: [false] },
  { name: DEFENSE_NAME.HEAD, value: 0, checkBoxes: [false] },
  { name: DEFENSE_NAME.ARMS, value: 0, checkBoxes: [false, false] },
  { name: DEFENSE_NAME.LEGS, value: 0, checkBoxes: [false, false] },
  { name: DEFENSE_NAME.BODY, value: 0, checkBoxes: [false, false] },
  { name: DEFENSE_NAME.WAIST, value: 0, checkBoxes: [false, false] },
]

export default function (props: { defenseStats?: DefenseType[] }) {
  const [defenseStats, setDefenseStats] = useState(
    props.defenseStats || BLANK_DEFENSE_STATS
  )

  useEffect(() => {
    console.log(`DEFENSE STATS: ${JSON.stringify(defenseStats)}`)
  }, [defenseStats])

  const handleStatChange = (name: DEFENSE_NAME, value: number) => {
    if (value < 0) {
      return
    }
    setDefenseStats(
      defenseStats.map((currStat) => {
        if (currStat.name === name) {
          return { name: name, value: value, checkBoxes: currStat.checkBoxes }
        } else {
          return currStat
        }
      })
    )
  }

  return (
    <StatsSectionContainer
      title={'Defenses'}
      bottomBorder={true}
      collapsible={true}
    >
      <BaseFlexDiv flexDir='row' id="defensesContainer">
        {defenseStats.map((currStat) => (
          <DefenseDisplay key={currStat.name} flexDir='column'>
            <CounterButton
              onClick={() =>
                handleStatChange(currStat.name, currStat.value + 1)
              }
            >
              +
            </CounterButton>
            <DefenseTitle>{_.capitalize(currStat.name)}</DefenseTitle>
            {/* TODO: value display should be an input field in addition to a counter */}
            <ValueDisplay>{currStat.value}</ValueDisplay>
            <BaseFlexDiv flexDir='row'>
              <CheckboxStatDisplay
                value={0}
                maxValue={
                  currStat.name === DEFENSE_NAME.BRAIN ||
                  currStat.name === DEFENSE_NAME.HEAD
                    ? 1
                    : 2
                }
                checkHighlights={[2]}
              ></CheckboxStatDisplay>
            </BaseFlexDiv>
            <CounterButton
              onClick={() =>
                handleStatChange(currStat.name, currStat.value - 1)
              }
            >
              -
            </CounterButton>
          </DefenseDisplay>
        ))}
      </BaseFlexDiv>
    </StatsSectionContainer>
  )
}

const DefenseTitle = styled.span`
  font-size: 14px;
`

const DefenseDisplay = styled(BaseFlexDiv)`
  min-width: 15%;
  margin: 2px;
  border: 1px solid gray;
  align-items: center;
`

const ValueDisplay = styled.div`
  min-width: 75%;
  border: 1px solid gray;
`
