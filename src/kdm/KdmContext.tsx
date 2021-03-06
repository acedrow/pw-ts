import * as React from 'react'
import { useEffect, useState } from 'react'
import { ARMOR_LOC, CardData, GearCardData } from './data/gear/CardData'
import { Survivor, getStartingSurvivor } from './data/survivor/SurvivorData'
import { disordersBaseGame } from './data/cards/disorders/disorders-base-game'
import { TextCardData } from './data/cards/TextCardData'

interface KdmContext {
  viewWidth: number
  setViewWidth: (width: number) => void
  cardLongPressHandler: (cardData: CardData) => void
  cardShortPressHandler: (cardData: CardData) => void
  gearCardToDisplay: GearCardData
  currentSurvivor: Survivor
  setCurrentSurvivor: (survivorData: Survivor) => void
  disorderDeck: TextCardData[]
}

const context = {} as KdmContext
export const KdmContext = React.createContext<KdmContext>(context)

export const KdmContextProvider = (props: any) => {
  const [gearCardTarget, setGearCardTarget] = useState<CardData>(new CardData())
  const [gearCardSource, setGearCardSource] = useState<CardData>(new CardData())
  const [gearCardToDisplay, setCardToDisplay] = useState<GearCardData>(
    new GearCardData('', ARMOR_LOC.NONE, [], [], [])
  )
  const [viewWidth, setViewWidth] = useState(window.innerWidth)
  const [currentSurvivor, setCurrentSurvivor] = useState<Survivor>(
    getStartingSurvivor('', true)
  )
  //currently this only populates with base game, would need to add functionality for expansions.
  const [disorderDeck, setDisorderDeck] = useState<TextCardData[]>(
    disordersBaseGame
  )

  useEffect(() => {
    //console.log(`KDM CONTEXT CURRENT SURVIVOR:`)
    // console.log(
    //   `experience: ${JSON.stringify(
    //     currentSurvivor.experiences
    //   )}`
    // )
    
    // console.log(
    //   `disorders: ${JSON.stringify(
    //     currentSurvivor.disorders
    //   )}`
    // )

    // console.log(
    //   `defense: ${JSON.stringify(
    //     currentSurvivor.defenseStats
    //   )}`
    // )
  }, [currentSurvivor, setCurrentSurvivor])

  //TODO: move card interaction stuff to a separate handler class;
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
    if (
      gearCardSource.isSelected &&
      !gearCardTarget.isSelected &&
      !cardData.isSource
    ) {
      gearCardInteraction(cardData, true)
      return
    }
    if (
      !gearCardSource.isSelected &&
      gearCardTarget.isSelected &&
      !cardData.isSource
    ) {
      gearCardInteraction(cardData, false)

      return
    }
    setCardToDisplay(cardData.gameData)
  }

  const cardLongPressHandler = (cardData: CardData) => {
    if (cardData.isSelected) {
      cardData.setCardData({ ...cardData, isSelected: false })
      clearCardContextData()
      return
    }

    if (cardData.isSource) {
      //deselect existing source card so multiple aren't selected at once
      if (gearCardSource.isSelected)
        gearCardSource.setCardData({
          ...gearCardSource,
          isSelected: false,
        })
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
        viewWidth,
        setViewWidth,
        cardLongPressHandler: cardLongPressHandler,
        cardShortPressHandler: cardShortPressHandler,
        gearCardToDisplay,
        currentSurvivor,
        setCurrentSurvivor,
        disorderDeck,
      }}
    >
      {props.children}
    </KdmContext.Provider>
  )
}
