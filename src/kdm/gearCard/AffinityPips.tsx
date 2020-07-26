import { Affinity, AFFINITY_POSITION, AFFINITY_COLOR } from './CardData'
import * as React from 'react'
import styled from 'styled-components'

const PIP_LENGTH_LONG = 40
const PIP_LENGTH_SHORT = 5

//col-start, col-end, row-start, row-end
const pipPositionsMap = new Map([
  [AFFINITY_POSITION.TOP, [4, 7, 0, 0]],
  [AFFINITY_POSITION.RIGHT, [10, 10, 4, 7]],
  [AFFINITY_POSITION.BOTTOM, [4, 7, 10, 10]],
  [AFFINITY_POSITION.LEFT, [0, 0, 4, 7]],
])

//TODO: replace with a hash map
export const AffinityPips = (props: { affinities: Affinity[] }) => {
  return (
    <>
      {props.affinities.map((affinity, index) => (
        <AffinityPipContainer
          id={`affinity${index}`}
          position={affinity.position}
          gridColStart={pipPositionsMap.get(affinity.position)[0]}
          gridColEnd={pipPositionsMap.get(affinity.position)[1]}
          gridRowStart={pipPositionsMap.get(affinity.position)[2]}
          gridRowEnd={pipPositionsMap.get(affinity.position)[3]}
          color={affinity.color}
          key={index}
        ></AffinityPipContainer>
      ))}
    </>
  )
}

const AffinityPipContainer = styled.div<{
  position: AFFINITY_POSITION
  gridColStart: number
  gridColEnd: number
  gridRowStart: number
  gridRowEnd: number
  color: string
}>`
  height: ${(props) =>
    props.position === AFFINITY_POSITION.TOP ||
    props.position === AFFINITY_POSITION.BOTTOM
      ? PIP_LENGTH_SHORT
      : PIP_LENGTH_LONG}px;
  width: ${(props) =>
    props.position === AFFINITY_POSITION.RIGHT ||
    props.position === AFFINITY_POSITION.LEFT
      ? PIP_LENGTH_SHORT
      : PIP_LENGTH_LONG}px;
  margin-left: ${(props) =>
    props.position === AFFINITY_POSITION.RIGHT ? PIP_LENGTH_SHORT : 0}px;
  margin-top: ${(props) =>
    props.position === AFFINITY_POSITION.BOTTOM ? PIP_LENGTH_SHORT : 0}px;
  background-color: ${(props) => props.color};
  grid-column-start: ${(props) => props.gridColStart};
  grid-column-end: ${(props) => props.gridColEnd};
  grid-row-start: ${(props) => props.gridRowStart};
  grid-row-end: ${(props) => props.gridRowEnd};
`
