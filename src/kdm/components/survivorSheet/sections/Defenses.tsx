import _ from 'lodash'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { KdmContext } from '../../../KdmContext'
import CheckboxStatDisplay from '../_common/CheckboxStatDisplay'
import { BaseFlexDiv, CounterButton } from '../_common/CommonStyled'
import { StatsSectionContainer } from './StatsSectionContainer'
import { DEFENSE_NAME, DefenseType } from '../../../data/survivor/Condition'

//TODO: add 'clear all' button
export default function () {
  const { currentSurvivor, setCurrentSurvivor } = useContext(KdmContext)
  const [defenses, setDefenses] = useState(currentSurvivor.condition.defenses)

  useEffect(() => {
    console.log(`defense stats: ${JSON.stringify(defenses)}`)
    let tempSurvivor = currentSurvivor
    tempSurvivor.condition.defenses = defenses
    setCurrentSurvivor({ ...tempSurvivor })
  }, [defenses, setDefenses])

  const handleStatChange = (
    name: DEFENSE_NAME,
    value?: number,
    wounds?: boolean[]
  ) => {
    if (value && value < 0) {
      return
    }

    setDefenses(
      defenses.map((currStat) => {
        if (currStat.name === name) {
          return {
            name: name,
            value: value || currStat.value,
            checkBoxes: wounds || currStat.checkBoxes,
          }
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
      <BaseFlexDiv flexDir="row" id="defensesContainer">
        {defenses.map((currStat: DefenseType) => {
          const maxWoundsValue =
            currStat.name === DEFENSE_NAME.BRAIN ||
            currStat.name === DEFENSE_NAME.HEAD
              ? 1
              : 2
          let currWoundsValue = 0
          currStat.checkBoxes.forEach((checkBox) => {
            if (checkBox) {
              currWoundsValue++
            }
          })
          return (
            <DefenseDisplay key={currStat.name} flexDir="column">
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
              <BaseFlexDiv flexDir="row">
                <CheckboxStatDisplay
                  value={currWoundsValue}
                  checkHighlights={[2]}
                  maxValue={maxWoundsValue}
                  changeCallback={(value: number) => {
                    console.log(`defense xbox callback value: ${value}`)
                    let wounds: boolean[] = _.times(maxWoundsValue, (i) =>
                      i < value ? true : false
                    )
                    handleStatChange(currStat.name, undefined, wounds)
                  }}
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
          )
        })}
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
