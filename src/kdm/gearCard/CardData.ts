import { PIP_RED, PIP_GREEN, PIP_BLUE } from '../../pw/components/styling/color';
export enum ARMOR_LOCATION {
  ARMS = 'arms',
  LEGS = 'legs',
  HEAD = 'head',
  TORSO = 'torso',
  WAIST = 'waist',
  NONE = 'none',
}

export enum AFFINITY_POSITION {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
}

export interface AffinityColorObj {
  RED: string;
  BLUE: string;
  GREEN: string;
}

export const AFFINITY_COLOR : AffinityColorObj = {
  RED: PIP_RED,
  BLUE: PIP_BLUE,
  GREEN: PIP_GREEN,
}

export interface Affinity {
  position: AFFINITY_POSITION;
  color: string;
}

export interface WeaponStats {
  activationCost: number
  speed: number
  accuracy: number
  strength: number
}

export class GameData {
  cardName: string
  armorLocation: ARMOR_LOCATION
  keywords: string[]
  specialRules: string[]
  affinities: Affinity[]
  weaponStats?: WeaponStats

  constructor(
    cardName: string,
    armorLocation: ARMOR_LOCATION,
    keywords: string[],
    specialRules: string[],
    affinities: Affinity[],
    weaponStats?: WeaponStats
  ) {
    this.cardName = cardName
    this.armorLocation = armorLocation
    this.keywords = keywords
    this.specialRules = specialRules
    this.affinities = affinities
    this.weaponStats = weaponStats
  }

  //TODO: test me!
  isEmpty() {
    if (
      (!this.cardName || this.cardName === '') &&
      this.armorLocation == ARMOR_LOCATION.NONE &&
      this.keywords.length === 0 &&
      this.specialRules.length === 0 &&
      this.affinities.length === 0 &&
      !this.weaponStats
    )
      return true
    return false
  }
}

export class CardData {
  isSource: boolean
  gameData: GameData
  setCardData: (cardData: CardData) => void
  isSelected: boolean;
  setIsSelected: (selected: boolean) => void

  constructor(
    isSource?: boolean,
    gameData?: GameData,
    setCardData?: (cardData: CardData) => void,
    isSelected?: boolean,
  ) {
    this.isSource = isSource ? isSource : false
    this.gameData = gameData
      ? gameData
      : new GameData('', ARMOR_LOCATION.NONE, [], [], [])
    this.setCardData = setCardData
    this.isSelected = isSelected ? isSelected : false;
  }
}
