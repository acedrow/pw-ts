import { GameData, CardData } from './CardData'
import { useState, useContext, useEffect } from 'react'
import * as React from 'react'
import styled from 'styled-components'
import { CardContext } from '../CardContext'

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
    setCardData(thisCardData);
  },[])

  //TODO: testing delete
  useEffect(() => {
   // console.log('CARD DATA: ' + JSON.stringify(cardData))
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
      <span>{cardData.gameData.cardName}</span>

    </GearCardSquare>
  )
}

const GearCardSquare = styled.div<{ borderVal: string }>`
  background-color: beige;
  border: ${(props) => props.borderVal};
  height: 100px;
  width: 100px;
`
