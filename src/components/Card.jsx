import { useContext, useEffect, useState } from 'react'
import { GameContext } from '../context/game.context';

function Card({card}) {
  const [showCard, setShowCard] = useState(false);
  const [animateFlip, setAnimateFlip] = useState(false);
  const {addCardStack, removeCardStack, setDisable, disable} = useContext(GameContext);


  const handlerOnClick = () => {
    handleFlipAnimation();
  }

  const handleFlipAnimation = () => {
    if (!card.isCorrect && !disable){
      setAnimateFlip(true);
      setDisable(true);
      setTimeout(() => {
        setShowCard(!showCard);
        setAnimateFlip(false);
        setDisable(false);
      }, 500);
    }
  }

  const closeCardAnimation = () => {
      setAnimateFlip(true);
      setTimeout(() => {
        setShowCard(false);
        setAnimateFlip(false);
        setDisable(false);
      }, 500);
  }

  // when the pair card are incorrect close
  useEffect(() => {
    if (card.closeCard) {
      setDisable(true);
      setTimeout(() => {
        closeCardAnimation();
      }, 1000);
    }
  }, [card])

  // when the card is open then add to the cardStack
  useEffect(() => {
    if (showCard) {
      return addCardStack(card)
    }
    removeCardStack(card);
  }, [showCard])

  return (
    <div 
      className={`flex items-center border-2 border-blue-700 ${animateFlip ?  'animate-flip' : ''}  
      ${!showCard ? 'bg-blue-400' : 'bg-slate-100'} h-[13rem] w-[7rem] md:h-[17rem] md:w-[11rem] lg:h-[18rem] lg:w-[12rem] rounded-md cursor-pointer`}
      onClick={handlerOnClick}
    >
        <div className={`${showCard ? '' : 'hidden'} w-full`}>
          <img src={card.name} alt="" />
        </div>
        
        <div className={`${showCard ? 'hidden' : ''} flex justify-center items-center text-yellow-400 w-full`}>
          <span className='text-8xl md:text-9xl'>?</span>
        </div>
    </div>
  )
}

export default Card