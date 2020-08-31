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
  alwaysShowFooter?: boolean
  descFooter?: JSX.Element
  checkHighlights?: number[]
  valueButtons?: boolean
  checkboxMargins?: boolean
  changeCallback: (value: number) => void
}

export default (props: CheckboxProps) => {
  const [showFooter, setShowFooter] = useState(props.alwaysShowFooter || false)

  useEffect(() => {
    console.log(`xbox props value: ${props.value}`)
  }, [props.value])

  return (
    <OuterContainer flexDir="column">
      {props.label && (
        <BaseFlexDiv flexDir="row">
          <Label>{props.label}</Label>
          &nbsp;
          {!props.alwaysShowFooter && (
            <TooltipButton
              tooltipOpen={showFooter}
              setTooltipOpen={setShowFooter}
            />
          )}
        </BaseFlexDiv>
      )}

      <CheckboxDiv flexDir="row">
        {props.valueButtons && (
          <CounterButton onClick={() => props.changeCallback(props.value - 1)}>
            -
          </CounterButton>
        )}
        {_.times(props.maxValue, (index) => {
          return (
            <CheckBox
              index={index}
              clickCallback={
                props.valueButtons ? undefined : props.changeCallback
              }
              checked={index < props.value}
              highlight={props.checkHighlights?.includes(index + 1)}
              {...props}
            />
          )
        })}

        {props.valueButtons && (
          <CounterButton onClick={() => props.changeCallback(props.value + 1)}>
            +
          </CounterButton>
        )}
      </CheckboxDiv>
      {props.descFooter && (props.alwaysShowFooter || showFooter) && (
        <DescFooter>{props.descFooter}</DescFooter>
      )}
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
