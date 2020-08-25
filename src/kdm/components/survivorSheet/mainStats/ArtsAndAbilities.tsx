import { StatsSectionContainer } from './StatsSectionContainer'
import React from 'react'
import { UnderlineTextArea, BaseFlexDiv } from '../_common/CommonStyled'

export default () => {
  return (
    <StatsSectionContainer
      title={'Arts and Abilities'}
      bottomBorder={true}
      collapsible={true}
    >
      <BaseFlexDiv flexDir={'row'}>
        <UnderlineTextArea rows={1}> TEST AREA! </UnderlineTextArea>
      </BaseFlexDiv>
    </StatsSectionContainer>
  )
}
