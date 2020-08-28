import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { CounterButton, BaseFlexDiv } from './CommonStyled'
import _ from 'lodash'
import CheckBox from './CheckBox'
import TooltipButton from '../../_common/TooltipButton'

interface CheckboxProps {
  value: number
  maxValue: number
  label?: string
  descFooter?: JSX.Element
  checkHighlights?: number[]
  valueButtons?: boolean
  checkboxMargins?: boolean
  changeCallback?: (value: number) => void
}

export default (props: CheckboxProps) => {
  const [showFooter, setShowFooter] = useState(false)

  const checkInitValue = (val: number, maxVal: number) => {
    if (val < -1 || val > maxVal) {
      return 0
    }
    return val
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
    if (props.changeCallback) {
      props.changeCallback(value)
    }
  }, [value, setCheckboxArray])

  const handleCheckboxClick = (index: number) => {
    //The checkbox display will jump to whichever checkbox is clicked
    // if (index < value) {
    //   setValue(index)
    // } else {
    //   setValue(index+1)

    //this functions more like a counter, tapping right of the last filled box increases value, tapping on it or left of it decreases value
    if (index < value) {
      setValue(value - 1)
    } else {
      setValue(value + 1)
    }
  }

  return (
    <OuterContainer flexDir="column">
      {props.label && (
        <BaseFlexDiv flexDir="row">
          <Label>{props.label}</Label>
          &nbsp;
          <TooltipButton
            tooltipOpen={showFooter}
            setTooltipOpen={setShowFooter}
          />
        </BaseFlexDiv>
      )}
      <CheckboxDiv flexDir="row">
        {props.valueButtons && (
          <CounterButton onClick={() => setValue(value - 1)}>-</CounterButton>
        )}

        {checkboxArray.map((checked, index) => (
          <CheckBox
            index={index}
            clickCallback={props.valueButtons ? undefined : handleCheckboxClick}
            checked={checked}
            highlight={props.checkHighlights?.includes(index + 1)}
            {...props}
          />
        ))}

        {props.valueButtons && (
          <CounterButton onClick={() => setValue(value + 1)}>+</CounterButton>
        )}
      </CheckboxDiv>
      {props.descFooter && showFooter && <DescFooter>{props.descFooter}</DescFooter>}
    </OuterContainer>
  )
}
const OuterContainer = styled(BaseFlexDiv)`
  margin-bottom: 10px;
`

const Label = styled.span`
  font-size: 16px;
  font-weight: bold;
`

const DescFooter = styled.div`
  font-size: 14px;
`

const CheckboxDiv = styled(BaseFlexDiv)`
  margin: 5px 0;
  font-size: 4vw;
  /* TODO: standardize these screen size breakpoints across the tracker app */
  @media (min-width: 600px) {
    font-size: 30px;
  }
`
/* TODO: implement this */
const HideTooltipButton = styled.div``
