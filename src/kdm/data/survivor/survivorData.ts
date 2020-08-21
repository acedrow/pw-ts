
export interface SurvivalActions {
  dodge: boolean
  encourage: boolean
  surge: boolean
  dash: boolean
  endure: boolean
}

export interface DefenseType {
  name: 'brain' | 'head' | 'arms' | 'legs' | 'body' | 'waist';
  value: number;
  checkBoxes: boolean[];
}


const BLANK_DEFENSE_STATS: DefenseType[] = [
    { name: 'brain', value: 0, checkBoxes: [false] },
    { name: 'head', value: 0, checkBoxes: [false] },
    { name: 'arms', value: 0, checkBoxes: [false, false] },
    { name: 'legs', value: 0, checkBoxes:  [false, false] },
    { name: 'body', value: 0, checkBoxes:  [false, false] },
    { name: 'waist', value: 0, checkBoxes:  [false, false] },
  ]




export class SurvivorData {
  name: string
  female: boolean
  xp: number // 16 xp slots, age at 2, 6, 10, 15, retirement @ 16
  actions: SurvivalActions | undefined
  insanity: number
  defenseStats:  DefenseType[]

  constructor(
    name: string,
    female: boolean,
    xp: number,
    insanity: number,
    actions: SurvivalActions | undefined,
    defenseStats:  DefenseType[] | undefined,

  ) {
    this.name = name;
    this.female = female;
    this.xp = xp;
    this.insanity = insanity;
    this.actions = actions || undefined
    this.defenseStats = defenseStats || BLANK_DEFENSE_STATS

  }
}
