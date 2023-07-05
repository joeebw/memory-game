import { createContext } from "react";


export const GameContext = createContext();

export const GameProvider = ({children}) => {

  

  const value = {

  };

  return(
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
}

