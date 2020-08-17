import React from "react"
import { SurvivorData } from "../../../data/survivor/SurvivorData"
import HuntXp from "./HuntXp"
import SurvivalActions from "./SurvivalActions"

export default function (props: {survivorData : SurvivorData}) {
  return (
    <>
      <span>Name: {props.survivorData.name}</span>
      <HuntXp xpNumber={props.survivorData.xp}></HuntXp>
      <SurvivalActions survivalActions={props.survivorData.actions || undefined}></SurvivalActions>
    </>
  )
}