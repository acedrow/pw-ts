
export interface SurvivalActions {
  dodge: boolean
  encourage: boolean
  surge: boolean
  dash: boolean
  endure: boolean
}

export class SurvivorData {
  name: string
  female: boolean
  xp: number // 16 xp slots, age at 2, 6, 10, 15, retirement @ 16
  actions: SurvivalActions | undefined
  insanity: number

  constructor(
    name: string,
    female: boolean,
    xp: number,
    insanity: number,
    actions?: SurvivalActions | undefined,
  ) {
    this.name = name;
    this.female = female;
    this.xp = xp;
    this.insanity = insanity;
    this.actions = actions || undefined

  }
}
