import * as React from 'react'
import { CardContextProvider } from '../../../kdm/CardContext'
import { GearCard } from '../../../kdm/gearCard/GearCard'
import {
  CardData,
  GameData,
  ARMOR_LOCATION,
  AFFINITY_POSITION,
  AFFINITY_COLOR,
} from '../../../kdm/gearCard/CardData'

export const GearGridTest = () => {

  const TEST_GAME_DATA = new GameData(
    'Lance of Longinus',
    ARMOR_LOCATION.TORSO,
    ['weapon', 'melee', 'spear', 'two-handed', 'bone'],
    ['Irreplaceable', 'Reach 2'],
    [
      { position: AFFINITY_POSITION.TOP, color: AFFINITY_COLOR.RED },
      { position: AFFINITY_POSITION.RIGHT, color: AFFINITY_COLOR.BLUE },
      { position: AFFINITY_POSITION.LEFT, color: AFFINITY_COLOR.GREEN },
      { position: AFFINITY_POSITION.BOTTOM, color: AFFINITY_COLOR.RED },
    ],
    { activationCost: 1, speed: 2, accuracy: 6, strength: 9 }
  )

  return (
    <CardContextProvider>
      <div>
        <GearCard cardData={new CardData(false, TEST_GAME_DATA, undefined, false)}></GearCard>
        <GearCard cardData={new CardData()}></GearCard>
      </div>
    </CardContextProvider>
  )
}

// const TestTargetContainer = styled.div`
//   position: relative;
//   border: 5px solid red;
//   height: 100px;
//   width: 100px;
// `