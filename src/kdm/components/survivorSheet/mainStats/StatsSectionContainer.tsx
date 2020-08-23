import React, { Children, FunctionComponent, useState } from 'react'
import styled from 'styled-components'
import {
  BLOOD_RED,
  KDM_DARK_GREY,
  KDM_PAGE_BACKGROUND,
} from '../../../../pw/components/styling/color'

interface SectionProps {
  bottomBorder: boolean
  title?: string
  titleH1?: boolean
  collapsible?: boolean
}

export const StatsSectionContainer: FunctionComponent<SectionProps> = (
  props
) => {
  const h1Symbols = ['⛧', '⌾']
  const [h1SymbolIndex, setH1SymbolIndex] = useState(0)
  const [collapsed, setCollapsed] = useState(false)

  const getNewH1Symbol = () => {
    if (h1SymbolIndex >= h1Symbols.length - 1) {
      setH1SymbolIndex(0)
    } else setH1SymbolIndex(h1SymbolIndex + 1)
  }

  return (
    // TODO: swiping along the name should switch survivors

    <Content
      id="statSection"
      bottomBorder={props.bottomBorder}
      collapsed={collapsed}
    >
      {props.title && (
        <HeaderDiv
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
        </HeaderDiv>
      )}
      {!collapsed && props.children}
    </Content>
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
  margin: 10px;
`

const Header = styled.div<{ collapsed: boolean }>`
  margin: 0 0 5px 0;
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
  font-size: 18px;
  margin: 10px;
`

const HeaderDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`

const Content = styled.div<{ bottomBorder: boolean; collapsed: boolean }>`
  border-bottom: ${(props) => (props.bottomBorder ? '1px solid gray' : 'none')};
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => (props.collapsed ? 'none' : '10px')};
`