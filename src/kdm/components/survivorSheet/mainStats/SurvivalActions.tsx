import React, { useState, useContext, useEffect } from 'react'
import { SurvivalActions } from '../../../data/survivor/SurvivorData'
import styled from 'styled-components'
import { StatsSectionContainer } from './StatsSectionContainer'
import { KdmContext } from '../../../KdmContext'

/*
☑☐
  dodge: boolean
  encourage: boolean
  surge: boolean
  dash: boolean
  endure: boolean

*/
export default () => {
  const { currentSurvivor, setCurrentSurvivor } = useContext(KdmContext)
  const [survivalActions, setSurvivalActions] = useState<SurvivalActions>(
    currentSurvivor.actions
  )

  useEffect(() => {
    let tempSurvivor = currentSurvivor;
    tempSurvivor.actions = survivalActions;
    setCurrentSurvivor({...tempSurvivor})
  }, [survivalActions, setSurvivalActions])

  return (
    <StatsSectionContainer
      title={'Survival Actions'}
      bottomBorder={true}
      collapsible={true}
    >
      <OuterDiv>
        <ActionButton
          onClick={() =>
            setSurvivalActions({
              ...survivalActions,
              dodge: !survivalActions.dodge,
            })
          }
        >
          Dodge {survivalActions?.dodge ? `☑` : `☐`}
        </ActionButton>
        <ActionButton
          onClick={() =>
            setSurvivalActions({
              ...survivalActions,
              encourage: !survivalActions.encourage,
            })
          }
        >
          Encourage {survivalActions?.encourage ? `☑` : `☐`}
        </ActionButton>
        <ActionButton
          onClick={() =>
            setSurvivalActions({
              ...survivalActions,
              surge: !survivalActions.surge,
            })
          }
        >
          Surge {survivalActions?.surge ? `☑` : `☐`}
        </ActionButton>
        <ActionButton
          onClick={() =>
            setSurvivalActions({
              ...survivalActions,
              dash: !survivalActions.dash,
            })
          }
        >
          Dash {survivalActions?.dash ? `☑` : `☐`}
        </ActionButton>
        <ActionButton
          onClick={() =>
            setSurvivalActions({
              ...survivalActions,
              endure: !survivalActions.endure,
            })
          }
        >
          Endure {survivalActions?.endure ? `☑` : `☐`}
        </ActionButton>
      </OuterDiv>
    </StatsSectionContainer>
  )
}

const OuterDiv = styled.div`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`

const ActionButton = styled.button`
  outline: none;
  background-color: transparent;
  color: white;
  font-size: 18px;
`
