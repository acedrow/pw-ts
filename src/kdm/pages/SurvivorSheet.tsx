import * as React from "react"
import { GearCard } from "../gearCard/GearCard"
import { CardData } from "../gearCard/CardData"
import { GEAR_LIST } from "../data/gear/gearList"

export const SurvivorSheet = () => {
  return (
    <>
    <GearCard
    cardData={new CardData(false, GEAR_LIST.get('skinnery')[0], undefined, false)}
  ></GearCard>
      <GearCard
    cardData={new CardData(false, GEAR_LIST.get('skinnery')[1], undefined, false)}
  ></GearCard>
  </>
  )
}