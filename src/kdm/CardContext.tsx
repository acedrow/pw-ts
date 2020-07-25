import * as React from 'react'
import { CardData } from './gearCard/CardData'
import { useState } from 'react'

interface CardContext {
  cardInteractionHandler: (cardData: CardData) => void
}

const context = {} as CardContext
export const CardContext = React.createContext<CardContext>(context)

export const CardContextProvider = (props: any) => {
  const [gearCardTarget, setGearCardTarget] = useState<CardData>(new CardData())
  const [gearCardSource, setGearCardSource] = useState<CardData>(new CardData())

  const cardInteractionHandler = (cardData: CardData) => {
    if (cardData.isSource) {
      setGearCardSource({ ...cardData, isSelected: true })
    } else {
      if (cardData.gameData.isEmpty) {
        setGearCardTarget({ ...cardData, isSelected: true })
      } else {
        if (!gearCardTarget.isSelected && gearCardSource.isSelected) {
          setGearCardTarget({ ...cardData, isSelected: true })
        } else if (gearCardTarget.isSelected && !gearCardSource.isSelected) {
          setGearCardSource({ ...cardData, isSelected: true })
        } else clearCardContextData()
      }
    }
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
