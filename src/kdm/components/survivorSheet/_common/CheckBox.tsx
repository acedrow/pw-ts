import React, { useState, useEffect } from 'react'
import shortid from 'shortid'
import styled from 'styled-components'
import { BLOOD_RED } from '../../../../pw/components/styling/color'

export default (props: {
  index: number
  checked: boolean
  clickCallback?: (index: number) => void
  highlight?: boolean
  checkboxMargins?: boolean
}) => {
  const checkboxColor = props.highlight ? BLOOD_RED : 'white'

  return (
    <Checkbox
      color={checkboxColor}
      {...props}
      onClick={(e) => {
        console.log(`clicked`)
        if (props.clickCallback) {
          props.clickCallback(props.index)
        }
      }}
    ></Checkbox>
  )
}

const Checkbox = styled.div<{
  color: string
  checked: boolean
  checkboxMargins?: boolean
}>`
  min-width: 10px;
  min-height: 10px;
  width: 3.5vw;
  height: 3.5vw;
  max-height: 30px;
  max-width: 30px;
  margin: ${(props) => (props.checkboxMargins ? '0 2px' : 0)};

  background-color: ${(props) => (props.checked ? props.color : 'transparent')};
  border: 2px solid ${(props) => props.color};
`
