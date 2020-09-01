import { Modal } from '@material-ui/core'
import _ from 'lodash'
import React, { useState } from 'react'
import styled from 'styled-components'
import { DARK_GREY, BLOOD_RED } from '../../../pw/components/styling/color'
import { XP_TYPE } from '../../data/survivor/ExperiencesData'
import ExperienceTracker from '../survivorSheet/sections/Experiences/ExperienceTracker'
import { BaseFlexDiv } from '../survivorSheet/_common/CommonStyled'

interface Props {
  label: string
  value: number
  milestones: number[]
  xpType?: XP_TYPE
}

export default (props: Props) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <OuterContainer
      flexDir="row"
      onClick={() => {
        if (!showModal) {
          setShowModal(!showModal)
        }
      }}
    >
      {props.xpType && (
        <>
          <TextDisplay>{props.label}</TextDisplay>
          <Modal open={showModal} onClose={() => setShowModal(false)}>
            <ModalDiv>
              <ExperienceTracker
                xpType={props.xpType}
                alwaysShowFooter={true}
              />
            </ModalDiv>
          </Modal>
        </>
      )}
      <ValueAndBoxHolder flexDir={'row'}>
        <ValueSpan>{props.value}</ValueSpan>
        <SmallBoxHolder flexDir={'row'}>
          {props.value !== undefined &&
            _.times(props.milestones.length, (index) => {
              return (
                <SmallBoxDiv
                  highlight={props.value >= props.milestones[index]}
                />
              )
            })}
        </SmallBoxHolder>
      </ValueAndBoxHolder>
    </OuterContainer>
  )
}

const TextDisplay = styled.span`
  width: 100%;
  background: transparent;

  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: white;
  font-size: 14px;
  white-space: nowrap;
  text-align: left;
`

const ValueSpan = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin: 0 5px 0 0;
`

const ValueAndBoxHolder = styled(BaseFlexDiv)``

const SmallBoxHolder = styled(BaseFlexDiv)`
  align-items: center;
  width: 50px;
`

const SmallBoxDiv = styled.div<{ highlight: boolean }>`
  height: 5px;
  width: 5px;
  margin: 0 2px;
  background-color: ${(props) => (props.highlight ? BLOOD_RED : `gray`)};
`
const OuterContainer = styled(BaseFlexDiv)`
  background-color: transparent;
  margin: 3px 0 0 0;
  padding: 0 10px;
`

const ModalDiv = styled.div`
  border: 1px solid gray;
  margin: 10px;
  color: white;
  text-align: center;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  outline: none;
  padding: 5px;
`
