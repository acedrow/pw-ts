import React, { useContext } from 'react'
import { StatsSectionContainer } from '../StatsSectionContainer'
import { getSurvivorName } from '../../../../data/survivor/SurvivorData'
import { KdmContext } from '../../../../KdmContext'
import NameHeaderContent from './NameHeaderContent'

export default () => {
  const { currentSurvivor } = useContext(KdmContext)
  return (
    <StatsSectionContainer
      title={getSurvivorName(currentSurvivor.demographics)}
      titleH1
      bottomBorder={true}
      collapsible={false}
      startsCollapsed={false}
    > 
      <NameHeaderContent />
    </StatsSectionContainer>
  )
}
