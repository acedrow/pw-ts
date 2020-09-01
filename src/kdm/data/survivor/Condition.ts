export const enum DEFENSE_NAME {
  BRAIN = 'brain',
  HEAD = 'head',
  ARMS = 'arms',
  LEGS = 'legs',
  BODY = 'body',
  WAIST = 'waist',
}

export interface Condition {
  defenses: DefenseType[];
  bleed: number;
}

export interface DefenseType {
  name: DEFENSE_NAME
  value: number
  checkBoxes: boolean[]
}

const STARTING_DEFENSE_STATS: DefenseType[] = [
  { name: DEFENSE_NAME.BRAIN, value: 5, checkBoxes: [false] },
  { name: DEFENSE_NAME.HEAD, value: 0, checkBoxes: [false] },
  { name: DEFENSE_NAME.ARMS, value: 0, checkBoxes: [false, false] },
  { name: DEFENSE_NAME.LEGS, value: 0, checkBoxes: [false, false] },
  { name: DEFENSE_NAME.BODY, value: 0, checkBoxes: [false, false] },
  { name: DEFENSE_NAME.WAIST, value: 0, checkBoxes: [false, false] },
]

export const STARTING_CONDITION = {
  defenses: STARTING_DEFENSE_STATS,
  bleed: 0,
}