import * as React from 'react'
import { GearCard, GEAR_CARD_DISPLAY_TYPE } from '../gearCard/GearCard';
import { CardData } from '../gearCard/CardData'
import { getGearCard } from '../data/gear/gearList'

export const SurvivorSheet = () => {
  return (
    <>
      <GearCard
       display ={GEAR_CARD_DISPLAY_TYPE.LARGE_CARD}
       clickable ={false}
        cardData={
          new CardData(false, getGearCard('skinnery', 'bandages'), undefined)
        }
      ></GearCard>
      <GearCard
        cardData={
          new CardData(
            false,
            getGearCard('skinnery', 'rawhide headband'),
            undefined,
            false
          )
        }
      ></GearCard>
    </>
  )
}
