import { TextCardData } from '../cards/TextCardData'
import { Experiences, startingExperiences } from './ExperiencesData'
import { Weapon, WEAPON_TYPE, STARTING_WEAPON_STATS } from './WeaponData';
import SurvivalActions from '../../components/survivorSheet/sections/SurvivalActions'
import { Condition, STARTING_CONDITION } from './Condition';


export interface Demographics {
  firstname: string
  female: boolean
  lastname?: string
  nickname?: string
}

export interface Attributes {
  movement: number
  accuracy: number
  strength: number
  evasion: number
  luck: number
  speed: number
}

const startingAttributes = {
  movement: 5,
  accuracy: 0,
  strength: 0,
  evasion: 0,
  luck: 0,
  speed: 0,
}

export interface SurvivalActions {
  dodge: boolean
  encourage: boolean
  surge: boolean
  dash: boolean
  endure: boolean
}

export const startingSurvivalActions = {
  dodge: true,
  encourage: false,
  surge: false,
  dash: false,
  endure: false,
}

export class Survivor {
  demographics: Demographics
  attributes: Attributes
  experiences: Experiences // 16 xp slots, age at 2, 6, 10, 15, retirement @ 16
  actions: SurvivalActions
  weapon: Weapon
  condition: Condition;
  disorders: TextCardData[]

  //TODO: add disorders here - need to use getters and setters where necessary to enforce 3 limit for FAs and disorders

  constructor(
    demographics: Demographics,
    attributes: Attributes | undefined,
    experiences: Experiences | undefined,
    weapon: Weapon | undefined,
    actions: SurvivalActions | undefined,
    condition: Condition | undefined,
    disorders: TextCardData[] | undefined,
  ) {
    this.demographics = demographics
    this.attributes = attributes || startingAttributes
    this.experiences = experiences || startingExperiences
    this.weapon = weapon || STARTING_WEAPON_STATS
    this.actions = actions || startingSurvivalActions
    this.condition = condition || STARTING_CONDITION
    this.disorders = disorders || []
  }

  // get disorders() {
  //   return this._disorders
  // }

  // set disorders(newDisorders: TextCardData[]) {
  //   if (newDisorders && newDisorders.length > 3) {
  //     console.error('Error: Cannot set more than 3 disorders')
  //     return
  //   }
  //   this._disorders = newDisorders
  // }
}
export const getStartingSurvivor = (
  firstName: string,
  female: boolean
): Survivor => {
  return new Survivor(
    {
      firstname: firstName,
      female: female,
    },
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  )
}

export const getSurvivorName = (demo: Demographics) => {
  return `${demo.firstname}${demo.nickname ? ` \"${demo.nickname}\"` : ``}${
    demo.lastname ? ` ${demo.lastname}` : ``
  }`
}
