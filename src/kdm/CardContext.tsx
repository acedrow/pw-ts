import * as React from 'react'
import { CardData } from './gearCard/CardData'
import { useState, useEffect } from 'react'

interface CardContext {
  cardInteractionHandler: (cardData: CardData) => void
}

const context = {} as CardContext
export const CardContext = React.createContext<CardContext>(context)

export const CardContextProvider = (props: any) => {
  const [gearCardTarget, setGearCardTarget] = useState<CardData>(new CardData())
  const [gearCardSource, setGearCardSource] = useState<CardData>(new CardData())

  const cardInteractionHandler = (cardData: CardData) => {
    console.log(
      `target: ${gearCardTarget.gameData.cardName} source: ${gearCardSource.gameData.cardName}`
    )
    if (cardData.isSelected) {
      cardData.setCardData({ ...cardData, isSelected: false })
      clearCardContextData()
      return
    }

    if (cardData.isSource) {
      setGearCardSource({ ...cardData, isSelected: true })
      cardData.setCardData({ ...cardData, isSelected: true })
      return
    } else {
      if (cardData.gameData.isEmpty()) {
        setGearCardTarget({ ...cardData, isSelected: true })
        cardData.setCardData({ ...cardData, isSelected: true })
      } else {
        if (!gearCardTarget.isSelected && gearCardSource.isSelected) {
          setGearCardTarget({ ...cardData, isSelected: true })
          cardData.setCardData({ ...cardData, isSelected: true })
        } else if (gearCardTarget.isSelected && !gearCardSource.isSelected) {
          setGearCardSource({ ...cardData, isSelected: true })
          cardData.setCardData({ ...cardData, isSelected: true })
        } else if (!gearCardTarget.isSelected && !gearCardSource.isSelected) {
          setGearCardSource({ ...cardData, isSelected: true })
          cardData.setCardData({ ...cardData, isSelected: true })
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
    gearCardSource.setCardData({
      ...gearCardTarget,
      setCardData: gearCardSource.setCardData,
      isSelected: false,
    })
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
    <CardContext.Provider value={{ cardInteractionHandler }}>
      {props.children}
    </CardContext.Provider>
  )
}
