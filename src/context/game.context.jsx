import { createContext } from "react";


export const GameContext = createContext();

export const GameProvider = ({children}) => {
  const [arrayCard, setArrayCard] = useState([]);
  const [cardStack, setCardStack] = useState([]);
  const [showModal, setShowModal] = useState(DEFAULT_MODAL_VALUES);
  const [disable, setDisable] =  useState(false);
  const [isMuted, setIsmuted] = useState(false);
  

  const value = {

  };

  return(
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
}

