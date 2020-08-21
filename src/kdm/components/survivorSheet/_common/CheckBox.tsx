import React, { useState } from 'react'
import shortid from 'shortid'
import styled from 'styled-components'
import { BLOOD_RED } from '../../../../pw/components/styling/color'

export default (props: { highlight?: boolean; checked?: boolean}) => {
  const [checked, setChecked] = useState(props.checked || false)

  return (
    <Checkbox {...props}
    >
      {checked ? `☑` : `☐`}
    </Checkbox>
  )
}

const Checkbox = styled.span<{ highlight?: boolean }>`
  color: ${(props) => (props.highlight ? BLOOD_RED : 'white')};
  font-weight: ${(props) => (props.highlight ? 'bold' : 'normal')};
  width: 100%;
  align-items: center;
  justify-content: center;
  align-self: center;
`
