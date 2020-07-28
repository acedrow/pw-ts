import * as React from 'react'
import { CardData } from './gearCard/CardData'
import { useState, useEffect, SyntheticEvent } from 'react'

interface KdmContext {
  cardInteractionHandler: (cardData: CardData, event?: any) => void
}

const context = {} as KdmContext
export const KdmContext = React.createContext<KdmContext>(context)

export const KdmContextProvider = (props: any) => {
  const [gearCardTarget, setGearCardTarget] = useState<CardData>(new CardData())
  const [gearCardSource, setGearCardSource] = useState<CardData>(new CardData())

  const cardInteractionHandler = (
    cardData: CardData,
    event?: SyntheticEvent
  ) => {
    event.stopPropagation()
    event.preventDefault
    console.log(
      `target: ${gearCardTarget.gameData.cardName} source: ${gearCardSource.gameData.cardName} `
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
    <KdmContext.Provider value={{ cardInteractionHandler }}>
      {props.children}
    </KdmContext.Provider>
  )
}
