import { List, ListItem, ListItemText } from '@material-ui/core'
import React, { useState } from 'react'
import { GearCardData, CardData } from '../../gearCard/CardData'
import { Collapse } from '@material-ui/core'
import { GearCard, GEAR_CARD_DISPLAY_TYPE } from '../../gearCard/GearCard'

interface DrawerCatProps {
  label: string
  gearArray: GearCardData[]
}

export const GearDrawerCategory = (props: DrawerCatProps) => {
  const [showContents, setShowContents] = useState(false)

  return (
    <>
      <ListItem button onClick={() => setShowContents(!showContents)}>
        <ListItemText primary={`${props.label} ${showContents ? '-' : '+'}`} />
      </ListItem>
      <Collapse in={showContents}>
        <List>
          {props.gearArray.map((gear, index) => (
            <ListItem key={index}>
              {/* TODO: actual implementation of gear card objects here */}
              {/* <ListItemText primary={<>&nbsp;&nbsp;{gear.cardName}</>} /> */}
              <GearCard
                cardData={new CardData(true, gear, undefined, false)}
                display={GEAR_CARD_DISPLAY_TYPE.TEXT}
              ></GearCard>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  )
}
