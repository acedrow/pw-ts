import React, { Children, FunctionComponent, useState } from 'react'
import styled from 'styled-components'
import {
  BLOOD_RED,
  KDM_DARK_GREY,
  KDM_PAGE_BACKGROUND,
} from '../../../../pw/components/styling/color'
import { BaseFlexDiv } from '../_common/CommonStyled'

interface SectionProps {
  bottomBorder: boolean
  title?: string
  titleH1?: boolean
  collapsible?: boolean
  startsCollapsed?: boolean
}

export const StatsSectionContainer: FunctionComponent<SectionProps> = (
  props
) => {
  const h1Symbols = ['⛧', '⌾']
  const [h1SymbolIndex, setH1SymbolIndex] = useState(0)
  const [collapsed, setCollapsed] = useState(props.startsCollapsed || false)

  const getNewH1Symbol = () => {
    if (h1SymbolIndex >= h1Symbols.length - 1) {
      setH1SymbolIndex(0)
    } else setH1SymbolIndex(h1SymbolIndex + 1)
  }

  return (
    // TODO: swiping along the name should switch survivors

    <OuterContainer
      id="statSection"
      flexDir="column"
      bottomBorder={props.bottomBorder}
      collapsed={collapsed}
      titleH1={!!props.titleH1}
    >
      {props.title && (
        <BaseFlexDiv
          flexDir="row"
          justifyContent="none"
          onClick={
            props.collapsible ? () => setCollapsed(!collapsed) : undefined
          }
        >
          {props.titleH1 && (
            <>
              <TitleH1> {props.title}</TitleH1>{' '}
              <HeaderButton fontSize={'24px'} onClick={getNewH1Symbol}>
                {h1Symbols[h1SymbolIndex]}
              </HeaderButton>
            </>
          )}
          {!props.titleH1 && (
            <Header collapsed={collapsed}>
              <TitleH2> {props.title}</TitleH2>
              <HeaderButton fontSize={'18px'}>
                {collapsed ? '+' : '-'}
              </HeaderButton>
            </Header>
          )}
        </BaseFlexDiv>
      )}
      {!collapsed && !props.titleH1 && <Content> {props.children}</Content>}
    </OuterContainer>
  )
}

const HeaderButton = styled.div<{ fontSize: string }>`
  outline: none;
  position: absolute;
  right: 0;
  top: 0;
  background-color: inherit;
  font-size: ${(props) => props.fontSize};
  color: ${BLOOD_RED};
  margin: 5px;
`

const Header = styled.div<{ collapsed: boolean }>`
  width: 100%;
  position: relative;

  /* background: rgb(0,0,0);
  background: ${(props) =>
    props.collapsed
      ? KDM_DARK_GREY
      : 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(15,15,15,1) 25%, rgba(26,26,26,1) 51%, rgba(49,49,49,1) 100%)'}; */

  background-color: ${(props) =>
    props.collapsed ? KDM_DARK_GREY : KDM_PAGE_BACKGROUND};
  transition: background-color 1s;
`

const TitleH1 = styled.h1`
  text-align: initial;
  font-size: 24px;
  margin: 10px;
`

const TitleH2 = styled.h2`
  text-align: initial;
  font-size: 16px;
  margin: 5px;
`

const Content = styled.div`
  padding: 10px 0;
`

const OuterContainer = styled(BaseFlexDiv)<{
  bottomBorder: boolean
  collapsed: boolean
  titleH1: boolean
}>`
  border-bottom: ${(props) => (props.bottomBorder ? '1px solid gray' : 'none')};
`
