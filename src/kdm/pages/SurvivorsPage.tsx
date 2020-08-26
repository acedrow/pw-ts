import * as React from 'react'
import { GearCard, GEAR_CARD_DISPLAY_TYPE } from '../components/gearCard/GearCard'
import {
  CardData,
  GearCardData,
  ARMOR_LOC,
  AFF_POS,
  AFFINITY_COLOR,
  CraftingCost,
} from '../data/gear/CardData'
import { getGearCard } from '../data/gear/gearList'
import { CRAFT_MAT } from '../data/gear/craftingMaterials'
import { Survivor, Demographics, getStartingSurvivor } from '../data/survivor/SurvivorData';
import MainSurvivorStats from '../components/survivorSheet/mainStats/MainSurvivorStats'
import styled from 'styled-components'
import { KdmContext } from '../KdmContext';

export const SurvivorsPage = () => {
  const { currentSurvivor, setCurrentSurvivor } = React.useContext(KdmContext)

  const TEST_GEAR_DATA = new GearCardData(
    'Arse of Destruction',
    ARMOR_LOC.NONE,
    ['weapon', 'ranged', 'bow', 'two-handed'],
    [
      'Cumberson',
      'Range 6',
      'Aim',
      'Aim: When you attack, before rolling to hit, you may reduce the speed of this weapon by 1 to gain +2 accuracy for that attack.',
    ],
    [
      { position: AFF_POS.BOTTOM, color: AFFINITY_COLOR.GREEN },
      { position: AFF_POS.LEFT, color: AFFINITY_COLOR.BLUE },
    ],
    undefined,
    [new CraftingCost(CRAFT_MAT.BONE, 1), new CraftingCost(CRAFT_MAT.SINEW, 1)]
  )

  const TEST_SURVIVOR_DATA = getStartingSurvivor('Jefferson', false);
  
  React.useEffect(() => {
    setCurrentSurvivor(TEST_SURVIVOR_DATA)
  },[])

  return (
    <OuterDiv className="KdmTracker">
      <MainSurvivorStats currentSurvivor={currentSurvivor} />
      <GearCard
        display={GEAR_CARD_DISPLAY_TYPE.LARGE_CARD}
        clickable={false}
        cardData={
          //new CardData(false, getGearCard('skinnery', 'bandages'), undefined)
          new CardData(false, TEST_GEAR_DATA, undefined)
        }
      ></GearCard>
      <GearCard
        cardData={
          new CardData(
            false,
            //getGearCard('skinnery', 'rawhide headband'),
            TEST_GEAR_DATA,
            undefined
          )
        }
      ></GearCard>
    </OuterDiv>
  )
}

const OuterDiv = styled.div``
