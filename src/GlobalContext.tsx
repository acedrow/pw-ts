import * as React from "react"
import { useState } from "react";

interface GlobalContext {
  showTopNav: boolean;
  setShowTopNav: (showNav: boolean) => void;
}

const context = {} as GlobalContext
export const GlobalContext = React.createContext<GlobalContext>(context)

export const GlobalContextProvider = (props: any) => {
  
  const [showTopNav, setShowTopNav] = useState(true);

  return (
    <GlobalContext.Provider value={{ showTopNav, setShowTopNav }}>
      {props.children}
    </GlobalContext.Provider>
  )

}