import { TextCardData } from '../cards/TextCardData'
import { Experiences, startingExperiences } from './ExperiencesData'

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

export const enum DEFENSE_NAME {
  BRAIN = 'brain',
  HEAD = 'head',
  ARMS = 'arms',
  LEGS = 'legs',
  BODY = 'body',
  WAIST = 'waist',
}

export interface DefenseType {
  name: DEFENSE_NAME
  value: number
  checkBoxes: boolean[]
}

const BLANK_DEFENSE_STATS: DefenseType[] = [
  { name: DEFENSE_NAME.BRAIN, value: 0, checkBoxes: [false] },
  { name: DEFENSE_NAME.HEAD, value: 0, checkBoxes: [false] },
  { name: DEFENSE_NAME.ARMS, value: 0, checkBoxes: [false, false] },
  { name: DEFENSE_NAME.LEGS, value: 0, checkBoxes: [false, false] },
  { name: DEFENSE_NAME.BODY, value: 0, checkBoxes: [false, false] },
  { name: DEFENSE_NAME.WAIST, value: 0, checkBoxes: [false, false] },
]

export class Survivor {
  demographics: Demographics
  attributes: Attributes
  experiences: Experiences // 16 xp slots, age at 2, 6, 10, 15, retirement @ 16
  actions: SurvivalActions
  insanity: number
  defenseStats: DefenseType[]
  disorders: TextCardData[]
  //TODO: add disorders here - need to use getters and setters where necessary to enforce 3 limit for FAs and disorders

  constructor(
    demographics: Demographics,
    attributes: Attributes | undefined,
    experiences: Experiences | undefined,
    insanity: number,
    actions: SurvivalActions | undefined,
    defenseStats: DefenseType[] | undefined,
    disorders: TextCardData[] | undefined,
  ) {
    this.demographics = demographics
    this.attributes = attributes || startingAttributes
    this.experiences = experiences || startingExperiences
    this.insanity = insanity
    this.actions = actions || startingSurvivalActions
    this.defenseStats = defenseStats || BLANK_DEFENSE_STATS
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
    5,
    undefined,
    undefined, 
    undefined,
  )
}

export const getSurvivorName = (demo: Demographics) => {
  return `${demo.firstname}${demo.nickname ? ` \"${demo.nickname}\"` : ``}${
    demo.lastname ? ` ${demo.lastname}` : ``
  }`
}
