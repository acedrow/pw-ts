import React from 'react'
import { SurvivorData } from '../../../data/survivor/SurvivorData'
import HuntXp from './HuntXp/HuntXp'
import SurvivalActions from './SurvivalActions'
import styled from 'styled-components'
import { KDM_DARK_GREY } from '../../../../pw/components/styling/color'
import StatsOuterContainer from './StatsOuterContainer'
import { StatsSectionContainer } from './StatsSectionContainer'

export default function (props: { survivorData: SurvivorData }) {
  return (
    <OuterContainer>
      <StatsSectionContainer
        title={props.survivorData.name}
        titleH1
        bottomBorder={true}
      />

      <StatsSectionContainer title={'Hunt XP'} bottomBorder={true}>
        <HuntXp xpNumber={props.survivorData.xp}></HuntXp>
      </StatsSectionContainer>

      <StatsSectionContainer title={'Survival Actions'} bottomBorder={true}>
        <SurvivalActions
          survivalActions={props.survivorData.actions || undefined}
        ></SurvivalActions>
      </StatsSectionContainer>
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
