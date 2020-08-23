import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { KDM_DARK_GREY } from '../../pw/components/styling/color';

export const BottomNav = () => {
  return (
    <BottomNavContainer>
      <BottomNavLink to="/kdm-test" gridcol={1}>
        🏘️
      </BottomNavLink>
      <BottomNavLink to="/kdm-test" gridcol={2}>
        👪
      </BottomNavLink>
      <BottomNavLink to="/kdm-test" gridcol={3}>
        ⚙️
      </BottomNavLink>
      <BottomNavLink to="/kdm-test" gridcol={4}>
        🔍
      </BottomNavLink>
      <BottomNavLink to="/kdm-test" gridcol={4}>
        🗃️
      </BottomNavLink>
    </BottomNavContainer>
  )
}

const BottomNavLink = styled(Link)<{ gridcol: number }>`
  padding: 5px;
  background-color: ${KDM_DARK_GREY};
  border: 1px solid gray;
  grid-column-start: ${(props) => props.gridcol};
  grid-column-end: ${(props) => props.gridcol};
  text-decoration: none;
  width: 20%;
`

const BottomNavContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
`
