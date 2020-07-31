import { GearCardData, CardData, AFFINITY_COLOR } from './CardData'
import { useState, useContext, useEffect, SyntheticEvent } from 'react'
import * as React from 'react'
import styled from 'styled-components'
import { KdmContext } from '../KdmContext'
import { AffinityPips } from './AffinityPips'
import {
  LIGHT_GREY,
  CARD_BACKGROUND,
  KDM_PAGE_BACKGROUND,
} from '../../pw/components/styling/color'
import useLongPress from '../../util/useLongPress'

export enum GEAR_CARD_DISPLAY_TYPE {
  SMALL_CARD = 'smallcard',
  LARGE_CARD = 'largecard',
  TEXT = 'text',
}

export const GearCard = (props: {
  cardData: CardData
  display?: GEAR_CARD_DISPLAY_TYPE
  clickable?: boolean
}) => {
  const { cardLongPressHandler, cardShortPressHandler } = useContext(KdmContext)
  const [cardData, setCardData] = useState<CardData>(new CardData())
  const display = props.display
    ? props.display
    : GEAR_CARD_DISPLAY_TYPE.SMALL_CARD
  const clickable = props.clickable !== undefined ? props.clickable : true
  console.log(`card ${cardData.gameData.cardName} clickable: ${clickable}`)

  const getBorderStyle = () => {
    if (cardData.isSelected) return '2px solid red'
    return `2px solid ${KDM_PAGE_BACKGROUND}`
  }

  //Initialize cardData stateful values
  useEffect(() => {
    const thisCardData: CardData = { ...props.cardData }
    thisCardData.setCardData = setCardData
    setCardData(thisCardData)
  }, [])

  const onLongPress = () => {
    if (clickable) {
      console.log('gearcard long press')
      cardLongPressHandler(cardData)
    }
  }

  const onClick = () => {
    if (clickable) {
      console.log('gearcard click')
      cardShortPressHandler(cardData)
    }
  }

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  }

  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions)

  return (
    <>
      {(display === GEAR_CARD_DISPLAY_TYPE.SMALL_CARD ||
        display === GEAR_CARD_DISPLAY_TYPE.LARGE_CARD) && (
        <CardViewContainer
          {...longPressEvent}
          borderVal={getBorderStyle()}
          displayLarge={
            display === GEAR_CARD_DISPLAY_TYPE.LARGE_CARD ? true : false
          }
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
          <AffinityPips
            affinities={cardData.gameData.affinities}
          ></AffinityPips>
        </CardViewContainer>
      )}

      {display === GEAR_CARD_DISPLAY_TYPE.TEXT && (
        <TextViewContainer {...longPressEvent} borderVal={getBorderStyle()}>
          {cardData.gameData.cardName}
        </TextViewContainer>
      )}
    </>
  )
}

const SMALL_CARD_LENGTH = '33vw'
const LARGE_CARD_LENGTH = '50vw'

const CardViewContainer = styled.div<{
  borderVal: string
  displayLarge: boolean
}>`
  ::selection {
    background: gray;
  }
  display: grid;
  grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  background-color: ${CARD_BACKGROUND};
  border: ${(props) => props.borderVal};
  height: ${(props) =>
    props.displayLarge ? LARGE_CARD_LENGTH : SMALL_CARD_LENGTH};
  width: ${(props) =>
    props.displayLarge ? LARGE_CARD_LENGTH : SMALL_CARD_LENGTH};
`

const TextViewContainer = styled.div<{ borderVal: string }>`
  width: 100%;
  height: 100%;
  font-family: 'Roboto';
  border: ${(props) => props.borderVal};
`

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
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  grid-column-start: 2;
  grid-column-end: 10;
  grid-row-start: 2;
  grid-row-end: 10;
`
