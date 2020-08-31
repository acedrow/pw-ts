import React, { useState } from 'react'
import { XP_TYPE } from '../../data/survivor/ExperiencesData'
import { Modal } from '@material-ui/core'
import ExperienceTracker from '../survivorSheet/sections/Experiences/ExperienceTracker'
import styled from 'styled-components'

interface Props {
  label: string
  value: number
  milestones: number[]
  xpType?: XP_TYPE
}

export default (props: Props) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      {props.xpType && (
        <>
          <button onClick={() => setShowModal(!showModal)}>
            {props.label}&nbsp;{props.value}
          </button>
          <Modal open={showModal} onClose={() => setShowModal(false)}>
            <ModalDiv>
            <ExperienceTracker xpType={props.xpType} alwaysShowFooter={true} />
            </ModalDiv>
          </Modal>
        </>
      )}
    </>
  )
}

const ModalDiv = styled.div`
  background-color: black;
  border: 1px solid gray;
  margin: 10px;
  color: white;
  text-align: center;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  outline: none;
  padding: 5px;
`;