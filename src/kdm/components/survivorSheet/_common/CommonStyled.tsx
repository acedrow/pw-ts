import styled from 'styled-components'
import {
  KDM_DARK_GREY,
  BLOOD_RED,
} from '../../../../pw/components/styling/color'

interface CounterButtonProps {
  height?: string
  width?: string
  margin?: string
}

export const CounterButton = styled.button<CounterButtonProps>`
  height: ${(props) => props.height || '5vw'};
  width: ${(props) => props.width || '5vw'};
  min-width: 5vw;
  min-height: 5vw;
  min-width: 5vw;
  margin: ${(props) => props.margin || '0'};
  max-height: 30px;
  max-width: 30px;

  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: white;
  line-height: 1em;
  text-indent: -0.1em;

  background-color: ${KDM_DARK_GREY};
`
export const BaseFlexDiv = styled.div<{
  flexDir: 'row' | 'column'
  justifyContent?: 'none' | 'center' | 'flex-end'
}>`
  display: flex;
  flex-direction: ${(props) => props.flexDir};
  justify-content: ${props => props.justifyContent || 'center'};
`

export const UnderlineTextArea = styled.textarea`
  background-color: transparent;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  border-width: 0 0 1px 0;
  border-bottom: 1px solid gray;
  color: white;
  resize: none;
  outline: none;
`
