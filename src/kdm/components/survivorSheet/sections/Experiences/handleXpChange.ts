import { XP_TYPE } from '../../../../data/survivor/ExperiencesData'
import { Survivor } from '../../../../data/survivor/SurvivorData'

export default (
  value: number,
  xpType: XP_TYPE,
  currentSurvivor: Survivor | undefined,
  setCurrentSurvivor: (survivor: Survivor) => void
) => {
  const calcNewValue = (input: number, current: number) => {
    if (input < current) {
      return current - 1
    }
    return current + 1
  }

  if (currentSurvivor) {
    let tempSurvivor = currentSurvivor
    let experiences = currentSurvivor.experiences
    console.log(
      `handleXpChange: value:${value}, survivor hunt xp: ${currentSurvivor.experiences.huntXp}`
    )
    switch (xpType) {
      case XP_TYPE.HUNT:
        experiences = {
          ...experiences,
          huntXp: calcNewValue(value, currentSurvivor.experiences.huntXp),
        }
        break
      case XP_TYPE.COURAGE:
        experiences = {
          ...experiences,
          courage: {
            ...experiences.courage,
            value: calcNewValue(
              value,
              currentSurvivor.experiences.courage.value
            ),
          },
        }
        break
      case XP_TYPE.UNDERSTANDING:
        experiences = {
          ...experiences,
          understanding: {
            ...experiences.understanding,
            value: calcNewValue(
              value,
              currentSurvivor.experiences.understanding.value
            ),
          },
        }
        break
    }

    tempSurvivor.experiences = experiences
    setCurrentSurvivor({ ...tempSurvivor })
  } else {
    console.error('Error handling experience change: no current survivor')
  }
}
