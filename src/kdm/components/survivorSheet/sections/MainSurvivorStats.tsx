import React from 'react'
import styled from 'styled-components'
import { DARK_GREY } from '../../../../pw/components/styling/color'
import { Survivor, getSurvivorName } from '../../../data/survivor/SurvivorData'
import Experiences from './Experiences/ExperiencesSection'
import { StatsSectionContainer } from './StatsSectionContainer'
import SurvivalActions from './SurvivalActions'
import Defenses from './Defenses'
import ArtsAndAbilities from './ArtsAndAbilities'
import DisordersAndImpairments from './DisordersAndImpairments'
import NameHeaderSection from './nameHeader/NameHeaderSection'

export default function (props: { currentSurvivor: Survivor | undefined }) {
  return (
    //TODO: clicking on name gives options for surname and nickname
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
          <NameHeaderSection />

          <Experiences />
          
          <SurvivalActions />

          <ArtsAndAbilities />

          <DisordersAndImpairments />

          <Defenses />
        </div>
      )}
    </OuterContainer>
  )
}

const OuterContainer = styled.div`
  background-color: ${DARK_GREY};
  font-size: 20px;
`
