import * as React from "react"
import { GearCard } from "../gearCard/GearCard"
import { CardData } from "../gearCard/CardData"
import { getGearCard } from "../data/gear/gearList"

export const SurvivorSheet = () => {
  return (
    <>
    <GearCard
    cardData={new CardData(false,getGearCard('skinnery', 'bandages'), undefined, false)}
  ></GearCard>
      <GearCard
    cardData={new CardData(false, getGearCard('skinnery', 'rawhide headband'), undefined, false)}
  ></GearCard>
  </>
  )
}