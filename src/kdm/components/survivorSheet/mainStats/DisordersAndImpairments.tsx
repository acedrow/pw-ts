import React, { useContext, useEffect } from 'react'
import { disordersBaseGame } from '../../../data/cards/disorders/disorders-base-game'
import { KdmContext } from '../../../KdmContext'
import { BaseFlexDiv } from '../_common/CommonStyled'
import SelectGroup from '../_common/SelectGroup'
import { StatsSectionContainer } from './StatsSectionContainer'
import { TextCardData } from '../../../data/cards/TextCardData'

export default () => {
  const { currentSurvivor, setCurrentSurvivor } = useContext(KdmContext)

  const handleDisorderChange = (values: TextCardData[]) => {
    let tempSurvivor = currentSurvivor
    tempSurvivor.disorders = [...values]
    setCurrentSurvivor({...tempSurvivor})
  }

  return (
    <>
      <StatsSectionContainer
        title={'Disorders and Impairments'}
        bottomBorder={true}
        collapsible={true}
      >
        <BaseFlexDiv flexDir={'row'}>
          <SelectGroup
            rows={3}
            cardDeck={disordersBaseGame}
            currentValues={currentSurvivor?.disorders}
            valueChangeCallback={handleDisorderChange}
          />
        </BaseFlexDiv>
      </StatsSectionContainer>
    </>
  )
}
