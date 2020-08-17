import { GearCardData, ARMOR_LOC } from './CardData'
import { SKINNERY_GEAR_DATA } from './skinnery'
import { CATARIUM_GEAR_DATA } from './catarium';


export const getGearCard = (settlementLoc : string, gearName: string) : GearCardData  => {
  const toReturn = GEAR_LIST.get(settlementLoc)?.get(gearName);
  return toReturn ? toReturn : new GearCardData('', ARMOR_LOC.NONE, [], [], [])
}

export const getGearList = () => {
  return GEAR_LIST;
}

const GEAR_LIST = new Map<string, Map<string, GearCardData>>([
  ['skinnery', SKINNERY_GEAR_DATA],
  ['catarium', CATARIUM_GEAR_DATA]
])
