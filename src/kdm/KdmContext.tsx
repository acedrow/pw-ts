import * as React from 'react'
import { CardData, GearCardData, ARMOR_LOC } from './gearCard/CardData'
import { useState, useEffect, SyntheticEvent } from 'react'

interface KdmContext {
  cardLongPressHandler: (cardData: CardData) => void
  cardShortPressHandler: (cardData: CardData) => void
  gearCardToDisplay: GearCardData
}

const context = {} as KdmContext
export const KdmContext = React.createContext<KdmContext>(context)

export const KdmContextProvider = (props: any) => {
  const [gearCardTarget, setGearCardTarget] = useState<CardData>(new CardData())
  const [gearCardSource, setGearCardSource] = useState<CardData>(new CardData())
  const [gearCardToDisplay, setCardToDisplay] = useState<GearCardData>(
    new GearCardData('', ARMOR_LOC.NONE, [], [], [])
  )

  useEffect(() => {
    console.log(`gearCardToDisplay name: ${gearCardToDisplay.cardName}`)
  }, [gearCardToDisplay])

  const gearCardInteraction = (cardData: CardData, setTarget: boolean) => {
    if (setTarget) {
      setGearCardTarget({ ...cardData, isSelected: true })
    } else {
      setGearCardSource({ ...cardData, isSelected: true })
    }
    cardData.setCardData({ ...cardData, isSelected: true })
  }

  const cardShortPressHandler = (cardData: CardData) => {
    if (cardData.isSelected) {
      cardData.setCardData({ ...cardData, isSelected: false })
      clearCardContextData()
      return
    }
    if (gearCardSource.isSelected && !gearCardTarget.isSelected) {
      gearCardInteraction(cardData, true)
      return
    }
    if (!gearCardSource.isSelected && gearCardTarget.isSelected) {
      gearCardInteraction(cardData, false)

      return
    }
    setCardToDisplay(cardData.gameData)
  }

  const cardLongPressHandler = (cardData: CardData) => {
    console.log(
      `target: ${gearCardTarget.gameData.cardName} source: ${gearCardSource.gameData.cardName} `
    )
    if (cardData.isSelected) {
      cardData.setCardData({ ...cardData, isSelected: false })
      clearCardContextData()
      return
    }

    if (cardData.isSource) {
      gearCardInteraction(cardData, false)
      return
    } else {
      if (cardData.gameData.isEmpty()) {
        gearCardInteraction(cardData, true)
      } else {
        if (!gearCardTarget.isSelected && gearCardSource.isSelected) {
          gearCardInteraction(cardData, true)
        } else if (gearCardTarget.isSelected && !gearCardSource.isSelected) {
          gearCardInteraction(cardData, false)
        } else if (!gearCardTarget.isSelected && !gearCardSource.isSelected) {
          gearCardInteraction(cardData, false)
        }
      }
    }
  }

  useEffect(() => {
    if (gearCardTarget.isSelected && gearCardSource.isSelected) {
      swapCardValues()
      clearCardContextData()
    }
  }, [gearCardTarget, gearCardSource])

  //TODO: Method to actually swap card values
  const swapCardValues = () => {
    console.log('swap card values')
    const tempCardData: CardData = { ...gearCardSource }
    if (!gearCardSource.isSource) {
      gearCardSource.setCardData({
        ...gearCardTarget,
        setCardData: gearCardSource.setCardData,
        isSelected: false,
      })
    }
    gearCardTarget.setCardData({
      ...tempCardData,
      setCardData: gearCardTarget.setCardData,
      isSelected: false,
    })
  }

  const clearCardContextData = () => {
    setGearCardSource(new CardData())
    setGearCardTarget(new CardData())
  }

  return (
    <KdmContext.Provider
      value={{
        cardLongPressHandler: cardLongPressHandler,
        cardShortPressHandler: cardShortPressHandler,
        gearCardToDisplay,
      }}
    >
      {props.children}
    </KdmContext.Provider>
  )
}
