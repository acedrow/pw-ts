import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import shortid from 'shortid'
import styled from 'styled-components'
import { CounterButton } from './CommonStyled'
import CheckBox from './CheckBox'

interface CheckboxProps {
  value: number
  maxValue: number
  descFooter?: JSX.Element
  checkHighlights?: number[]
}

export default (props: CheckboxProps) => {
  const checkInitValue = (val: number, maxVal: number) => {
    console.log(`initial value`)
    if (val < -1 || val > maxVal) {
      return -1
    }
    return val - 1
  }

  const [value, setValue] = useState(
    checkInitValue(props.value, props.maxValue)
  )

  const [checkBoxArray, setCheckBoxArray] = useState<boolean[]>([])

  useEffect(() => {
    console.log(`value: ${value}`)
    if (value <= 0) {
      setValue(0)
    }
    let checkboxes: boolean[] = []
    _.times(props.maxValue, (i) => {
      checkboxes.push(i > value - 1 ? false : true)
    })
    setCheckBoxArray([...checkboxes])
  }, [value])

  return (
    <OuterDiv>
      {/* <LabelDiv>Hunt XP:</LabelDiv> */}
      <CheckboxDiv>
        <CounterButton onClick={() => setValue(value - 1)}>-</CounterButton>

        {checkBoxArray.map((checked, index) => {
          let highlight = false
          if (props.checkHighlights?.includes(index)) highlight = true
          return (
            <>
              <CheckBox highlight={highlight} key={shortid()} checked={value > index} />
            </>
          )
        })}

        <CounterButton onClick={() => setValue(value + 1)}>+</CounterButton>
      </CheckboxDiv>
      {props.descFooter && <DescFooter>{props.descFooter}</DescFooter>}
    </OuterDiv>
  )
}

const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const DescFooter = styled.div`
  font-size: 16px;
`

const CheckboxDiv = styled.div`
  font-size: 4vw;
  @media (min-width: 600px) {
    font-size: 30px;
  }
  display: flex;
  flex-direction: row;
`
const HideTooltipButton = styled.div``

