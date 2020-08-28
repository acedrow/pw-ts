export const startingExperiences: Experiences = {
  huntXp: 0,
  courage: {
    value: 0,
    stalwart: false,
    prepared: false,
    matchmaker: false,
  },
  understanding: {
    value: 0,
    analyze: false,
    explore: false,
    tinker: false,
  },
}

export interface Experiences {
  huntXp: number
  courage: Courage
  understanding: Understanding
}

export interface Courage {
  value: number
  stalwart: boolean
  prepared: boolean
  matchmaker: boolean
}

export interface Understanding {
  value: number
  analyze: boolean
  explore: boolean
  tinker: boolean
}

export enum XP_TYPE {
  HUNT = 'huntxp',
  COURAGE = 'courage',
  UNDERSTANDING = 'understanding',
}
