import * as React from 'react'
import { KdmContext } from '../kdm/KdmContext'
import { MAX_VIEW_WIDTH } from '../pw/components/pages/KdmTracker'

export const ViewWidthTracker = (props: any) => {
  const { setViewWidth } = React.useContext(KdmContext)

  const onWindowResize = () => {
    setViewWidth(
      window.innerWidth < MAX_VIEW_WIDTH ? window.innerWidth : MAX_VIEW_WIDTH
    )
    console.log(`${window.innerHeight} ${window.innerWidth}`)
  }

  window.addEventListener('resize', onWindowResize)

  return <></>
}
