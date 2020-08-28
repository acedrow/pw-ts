import React from 'react'
import styled from 'styled-components'

interface DetatchedToggleProps {
  tooltipOpen: boolean
  setTooltipOpen: (open: boolean) => void
}

export default (props: DetatchedToggleProps) => {
  const handleClick = () => {
    console.log(`tooltipButtonClicked`)
    props.setTooltipOpen(!props.tooltipOpen)
  }

  return <Toggle onClick={() => handleClick()}>?</Toggle>
}

const Toggle = styled.button`
  border-radius: 100%;
  font-size: 12px;
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: 1px solid gray;
  color: white;
`
