import React, { useState } from 'react'
import { StatsSectionContainer } from './StatsSectionContainer'
import shortid from 'shortid'
import styled from 'styled-components'
import { DefenseType } from '../../../data/survivor/SurvivorData'
import { CounterButton } from '../_common/CommonStyled'

// armor:  👒 ✋ 🦵 🥋 waist will use belt clip art
// brain: 🧠

export default function (props: { defenseStats: DefenseType[] }) {
  const [defenseStats, setDefenseStats] = useState(props.defenseStats)

  return (
    <StatsSectionContainer bottomBorder={true}>
      <Defenses>
        {defenseStats.map((currStat) => {
          <DefenseType key={shortid()}>
            <ValueDisplay>
              <TypeHeader>
                <CounterButton>-</CounterButton>
                <span>🧠</span>
                <CounterButton>+</CounterButton>
              </TypeHeader>
              {currStat.checkBoxes.map((value) => {
                <WoundBox/>
              })}
            </ValueDisplay>
          </DefenseType>
        })}
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

const DefenseType = styled.div``

const ValueDisplay = styled.div`
  display: flex;
  flex-direction: column;
`

const WoundBox = styled.div``

const TypeHeader = styled.div`
  display: flex;
  flex-direction: row;
`

