import React, { useState, useEffect, useContext } from 'react'
import { BaseFlexDiv } from './CommonStyled'
import { TextCardData } from '../../../data/cards/TextCardData'
import _ from 'lodash'
import { Select, MenuItem } from '@material-ui/core'
import shortid from 'shortid'
import styled from 'styled-components'
import { KdmContext } from '../../../KdmContext'

/* 
The group can either display a fixed number of Select cells (Fighting Arts and Disorders), or display one more select cell than the current number of attributes (Impairments and Abilities)
*/
interface SelectGroupProps {
  rows: number | 'n+1'
  cardDeck: TextCardData[]
  currentValues: TextCardData[] | undefined
  valueChangeCallback: (currentValues: TextCardData[]) => void;
}

export default (props: SelectGroupProps) => {
  const [currentValues, setCurrentValues] = useState<TextCardData[]>(
    props.currentValues || []
  )

  useEffect(() => {
    console.log(`Selectgroup UE: ${currentValues}`)
    props.valueChangeCallback(currentValues)
  }, [currentValues])

  const handleChange = (
    index: number,
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    //see if the card is already present, if so, don't allow it to be added
    //TODO: should have an error popup display if they do that (actually should just remove dupes from the list before we display)
    const name = `${event.target.value}`
    if (name.length > 0) {
      let temp = [...currentValues]
      const card = props.cardDeck.find((card) => card.name === name)
      if (card) {
        if (currentValues[index]) {
          temp[index] = card
        } else {
          temp = [...currentValues, card]
        }
        setCurrentValues(temp)
        return
      }
    }
  }

  return (
    <OuterContainer flexDir="row">
      <BaseFlexDiv flexDir="column">
        {typeof props.rows === 'number' &&
          _.times(props.rows, (i) => (
            <Select
              key={shortid()}
              value={
                (currentValues && currentValues[i] && currentValues[i].name) ||
                ''
              }
              onChange={(e) => handleChange(i, e)}
              autoWidth
            >
              {props.cardDeck.map((card) => {
                return (
                  <MenuItem key={shortid()} value={card.name}>
                    {card.name}
                  </MenuItem>
                )
              })}
            </Select>
          ))}
      </BaseFlexDiv>
    </OuterContainer>
  )
}

const OuterContainer = styled(BaseFlexDiv)``
