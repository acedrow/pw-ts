import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DefenseType, DEFENSE_NAME } from '../../../data/survivor/SurvivorData'
import { CounterButton } from '../_common/CommonStyled'
import { StatsSectionContainer } from './StatsSectionContainer'
import CheckboxStatDisplay from '../_common/CheckboxStatDisplay'

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
      <Defenses id="defensesContainer">
        {defenseStats.map((currStat) => (
          <DefenseDisplay key={currStat.name}>
            <CounterButton
              onClick={() =>
                handleStatChange(currStat.name, currStat.value + 1)
              }
            >
              +
            </CounterButton>
            <span>🧠</span>
            <ValueDisplay>{currStat.value}</ValueDisplay>
            <WoundBoxes>
              <CheckboxStatDisplay
                value={0}
                maxValue={2}
                checkHighlights={[2]}
              ></CheckboxStatDisplay>
            </WoundBoxes>
            <CounterButton
              onClick={() =>
                handleStatChange(currStat.name, currStat.value - 1)
              }
            >
              -
            </CounterButton>
          </DefenseDisplay>
        ))}
      </Defenses>
    </StatsSectionContainer>
  )
}

const Defenses = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
`

const WoundBoxes = styled.div`
  display: flex;
  flex-direction: row;
`

const DefenseDisplay = styled.div`
  min-width: 15%;
  margin: 2px;
  border: 1px solid gray;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const ValueDisplay = styled.div`
  min-width: 75%;
  border: 1px solid gray;
`
