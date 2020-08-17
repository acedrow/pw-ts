import React, { useState } from 'react'
import { SurvivalActions } from '../../../data/survivor/SurvivorData'
import styled from 'styled-components'

/*
☑☐
  dodge: boolean
  encourage: boolean
  surge: boolean
  dash: boolean
  endure: boolean

*/
export default function (props: {
  survivalActions: SurvivalActions | undefined
}) {
  const [survivalActions, setSurvivalActions] = useState<SurvivalActions>(
    props.survivalActions || {
      dodge: false,
      encourage: false,
      surge: false,
      dash: false,
      endure: false,
    }
  )

  return (
    <>
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
    </>
  )
}

const OuterDiv = styled.div``

const ActionButton = styled.button`
  background-color: transparent;
  color: white;
`
