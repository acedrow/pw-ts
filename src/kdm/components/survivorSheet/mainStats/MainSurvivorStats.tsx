import React from 'react'
import styled from 'styled-components'
import { KDM_DARK_GREY } from '../../../../pw/components/styling/color'
import {
  Survivor,
  getSurvivorName,
} from '../../../data/survivor/SurvivorData'
import HuntXp from './Experiences'
import { StatsSectionContainer } from './StatsSectionContainer'
import SurvivalActions from './SurvivalActions'
import Defenses from './Defenses'
import ArtsAndAbilities from './ArtsAndAbilities'
import DisordersAndImpairments from './DisordersAndImpairments'

export default function (props: { currentSurvivor: Survivor | undefined }) {
  return (
    //TODO: move statSectionContainers to HuntXp and the like - and add "section" to names of these classes
    //TODO: clicking on name gives options for surname and nickname
    //TODO: all should pull values from KDM context.currentSurvivor
    /*TODO: add quick display of: 
    - bleed tokens, 
    - XP, courage, understanding
    - actions (just list which actions are available), 
    - restrictions (skip next hunt, cannot use fighting arts, cannot spend survival) 
    - weapon proficiency level (and what)
    - WITH a modal to quickly change these values
    */

    <OuterContainer>
      {props.currentSurvivor && (
        <div>
          <StatsSectionContainer
            title={getSurvivorName(props.currentSurvivor.demographics)}
            titleH1
            bottomBorder={true}
            collapsible={false}
          />

          <StatsSectionContainer
            title={'Experience'}
            bottomBorder={true}
            collapsible={true}
          >
            <HuntXp/>
          </StatsSectionContainer>

          <StatsSectionContainer
            title={'Survival Actions'}
            bottomBorder={true}
            collapsible={true}
          >
            <SurvivalActions
              survivalActions={props.currentSurvivor.actions || undefined}
            ></SurvivalActions>
          </StatsSectionContainer>

          <ArtsAndAbilities />

          <DisordersAndImpairments />

          <Defenses />
        </div>
      )}
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
