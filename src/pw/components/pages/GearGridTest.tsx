import { useState } from "react"
import * as React from "react"
import styled from "styled-components"

export const GearGridTest = () => {
  //TODO: remove, testing only
  const [pageX, setPageX] = useState(0)
  const [pageY, setPageY] = useState(0)

  return (
    <div>
      <TestTargetContainer>


      </TestTargetContainer>
    </div>
  )
}

const TestTargetContainer = styled.div`
  position: relative;
  border: 5px solid red;
  height: 100px;
  width: 100px;
`
