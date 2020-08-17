import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import {
  LIGHT_GREY,
  KDM_PAGE_BACKGROUND,
} from '../../../../pw/components/styling/color'
import _ from 'lodash'
import { KdmContext } from '../../../KdmContext'

//☑☐

const MAX_HUNT_XP = 16;

export default function (props: { xpNumber: number }) {
  const { viewWidth } = useContext(KdmContext)
  const [xp, setXp] = useState(props.xpNumber)
  const [xpArray, setXpArray] = useState<boolean[]>([])

  useEffect(() => {
    console.log(`xp ue`)
    let pips: boolean[] = []
    _.times(MAX_HUNT_XP, (i) => {
      pips.push(i > xp ? false : true)
    })
    setXpArray([...pips])
  }, [xp])

  return (
    <>
      <OuterDiv>
        <NumberDiv>Hunt XP: {xp}</NumberDiv>
        <PipsDiv>
          {xpArray.map((pipStatus, index) => (
            <>
              &nbsp;<XpPip key={index}>{pipStatus ? `☑` : `☐`}</XpPip>
            </>
          ))}
        </PipsDiv>
        <ControlsDiv>
          <CounterButton onClick={() => setXp(xp + 1)}>+</CounterButton>
          <CounterButton onClick={() => setXp(xp - 1)}>-</CounterButton>
        </ControlsDiv>
      </OuterDiv>

      {/* 
        <outer div height: 100% display flex 
      
      
      */}
    </>
  )
}

const OuterDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: horizontal;
  align-items: center:
`

const NumberDiv = styled.div``

const PipsDiv = styled.div`
  display: flex;
  flex-direction: horizontal;
`
const XpPip = styled.span``
// const XpPip = styled.div<{ activated: boolean; size: number }>`
//   width: ${(props) => props.size}px;
//   height: ${(props) => props.size}px;
//   border: 1px solid ${LIGHT_GREY};
//   border-radius: 100%;
//   background-color: ${(props) =>
//     props.activated ? LIGHT_GREY : KDM_PAGE_BACKGROUND};
// `

const ControlsDiv = styled.div``

const CounterButton = styled.button`
  align-self: flex-end;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  border-radius: 50%;
  color: white;
  background-color: ${LIGHT_GREY};
`
