import { Affinity, AFF_POS, AFFINITY_COLOR } from '../../data/gear/CardData'
import * as React from 'react'
import styled from 'styled-components'
import shortid from 'shortid'

//col-start, col-end, row-start, row-end
const pipPositionsMap = new Map([
  [AFF_POS.TOP, [4, 7, 0, 0]],
  [AFF_POS.RIGHT, [10, 10, 4, 7]],
  [AFF_POS.BOTTOM, [4, 7, 10, 10]],
  [AFF_POS.LEFT, [0, 0, 4, 7]],
])

const getPipPosition = (pos: AFF_POS) => {
  const toReturn = pipPositionsMap.get(pos);
  if (!toReturn) console.error('Error retrieving affinity pip location')
  return toReturn ? toReturn : [0,0,0,0]
}

const getPipDimensions = (cardLength : number) => {
  return {
    longSide: (cardLength / 10) * 4,
    shortSide: (cardLength / 20)
  }
}

export const AffinityPips = (props: { affinities: Affinity[], cardLength: number }) => {
  const pipDimensions = getPipDimensions(props.cardLength);
  
  return (
    <>
      {props.affinities.map((affinity, index) => (
        <AffinityPipContainer
          id={`affinity${index}`}
          position={affinity.position}
          pipDimensions={pipDimensions}
          gridColStart={getPipPosition(affinity.position)[0]}
          gridColEnd={getPipPosition(affinity.position)[1]}
          gridRowStart={getPipPosition(affinity.position)[2]}
          gridRowEnd={getPipPosition(affinity.position)[3]}
          color={affinity.color}
          key={shortid()}
        ></AffinityPipContainer>
      ))}
    </>
  )
}

const AffinityPipContainer = styled.div<{
  position: AFF_POS
  pipDimensions: {longSide: number, shortSide: number}
  gridColStart: number
  gridColEnd: number
  gridRowStart: number
  gridRowEnd: number
  color: string
}>`
  height: ${(props) =>
    props.position === AFF_POS.TOP ||
    props.position === AFF_POS.BOTTOM
      ? props.pipDimensions.shortSide
      : props.pipDimensions.longSide}px;
  width: ${(props) =>
    props.position === AFF_POS.RIGHT ||
    props.position === AFF_POS.LEFT
      ? props.pipDimensions.shortSide
      : props.pipDimensions.longSide}px;
  margin-left: ${(props) =>
    props.position === AFF_POS.RIGHT ? props.pipDimensions.shortSide : 0}px;
  margin-top: ${(props) =>
    props.position === AFF_POS.BOTTOM ? props.pipDimensions.shortSide : 0}px;
  background-color: ${(props) => props.color};
  grid-column-start: ${(props) => props.gridColStart};
  grid-column-end: ${(props) => props.gridColEnd};
  grid-row-start: ${(props) => props.gridRowStart};
  grid-row-end: ${(props) => props.gridRowEnd};
`
