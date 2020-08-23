import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { CounterButton } from './CommonStyled'
import _ from 'lodash'
import CheckBox from './CheckBox'

interface CheckboxProps {
  value: number
  maxValue: number
  descFooter?: JSX.Element
  checkHighlights?: number[]
  valueButtons?: boolean
  checkboxMargins?: boolean
}

export default (props: CheckboxProps) => {
  const checkInitValue = (val: number, maxVal: number) => {
    console.log(`initial value`)
    if (val < -1 || val > maxVal) {
      return -1
    }
    return val - 1
  }

  const getCheckboxArray = (value: number, maxValue: number) => {
    let checked: boolean[] = []
    _.times(maxValue, (i) => {
      checked.push(i < value ? true : false)
    })
    return checked
  }

  const [value, setValue] = useState(
    checkInitValue(props.value, props.maxValue)
  )
  const [checkboxArray, setCheckboxArray] = useState<boolean[]>(
    getCheckboxArray(props.value, props.maxValue)
  )

  useEffect(() => {
    setCheckboxArray(getCheckboxArray(value, props.maxValue))
  }, [value, setCheckboxArray])

  const handleCheckboxClick = (index: number) => {
    //The checkbox display will jump to whichever checkbox is clicked
    // if (index < value) {
    //   setValue(index)
    // } else {
    //   setValue(index+1)

    //this functions more like a counter, tapping right of the last filled box increases value, tapping on it or left of it decreases value
    if (index < value) {
      setValue(value-1)
    } else {
      setValue(value+1)
    }
  }

  return (
    <OuterDiv>
      <CheckboxDiv>
        {props.valueButtons && (
          <CounterButton onClick={() => setValue(value - 1)}>-</CounterButton>
        )}

        {checkboxArray.map((checked, index) => (
          <CheckBox
            index={index}
            onClickCallback={
              props.valueButtons ? undefined : handleCheckboxClick
            }
            checked={checked}
            highlight={props.checkHighlights?.includes(index + 1)}
            {...props}
          />
        ))}

        {props.valueButtons && (
          <CounterButton onClick={() => setValue(value + 1)}>+</CounterButton>
        )}
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
  margin: 5px 0;
  font-size: 4vw;
  /* TODO: standardize these screen size breakpoints across the tracker app */
  @media (min-width: 600px) {
    font-size: 30px;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
`
/* TODO: implement this */
const HideTooltipButton = styled.div``
