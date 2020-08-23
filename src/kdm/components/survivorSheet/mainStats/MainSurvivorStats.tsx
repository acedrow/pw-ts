import React from 'react'
import styled from 'styled-components'
import { KDM_DARK_GREY } from '../../../../pw/components/styling/color'
import { SurvivorData } from '../../../data/survivor/SurvivorData'
import HuntXp from './HuntXp'
import { StatsSectionContainer } from './StatsSectionContainer'
import SurvivalActions from './SurvivalActions'
import Defenses from './Defenses'

export default function (props: { survivorData: SurvivorData }) {
  return (
    //TODO: move statSectionContainers to HuntXp and the like
    <OuterContainer>
      <StatsSectionContainer
        title={props.survivorData.name}
        titleH1
        bottomBorder={true}
      />

      <StatsSectionContainer
        title={'Hunt XP'}
        bottomBorder={true}
        collapsible={true}
      >
        <HuntXp xpNumber={props.survivorData.xp}></HuntXp>
      </StatsSectionContainer>

      <StatsSectionContainer
        title={'Survival Actions'}
        bottomBorder={true}
        collapsible={true}
      >
        <SurvivalActions
          survivalActions={props.survivorData.actions || undefined}
        ></SurvivalActions>
      </StatsSectionContainer>

      <Defenses />

    </OuterContainer>

  )
}

const SurvivorStatsSection = styled.div``

const NameContainer = styled.div`
  font-size: 24px;
  font-weight: bold;
`

const OuterContainer = styled.div`
  background-color: ${KDM_DARK_GREY};
  font-size: 20px;
`
