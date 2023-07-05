import { createContext, useState, useEffect, useContext } from "react";
import { arrayOfCards } from "../utils/array";
import { audios } from "../utils/myAudio";
import { KEY_FINAL_MESSAGE, ROUTES } from "../utils/shared";
import { HomeContext } from "./home.context";

export const GameContext = createContext();

const DEFAULT_MODAL_VALUES = {
  show: false,
  text: ''
}

const MODAL_TEXT = {
  success: "nice! it’s a match",
  fail: 'sorry, but this is not a match'
}

const handleNewCard = (lastCard, secondLastCard, newCard) => {
  return newCard.map(card => {
    if (lastCard.name === card.name || secondLastCard.name === card.name) {
      return {...card, isCorrect: true, closeCard: false}
    }
    return card;
  })
}

export const GameProvider = ({children}) => {
  const [arrayCard, setArrayCard] = useState([]);
  const [cardStack, setCardStack] = useState([]);
  const [showModal, setShowModal] = useState(DEFAULT_MODAL_VALUES);
  const [disable, setDisable] =  useState(false);
  const [isMuted, setIsmuted] = useState(false);
  const {routes, completedGame} = useContext(HomeContext);


  useEffect(() => {
    // check if all 8 hits have been completed
    if (cardStack.length === 8) {
      completedGame(KEY_FINAL_MESSAGE.success);
    }
  }, [cardStack])

  useEffect(() => {
    const isMatchCard = () => {
      // Check if the cards match
      if (cardStack.length > 0 && cardStack.length % 2 === 0) {
        const lastCard = cardStack[cardStack.length - 1];
        const secondLastCard = cardStack[cardStack.length - 2];
        // If not match the cards close the last pair of cards and play incorrect song
        if (lastCard.name !== secondLastCard.name) {
          const newArrayCard = arrayCard.map(card => {
            if (lastCard.id === card.id || secondLastCard.id === card.id) {
              return {...card, closeCard: true}
            }
            return card;
          })
          setArrayCard(newArrayCard)
          audios.incorrect.play()
          return setShowModal({show: true, text: MODAL_TEXT.fail});
        }
        
        // If the last pair are correct then return
        if (lastCard.isCorrect === true) return;

        // If the cards do match keep them open, disable, show modal message and play correct song.
        const newArrayCard = handleNewCard(lastCard, secondLastCard, arrayCard);
        const newCardStack = handleNewCard(lastCard, secondLastCard, cardStack);

        audios.correct.play()
        setArrayCard(newArrayCard);
        setShowModal({show: true, text: MODAL_TEXT.success});
        setCardStack(newCardStack)
      }
    }
    isMatchCard()
  }, [cardStack])

  // Shuffle cards and reset values
  useEffect(() => {
    if (routes === ROUTES.secondScreen) return;
    for (let i = arrayOfCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayOfCards[i], arrayOfCards[j]] = [arrayOfCards[j], arrayOfCards[i]];
    }
    setArrayCard(arrayOfCards);
    setShowModal(DEFAULT_MODAL_VALUES);
  }, [routes])

  const toggleMuted = () => {
    // for(let audio in audios) {
    //   audios[audio].muted = !isMuted;
    // }
    audios.background.muted = !isMuted;
    setIsmuted(!isMuted);
  }

  const removeCardStack = (card) => {
    if (cardStack.length === 0) return;
    setCardStack(prev => prev.filter(cardItem => cardItem.id !== card.id));
  }

  const addCardStack = (card) => {
    setCardStack(prev => [...prev, card]);
  }


  const value = {
    arrayCard,
    toggleMuted,
    isMuted,
    addCardStack,
    removeCardStack,
    setDisable,
    disable,
    showModal,
    setShowModal,
    completedGame
  };

  return(
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
}

