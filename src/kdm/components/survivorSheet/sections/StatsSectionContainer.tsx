import React, { Children, FunctionComponent, useState } from 'react'
import styled from 'styled-components'
import {
  BLOOD_RED,
  DARK_GREY,
  KDM_PAGE_BACKGROUND,
} from '../../../../pw/components/styling/color'
import { BaseFlexDiv } from '../_common/CommonStyled'

const BLACK_TO_GRAY_DIENT =
'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(15,15,15,1) 25%, rgba(26,26,26,1) 51%, rgba(49,49,49,1) 100%)'


const DULL_RED_ORANGE_GRAY_DIENT = 'linear-gradient(180deg, rgba(88,12,12,1) 0%, rgba(98,48,13,1) 26%, rgba(98,58,44,1) 44%, rgba(49,49,49,1) 100%);'

const CHESTNUT_GRADIENT = 'linear-gradient(220deg, rgba(240,213,184,1) 0%, rgba(244,171,114,1) 11%, rgba(247,150,81,1) 22%, rgba(203,102,52,1) 34%, rgba(167,77,45,1) 45%, rgba(142,70,46,1) 56%, rgba(121,73,56,1) 67%, rgba(92,62,52,1) 79%, rgba(49,49,49,1) 100%)'

const LASER_SHIELD_GRADIENT = 'radial-gradient(circle, rgba(121,18,18,1) 0%, rgba(47,27,106,1) 100%);'

const NEON_SUNSET_GRADIENT = 'linear-gradient(135deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'

const DREAMS_OF_VALOR_GRADIENT = 'linear-gradient(135deg, rgba(190,94,111,1) 5%, rgba(129,113,142,1) 27%, rgba(161,154,193,1) 52%, rgba(219,158,79,1) 73%, rgba(218,126,72,1) 100%)'

const DREAMS_OF_VALOR_GRADIENT_ALT = 'linear-gradient(135deg, rgba(129,113,142,1) 0%, rgba(161,154,193,1) 24%, rgba(219,158,79,1) 68%, rgba(218,126,72,1) 88%, rgba(190,94,111,1) 100%)'

const MUDSHARK_GRADIENT = 'linear-gradient(225deg, rgba(38,32,18,1) 0%, rgba(40,35,11,1) 9%, rgba(45,50,62,1) 48%, rgba(75,109,117,1) 100%)'

interface SectionProps {
  bottomBorder: boolean
  title?: string
  titleH1?: boolean
  collapsible?: boolean
  startsCollapsed?: boolean
  gradient?: boolean;
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
      gradient={props.titleH1}
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
              {/* FIXME: symbol position is broken on desktop display, and the position seems wonky */}
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
      {!collapsed && <Content> {props.children}</Content>}
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

const Header = styled.div<{ collapsed: boolean; gradient?: boolean }>`
  width: 100%;
  position: relative;

  background: rgb(0, 0, 0);
  /* background: ${(props) =>
    props.gradient
      ? 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(15,15,15,1) 25%, rgba(26,26,26,1) 51%, rgba(49,49,49,1) 100%)'
      : DARK_GREY}; */

  background-color: ${(props) =>
    props.collapsed ? DARK_GREY : KDM_PAGE_BACKGROUND};
  transition: background-color 1s;
`

const OuterContainer = styled(BaseFlexDiv)<{
  bottomBorder: boolean
  collapsed: boolean
  titleH1: boolean
  gradient?: boolean
}>`
  text-align: center;
  border-bottom: ${(props) => (props.bottomBorder ? '1px solid gray' : 'none')};
   background: ${(props) =>
    props.gradient
      ? DULL_RED_ORANGE_GRAY_DIENT : DARK_GREY}; 
`

const TitleH1 = styled.h1`
  text-align: initial;
  font-size: 24px;
  margin: 5px 0 0 5px;
`

const TitleH2 = styled.h2`
  text-align: initial;
  font-size: 16px;
  margin: 5px;
`

const Content = styled.div`
  padding: 10px 0;
`
