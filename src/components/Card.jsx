import { useEffect, useState } from 'react'

function Card(props) {
  const [flip, setFlip] = useState(false);
  const [animateFlip, setAnimateFlip] = useState(false);

  const {card, addCardStack, removeCardStack, setDisable, disable} = props;

  const handlerOnClick = () => {
    handleFlipAnimation();
  }

  const handleFlipAnimation = () => {
    if (!animateFlip && !card.isCorrect && !disable){
      setAnimateFlip(true);
      setDisable(true);
      setTimeout(() => {
        setFlip(!flip);
        setAnimateFlip(false);
        setDisable(false);
      }, 600);
    }
  }

  const closeCardAnimation = () => {
      setAnimateFlip(true);
      setTimeout(() => {
        setFlip(false);
        setAnimateFlip(false);
        setDisable(false);
      }, 600);
  }

  useEffect(() => {
    if (card.closeCard) {
      setDisable(true);
      setTimeout(() => {
        closeCardAnimation();
      }, 1000);
    }
  }, [card])

  useEffect(() => {
    if (flip) {
      return addCardStack(card)
    }
    removeCardStack(card);
  }, [flip])

  return (
    <div 
      className={`flex items-center border-2 border-blue-700 ${animateFlip ?  'animate-flip' : ''}  
      ${!flip ? 'bg-blue-400' : 'bg-slate-100'} h-[13rem] w-[7rem] md:h-[17rem] md:w-[11rem] lg:h-[18rem] lg:w-[12rem] rounded-md cursor-pointer`}
      onClick={handlerOnClick}
    >
      {flip ?
        <div className='w-full'>
          <img src={card.name} alt="" />
        </div>
        :
        <div className='flex justify-center items-center text-yellow-400 w-full'>
          <span className='text-8xl md:text-9xl'>?</span>
        </div>
      }
    </div>
  )
}

export default Card