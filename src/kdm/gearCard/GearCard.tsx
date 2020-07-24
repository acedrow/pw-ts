import { GameData } from './CardData';
import { useState } from 'react';
import * as React from 'react';

interface GearCardProps {
  gameData: GameData
}

export const GearCard = (props : GearCardProps) => {
  const [gameData, setGameData] = useState<GameData>(props.gameData)

  return (<> </>)
}