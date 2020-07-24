import * as React from "react";
import styled from "styled-components";


export const Blurb = () => {
  return (
    <BlurbContainer>
      Linden Holt 
      <br /> is a software developer based in Minneapolis
      {/* //   <br /> who greatly enjoys the
       <br /> day-to-day creative problem solving
       <br /> of the IT experiece.*/}
      <br /> who is bad
      <br /> at blurbs.
    </BlurbContainer>
  )
}

const BlurbContainer = styled.h1`
  margin: 20px 0 0 20px;
  text-align: left;
`;
