import {
  GearCardData,
  ARMOR_LOC,
  AFF_POS,
  AFFINITY_COLOR,
  CRAFT_MAT,
} from '../../gearCard/CardData'

export const skinneryGearData: GearCardData[] = [
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
    [{ craftMat: CRAFT_MAT.HIDE, quantity: 1 }]
  ),
  new GearCardData(
    'Rawhide Headband',
    ARMOR_LOC.HEAD,
    ['armor', 'set', 'rawhide'],
    ['Affinity Bonus'],
    [{ position: AFF_POS.BOTTOM, color: AFFINITY_COLOR.BLUE }],
    undefined,
    [{ craftMat: CRAFT_MAT.HIDE, quantity: 1 }]
  ),
]
