import {
  Button,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  ListSubheader,
} from '@material-ui/core'
import React, { SyntheticEvent, useState } from 'react'
import { getGearList } from '../../data/gear/gearList'
import { GearCardData } from '../../gearCard/CardData'
import { GearDrawerCategory } from './GearDrawerCategory'

export const getGearArrayFromData = () => {
  const temp = Array.from(getGearList().values())
  const gearArray: GearCardData[][] = []
  for (let i = 0; i < temp.length; i++) {
    gearArray.push(Array.from(temp[i].values()))
  }

  return gearArray
}

export const GearDrawer = () => {
  const [gearDrawer, setGearDrawer] = useState(false)

  const toggleDrawer = (open: boolean) => {
    //TODO: only need this method in case we want to do other key handling,
    //If we don't do that, can re place it with direct calls to setGearDrawer
    setGearDrawer(open)
  }

  const gearArray = getGearArrayFromData()
  console.log(gearArray)
  const GEAR_LIST = getGearList()

  const firstLetterUppercase = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  return (
    <>
      <Button onClick={() => toggleDrawer(!gearDrawer)}> Gear Drawer</Button>
      <SwipeableDrawer
        anchor={'left'}
        onClose={(e: SyntheticEvent) => toggleDrawer(false)}
        onOpen={(e: SyntheticEvent) => toggleDrawer(true)}
        open={gearDrawer}
      >
        <List
          subheader={<ListSubheader>Gear by Settlement Location</ListSubheader>}
        >
          {gearArray.map((settLoc, index) => (
            <GearDrawerCategory
              key = {index}
              label={firstLetterUppercase(Array.from(GEAR_LIST.keys())[index])}
              gearArray={settLoc}
            />
          ))}
        </List>
      </SwipeableDrawer>
    </>
  )
}
