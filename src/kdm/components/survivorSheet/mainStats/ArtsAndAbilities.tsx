import { StatsSectionContainer } from './StatsSectionContainer'
import React from 'react'
import { TextAreaDiv, UnderlineTextArea } from '../_common/CommonStyled'

export default () => {
  return (
    <StatsSectionContainer
      title={'Arts and Abilities'}
      bottomBorder={true}
      collapsible={true}
    >
      <TextAreaDiv>
        <UnderlineTextArea rows={1}> TEST AREA! </UnderlineTextArea>
      </TextAreaDiv>
    </StatsSectionContainer>
  )
}
