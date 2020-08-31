import { Select } from '@material-ui/core'
import React from 'react'
import { BaseFlexDiv } from '../_common/CommonStyled'
import { StatsSectionContainer } from './StatsSectionContainer'

export default () => {
  return (
    <StatsSectionContainer
      title={'Arts and Abilities'}
      bottomBorder={true}
      collapsible={true}
    >
      <BaseFlexDiv flexDir={'row'}>

      </BaseFlexDiv>
    </StatsSectionContainer>
  )
}
