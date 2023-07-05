import { useEffect, useState } from "react"
import Card from "../components/Card"
import { array } from "../utils/array";
import Modal from "../components/Modal";
import CountdownTimer from "../components/CountDown";
import { audios } from "../utils/myAudio";
import Muted from "../components/Muted";
import { KEY_FINAL_MESSAGE, ROUTES } from "../utils/shared";

const DEFAULT_MODAL_VALUES = {
  show: false,
  text: ''
}

const MODAL_TEXT = {
  success: "nice! it’s a match",
  fail: 'sorry, but this is not a match'
}


function ScreenTwo({setFinalMessage, setRoutes}) {
  


  const removeCardStack = (card) => {
    if (cardStack.length === 0) return;
    setCardStack(prev => prev.filter(cardItem => cardItem.id !== card.id));
  }

  const addCardStack = (card) => {
    setCardStack(prev => [...prev, card]);
  }


  useEffect(() => {
    const isMatchCard = () => {
      if (cardStack.length === 8) {
        setFinalMessage(KEY_FINAL_MESSAGE.success);
        setRoutes(ROUTES.thirdScreen);
      }
      if (cardStack.length > 0 && cardStack.length % 2 === 0) {
        const lastCard = cardStack[cardStack.length - 1];
        const secondLastCard = cardStack[cardStack.length - 2];
        // If not match the cards
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
        
        if (lastCard.isCorrect === true) return;

        const newArrayCard = arrayCard.map(card => {
          if (lastCard.name === card.name || secondLastCard.name === card.name) {
            return {...card, isCorrect: true, closeCard: false}
          }
          return card;
        })
        const newCardStack = cardStack.map((card) => {
          if (lastCard.name === card.name || secondLastCard.name === card.name) {
            return {...card, isCorrect: true}
          }
          return card;
        })
        audios.correct.play()
        setArrayCard(newArrayCard);
        setCardStack(newCardStack)
        setShowModal({show: true, text: MODAL_TEXT.success});
      }
    }
    isMatchCard()
  }, [cardStack])

  useEffect(() => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setArrayCard(array);
  }, [])

  const toggleMuted = () => {
    for(let audio in audios) {
      audios[audio].muted = !isMuted;
    }
    setIsmuted(!isMuted);
  }

  return (
    <div className="w-11/12 mx-auto mt-2">
      <div className="flex justify-end">
        <div className="flex justify-between w-full sm:w-[50%]">
          <CountdownTimer 
            setFinalMessage={setFinalMessage} 
            setRoutes={setRoutes}
          />
          <Muted toggleMuted={toggleMuted} isMuted={isMuted}/>
        </div>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-4 gap-5 md:gap-9 justify-items-center mt-4'>
        {arrayCard.length > 0 && (
          arrayCard.map(card => 
          <Card 
            key={card.id} 
            card={card} 
            addCardStack={addCardStack} 
            removeCardStack={removeCardStack}
            disable={disable}
            setDisable={setDisable}
          />
          ))
        }
      </div>
      <Modal 
        showModal={showModal} 
        setShowModal={setShowModal}
      />
    </div>
  )
}

export default ScreenTwo