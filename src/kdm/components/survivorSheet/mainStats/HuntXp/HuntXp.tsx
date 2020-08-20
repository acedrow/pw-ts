import _ from 'lodash'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  KDM_DARK_GREY,
  BLOOD_RED,
} from '../../../../../pw/components/styling/color'
import { KdmContext } from '../../../../KdmContext'
import CheckboxStatDisplay from '../../_common/CheckboxStatDisplay'

//☑☐

const MAX_HUNT_XP = 16

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

  const HuntXpFooter = (
    <>
      <RedSpan>1st - 4th ☑&nbsp;</RedSpan>
      <span> = Age 📖 </span>
      <RedSpan>5th ☑&nbsp;</RedSpan>
      <span> = Retirement 📖</span>
    </>
  )

  return (
    <>
      <CheckboxStatDisplay
        value={0}
        maxValue={16}
        descFooter={HuntXpFooter}
        checkHighlights={[1, 5, 9, 14, 15]}
      ></CheckboxStatDisplay>



      {/* 
        <outer div height: 100% display flex 
      
      
      */}
    </>
  )
}

const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const XpKeyDiv = styled.div`
  font-size: 16px;
`

const XpBarDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`

const LabelDiv = styled.div`
  font-size: 16px;
  font-weight: bold;
`

const PipsDiv = styled.div`
  font-size: 5vw;
  @media (min-width: 600px) {
    font-size: 30px;
  }
  margin-left: 5px;
  display: flex;
  flex-direction: row;
`
const XpPip = styled.span<{ red?: boolean }>`
  color: ${(props) => (props.red ? BLOOD_RED : 'white')};
  font-weight: ${(props) => (props.red ? 'bold' : 'normal')};
`
const ControlsDiv = styled.div``

const CounterButton = styled.button`
  align-self: flex-end;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  border-radius: 50%;
  color: white;
  background-color: ${KDM_DARK_GREY};
  border: 1px solid white;
  min-height: 20px;
  min-width: 20px;
`
const RedSpan = styled.span`
  color: ${BLOOD_RED};
  font-weight: bold;
`
