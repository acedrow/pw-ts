export enum WEAPON_TYPE {
  NONE = 'none',
  AXE = 'axe',
  BOW = 'bow',
  CLUB = 'club',
  DAGGER = 'dagger',
  FIST_AND_TOOTH = 'fist & tooth',
  GRAND = 'grand',
  KATAN = 'katana',
  Katar = 'katar',
  SHIELD = 'shield',
  SPEAR = 'spear',
  SWORD = 'sword',
}

export const STARTING_WEAPON_STATS = { type: WEAPON_TYPE.NONE, level: 0 }

export interface Weapon {
  type: WEAPON_TYPE
  level: number
}
