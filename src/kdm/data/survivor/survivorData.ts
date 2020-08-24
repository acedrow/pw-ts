import { BLANK_DEFENSE_STATS } from '../../components/survivorSheet/mainStats/Defenses'

export interface SurvivalActions {
  dodge: boolean
  encourage: boolean
  surge: boolean
  dash: boolean
  endure: boolean
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

export class SurvivorData {
  demographics: Demographics
  female: boolean
  xp: number // 16 xp slots, age at 2, 6, 10, 15, retirement @ 16
  actions: SurvivalActions | undefined
  insanity: number
  defenseStats: DefenseType[]

  constructor(
    demographics: Demographics,
    female: boolean,
    xp: number,
    insanity: number,
    actions: SurvivalActions | undefined,
    defenseStats: DefenseType[] | undefined
  ) {
    this.demographics = demographics
    this.female = female
    this.xp = xp
    this.insanity = insanity
    this.actions = actions || undefined
    this.defenseStats = defenseStats || BLANK_DEFENSE_STATS
  }
}

export interface Demographics {
  firstname: string
  female: boolean
  lastname?: string
  nickname?: string
}

export const getSurvivorName = (demo: Demographics) => {
  return `${demo.firstname}${demo.nickname ? ` \"${demo.nickname}\"` : ``}${
    demo.lastname ? ` ${demo.lastname}` : ``
  }`
}
