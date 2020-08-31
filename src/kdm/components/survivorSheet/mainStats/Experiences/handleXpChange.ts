import { XP_TYPE } from '../../../../data/survivor/ExperiencesData'
import { Survivor } from '../../../../data/survivor/SurvivorData'

export default (
  value: number,
  xpType: XP_TYPE,
  currentSurvivor: Survivor | undefined,
  setCurrentSurvivor: (survivor: Survivor) => void,
) => {
  if (currentSurvivor) {
    let tempSurvivor = currentSurvivor
    let experiences = currentSurvivor.experiences

    switch (xpType) {
      case XP_TYPE.HUNT:
        experiences = { ...experiences, huntXp: value }
        break
      case XP_TYPE.COURAGE:
        experiences = {
          ...experiences,
          courage: { ...experiences.courage, value: value },
        }
        break
      case XP_TYPE.UNDERSTANDING:
        experiences = {
          ...experiences,
          understanding: { ...experiences.understanding, value: value },
        }
        break
    }

    tempSurvivor.experiences = experiences
    setCurrentSurvivor({ ...tempSurvivor })
  } else {
    console.error('Error handling experience change: no current survivor')
  }
}
