import { StatsSectionContainer } from './StatsSectionContainer'
import React from 'react'
import { UnderlineTextArea, BaseFlexDiv } from '../_common/CommonStyled'
import { Select } from '@material-ui/core'

export default () => {
  return (
    <StatsSectionContainer
      title={'Arts and Abilities'}
      bottomBorder={true}
      collapsible={true}
    >
      <BaseFlexDiv flexDir={'row'}>
        <Select>
          
        </Select>
      </BaseFlexDiv>
    </StatsSectionContainer>
  )
}
