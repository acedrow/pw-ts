import * as React from "./react"

export interface BgiProps {
  children: React.ReactNode;
  imageUrl: string;
}

export const BackgroundImage = (props : BgiProps) => {
  //TODO: Update default image here so it's not stupid.
  const bgStyle = {
    width: '100vw',
    height: '100vh',
    maxWidth: '100%',
    minHeight: '800px',
    backgroundImage: `url(${props.imageUrl})`,
    backgroundColor: 'grey',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  }

  return (
  <div style={bgStyle}>{props.children}</div>
  )
}
