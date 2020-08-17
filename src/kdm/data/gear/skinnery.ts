import {
  GearCardData,
  ARMOR_LOC,
  AFF_POS,
  AFFINITY_COLOR,
  CraftingCost,
} from './CardData'
import { CRAFT_MAT } from './craftingMaterials'

export const SKINNERY_GEAR_DATA = new Map<string, GearCardData>([
  [
    'bandages',
    new GearCardData(
      'Bandages',
      ARMOR_LOC.NONE,
      ['item'],
      [
        'Activation: Remove up to 2 bleeding tokens from yourself or an adjacent survivor.',
      ],
      [
        { position: AFF_POS.BOTTOM, color: AFFINITY_COLOR.GREEN },
        { position: AFF_POS.LEFT, color: AFFINITY_COLOR.BLUE },
      ],
      undefined,
      [new CraftingCost(CRAFT_MAT.HIDE, 1)]
    ),
  ],
  [
    'rawhide headband',
    new GearCardData(
      'Rawhide Headband',
      ARMOR_LOC.HEAD,
      ['armor', 'set', 'rawhide'],
      ['Affinity Bonus'],
      [{ position: AFF_POS.BOTTOM, color: AFFINITY_COLOR.BLUE }],
      undefined,
      [new CraftingCost(CRAFT_MAT.HIDE, 1)]
    ),
  ],
])
