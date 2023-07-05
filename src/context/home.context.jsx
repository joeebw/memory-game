import { createContext, useState } from "react";
import { ROUTES } from "../utils/shared";
import { audios } from "../utils/myAudio";

export const HomeContext = createContext();

export const HomeProvider = ({children}) => {
  const [routes, setRoutes] = useState(ROUTES.firstScreen);
  const [finalMessage, setFinalMessage] = useState('');

  const playBackgroundMusic = () => {
    audios.background.currentTime = 0;
    audios.background.play();
  }

  const stopBackgroundMusic = () => {
    audios.background.pause();
    audios.background.currentTime = audios.background.duration;
  }

  const completedGame = (message) => {
    stopBackgroundMusic();
    setFinalMessage(message);
    setRoutes(ROUTES.thirdScreen);
  }

  const value = {
    routes,
    setRoutes,
    finalMessage,
    playBackgroundMusic,
    completedGame
  }

  return(
    <HomeContext.Provider value={value}>
      {children}
    </HomeContext.Provider>
  )
}