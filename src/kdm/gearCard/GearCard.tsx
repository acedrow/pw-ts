import { GameData, CardData, AFFINITY_COLOR } from './CardData'
import { useState, useContext, useEffect } from 'react'
import * as React from 'react'
import styled from 'styled-components'
import { CardContext } from '../CardContext'
import { AffinityPips } from './AffinityPips'
import { LIGHT_GREY, CARD_BACKGROUND } from '../../pw/components/styling/color'

export const GearCard = (props: { cardData: CardData }) => {
  const { cardInteractionHandler } = useContext(CardContext)
  const [cardData, setCardData] = useState<CardData>(new CardData())

  const getBorderStyle = () => {
    if (cardData.isSelected) return '2px solid red'
    return '2px solid black'
  }

  //Initialize cardData stateful values
  useEffect(() => {
    const thisCardData: CardData = { ...props.cardData }
    thisCardData.setCardData = setCardData
    setCardData(thisCardData)
  }, [])

  //TODO: testing delete
  useEffect(() => {
    console.log('CARD DATA: ' + JSON.stringify(cardData))
  }, [cardData])

  return (
    <GearCardSquare
      onClick={() => {
        console.log(`Gear Card ${cardData.gameData.cardName} clicked`)
        cardInteractionHandler(cardData)
      }}
      onTouchStart={() => {
        console.log(`Gear Card ${cardData.gameData.cardName} clicked`)
        cardInteractionHandler(cardData)
      }}
      borderVal={getBorderStyle()}
    >
      <CardDataHolder id="cardDataHolder">
        <CardTitle>{cardData.gameData.cardName}</CardTitle>
        {cardData.gameData.weaponStats && (
          <WeaponStatsHolder>
            <WeaponStatBubble shaded={false} gridCol={1}>
              {cardData.gameData.weaponStats.speed}
            </WeaponStatBubble>
            <WeaponStatBubble shaded={true} gridCol={2}>
              {cardData.gameData.weaponStats.accuracy}+
            </WeaponStatBubble>
            <WeaponStatBubble shaded={true} gridCol={3}>
              {cardData.gameData.weaponStats.strength}
            </WeaponStatBubble>
          </WeaponStatsHolder>
        )}
      </CardDataHolder>
      <AffinityPips affinities={cardData.gameData.affinities}></AffinityPips>
    </GearCardSquare>
  )
}

const WeaponStatBubble = styled.div<{ shaded: boolean; gridCol: number }>`
  text-align: center;
  height: 100%;
  border-radius: 100%;
  border: 1px solid black;
  grid-column-start: ${(props) => props.gridCol};
  grid-column-end: ${(props) => props.gridCol};
  background-color: ${(props) => (props.shaded ? LIGHT_GREY : 'white')};
`

const WeaponStatsHolder = styled.div`
  margin-top: 5px;
  font-size: 12px;
  width: 100%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 100%;
`

const CardTitle = styled.span`
  font-weight: 800;
  margin-top: -5px;
  font-size: 12px;
  text-align: center;
`

const CardDataHolder = styled.div`
  font-family: 'Recursive';
  display: flex;
  flex-direction: column;
  grid-column-start: 2;
  grid-column-end: 10;
  grid-row-start: 2;
  grid-row-end: 10;
`

const GearCardSquare = styled.div<{ borderVal: string }>`
  display: grid;
  grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  background-color: ${CARD_BACKGROUND};
  border: ${(props) => props.borderVal};
  height: 100px;
  width: 100px;
`
