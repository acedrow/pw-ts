import { List, ListItem, ListItemText } from '@material-ui/core'
import React, { useState } from 'react'
import { GearCardData } from '../../gearCard/CardData'
import { Collapse } from '@material-ui/core'

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
              <ListItemText primary={<>&nbsp;&nbsp;{gear.cardName}</>} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  )
}
