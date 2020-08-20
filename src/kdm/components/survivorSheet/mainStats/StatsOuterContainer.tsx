import React, { Children } from "react"
import styled from "styled-components";
import { BLOOD_RED } from '../../../../pw/components/styling/color';

//྿༓
export default (props: any) => {
return (
  <>
  {/* <Header>
    <HeaderOrnament topLeft={true}>༓</HeaderOrnament>
    <HeaderOrnament topLeft={false}>༓</HeaderOrnament>

  </Header> */}
  <Content>
    {...props.children}
  </Content>
  </>
)
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: relative;
`;

const HeaderOrnament = styled.span<{topLeft: boolean}>`
  font-size: 30px;
  color: ${BLOOD_RED};
  position: absolute;
  top: -15px;
  ${props => props.topLeft ? 'left: 0' : 'right: 0'};
`