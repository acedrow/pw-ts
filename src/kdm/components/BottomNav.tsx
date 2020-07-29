import styled from 'styled-components'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { LIGHT_GREY } from '../../pw/components/styling/color'

export const BottomNav = () => {
  return (
    <BottomNavContainer>
      <BottomNavLink to="/kdm-test" gridcol={1}>
        Settlement
      </BottomNavLink>
      <BottomNavLink to="/kdm-test" gridcol={2}>
        Survivors
      </BottomNavLink>
      <BottomNavLink to="/kdm-test" gridcol={3}>
        Settings
      </BottomNavLink>
      <BottomNavLink to="/kdm-test" gridcol={4}>
        Search
      </BottomNavLink>
    </BottomNavContainer>
  )
}

const BottomNavLink = styled(Link)<{ gridcol: number }>`
  background-color: ${LIGHT_GREY};
  border: 1px solid white;
  grid-column-start: ${(props) => props.gridcol};
  grid-column-end: ${(props) => props.gridcol};
`

const BottomNavContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: grid;
  /* 4 buttons on the lower nav - settlement, survivors, settings, search*/
  grid-template-columns: 25% 25% 25% 25%;
`
