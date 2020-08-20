import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  BLOOD_RED,
  KDM_DARK_GREY,
} from '../../../../pw/components/styling/color'
import _ from 'lodash'


interface CheckboxProps {
  value: number;
  maxValue: number;
  descFooter?: JSX.Element
  checkHighlights?: number[]
}

export default (props: CheckboxProps) => {
  const [value, setValue] = useState(props.value -1 < 0 ? -1 : props.value - 1 )
  const [checkBoxArray, setCheckBoxArray] = useState<boolean[]>([])

  useEffect(() => {
    let checkboxes: boolean[] = []
    _.times(props.maxValue, (i) => {
      checkboxes.push(i > value ? false : true)
    })
    setCheckBoxArray([...checkboxes])
  }, [value])

  return (
    <OuterDiv>
      <TrackerDiv>
        {/* <LabelDiv>Hunt XP:</LabelDiv> */}
        <CheckboxDiv>
          {checkBoxArray.map((checked, index) => {
            let highlight = false
            if (props.checkHighlights?.includes(index)) highlight = true
            return (
              <>
                &nbsp;
                <Checkbox highlight={highlight} key={index}>
                  {checked ? `☑` : `☐`}
                </Checkbox>
              </>
            )
          })}
        </CheckboxDiv>
        <ControlsDiv>
          <CounterButton onClick={() => setValue(value + 1)}>+</CounterButton>
          <CounterButton onClick={() => setValue(value - 1)}>-</CounterButton>
        </ControlsDiv>
      </TrackerDiv>
      {props.descFooter && <DescFooter>{props.descFooter}</DescFooter>}
    </OuterDiv>
  )
}

const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const DescFooter = styled.div`
  font-size: 16px;
`

const TrackerDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`


const CheckboxDiv = styled.div`
  font-size: 5vw;
  @media (min-width: 600px) {
    font-size: 30px;
  }
  margin-left: 5px;
  display: flex;
  flex-direction: row;
`
const Checkbox = styled.span<{ highlight?: boolean }>`
  color: ${(props) => (props.highlight ? BLOOD_RED : 'white')};
  font-weight: ${(props) => (props.highlight ? 'bold' : 'normal')};
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
