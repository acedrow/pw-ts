import { PIP_RED, PIP_GREEN, PIP_BLUE } from '../../pw/components/styling/color'
import { CRAFT_MAT } from '../data/gear/craftingMaterials'
export enum ARMOR_LOC {
  ARMS = 'arms',
  LEGS = 'legs',
  HEAD = 'head',
  TORSO = 'torso',
  WAIST = 'waist',
  NONE = 'none',
}

export enum AFF_POS {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
}

export const AFFINITY_COLOR = {
  RED: PIP_RED,
  BLUE: PIP_BLUE,
  GREEN: PIP_GREEN,
}

export interface Affinity {
  position: AFF_POS
  color: string
}

export interface WeaponStats {
  activationCost: number
  speed: number
  accuracy: number
  strength: number
}

export class CraftingCost {
  craftMat: CRAFT_MAT
  quantity: number

  constructor(
    craftMat: CRAFT_MAT,
    quantity: number,
  ){
    this.craftMat = craftMat;
    this.quantity = quantity;
  }
}

/* 
Gear emojis:
armor: 👒 ✋ 🦵 🥋 waist will use belt clip art
weapons: 🗡️ 🔪 🛡️ 🏹
*/

export class GearCardData {
  cardName: string
  armorLocation: ARMOR_LOC
  keywords: string[]
  specialRules: string[]
  affinities: Affinity[]
  weaponStats?: WeaponStats
  craftingCost?: CraftingCost[]

  constructor(
    cardName: string,
    armorLocation: ARMOR_LOC,
    keywords: string[],
    specialRules: string[],
    affinities: Affinity[],
    weaponStats?: WeaponStats,
    craftingCost?: CraftingCost[]
  ) {
    this.cardName = cardName
    this.armorLocation = armorLocation
    this.keywords = keywords
    this.specialRules = specialRules
    this.affinities = affinities
    this.weaponStats = weaponStats
    this.craftingCost = craftingCost
  }

  //TODO: test me!
  isEmpty() {
    if (
      (!this.cardName || this.cardName === '') &&
      this.armorLocation == ARMOR_LOC.NONE &&
      this.keywords.length === 0 &&
      this.specialRules.length === 0 &&
      this.affinities.length === 0 &&
      !this.weaponStats &&
      !this.craftingCost
    )
      return true
    return false
  }
}

export class CardData {
  isSource: boolean
  gameData: GearCardData
  setCardData: (cardData: CardData) => void
  isSelected: boolean

  constructor(
    isSource?: boolean,
    gameData?: GearCardData,
    setCardData?: (cardData: CardData) => void,
    isSelected?: boolean
  ) {
    this.isSource = isSource ? isSource : false
    this.gameData = gameData
      ? gameData
      : new GearCardData('', ARMOR_LOC.NONE, [], [], [])
    this.setCardData = setCardData ? setCardData : () => {console.error('undefined setCardData')}
  }
}
