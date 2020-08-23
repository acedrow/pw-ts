import styled from "styled-components";
import { KDM_DARK_GREY, BLOOD_RED } from "../../../../pw/components/styling/color";

interface CounterButtonProps {
  height?: string;
  width?: string;
  margin?: string;
  
}

export const CounterButton = styled.button<CounterButtonProps >`
  height: ${props => props.height || '5vw'};
  width: ${props => props.width || '5vw'};;
  min-width: 5vw;
  min-height: 5vw;
  min-width: 5vw;
  margin: ${props => props.margin ||'0'};
  max-height: 30px;
  max-width: 30px;


  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: white;
  line-height: 1em;
  text-indent: -0.1em;

  background-color: ${KDM_DARK_GREY};
`