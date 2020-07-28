import styled from 'styled-components'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { LIGHT_GREY } from '../../pw/components/styling/color'

export const BottomNav = () => {
  return (
    <BottomNavContainer>
      <BottomNavLink to="/kdm-test" gridCol={1}>
        Settlement
      </BottomNavLink>
      <BottomNavLink to="/kdm-test" gridCol={2}>
        Survivors
      </BottomNavLink>
      <BottomNavLink to="/kdm-test" gridCol={3}>
        Settings
      </BottomNavLink>
      <BottomNavLink to="/kdm-test" gridCol={4}>
        Search
      </BottomNavLink>
    </BottomNavContainer>
  )
}

const BottomNavLink = styled(Link)<{ gridCol: number }>`
  background-color: ${LIGHT_GREY};
  border: 1px solid white;
  grid-column-start: ${(props) => props.gridCol};
  grid-column-end: ${(props) => props.gridCol};
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
