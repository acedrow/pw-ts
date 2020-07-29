import {
  GearCardData,
  ARMOR_LOC,
  AFF_POS,
  AFFINITY_COLOR,
  CraftingCost,
} from '../../gearCard/CardData'
import { CRAFT_MAT } from './craftingMaterials'

export const CATARIUM_GEAR_DATA = new Map<string, GearCardData>([
  [
    'cat gut bow',
    new GearCardData(
      'Cat Gut Bow',
      ARMOR_LOC.NONE,
      ['weapon', 'ranged', 'bow', 'two-handed'],
      [
        'Cumberson', 'Range 6', 'Aim', 'Aim: When you attack, before rolling to hit, you may reduce the speed of this weapon by 1 to gain +2 accuracy for that attack.'
      ],
      [
        { position: AFF_POS.BOTTOM, color: AFFINITY_COLOR.GREEN },
        { position: AFF_POS.LEFT, color: AFFINITY_COLOR.BLUE },
      ],
      undefined,
      [new CraftingCost(CRAFT_MAT.BONE, 1), new CraftingCost(CRAFT_MAT.SINEW, 1)]
    ),
  ],
])