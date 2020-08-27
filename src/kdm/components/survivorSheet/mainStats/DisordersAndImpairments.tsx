import React, { useContext } from 'react'
import { disordersBaseGame } from '../../../data/cards/disorders/disorders-base-game'
import { KdmContext } from '../../../KdmContext'
import { BaseFlexDiv } from '../_common/CommonStyled'
import SelectGroup from '../_common/SelectGroup'
import { StatsSectionContainer } from './StatsSectionContainer'


export default () => {
  const { currentSurvivor } = useContext(KdmContext)

  return (
    <StatsSectionContainer
      title={'Disorders and Impairments'}
      bottomBorder={true}
      collapsible={true}
    >
      <BaseFlexDiv flexDir={'row'}>
        <SelectGroup
          rows={3}
          cardDeck={disordersBaseGame}
          survivorHas={currentSurvivor?.disorders}
        />
      </BaseFlexDiv>
    </StatsSectionContainer>
  )
}
