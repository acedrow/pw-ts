import React from 'react'
import styled from 'styled-components'

export default (props: {
  children: React.ReactNode
  tooltipOpen: boolean
  setTooltipOpen: (open: boolean) => void
  startsOpen?: boolean
}) => {
  const isDetatached = !!(props.tooltipOpen && props.setTooltipOpen) || false


  return (
    <OuterContainer>
      {props.tooltipOpen && <TooltipContainer>{props.children}</TooltipContainer>}
    </OuterContainer>
  )
}

const OuterContainer = styled.div``

const TooltipContainer = styled.div``
