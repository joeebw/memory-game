import Card from "../components/Card"
import Modal from "../components/Modal";
import CountdownTimer from "../components/CountDown";
import Muted from "../components/Muted";
import { useContext } from "react";
import { GameContext } from "../context/game.context";


function ScreenTwo() {
  const {arrayCard} = useContext(GameContext);

  return (
    <div className="w-11/12 mx-auto mt-2">
      <div className="flex justify-end">
        <div className="flex justify-between w-full sm:w-[50%]">
          <CountdownTimer/>
          <Muted />
        </div>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-4 gap-5 md:gap-9 justify-items-center mt-4'>
        {arrayCard.length > 0 && (
          arrayCard.map(card => 
          <Card 
            key={card.id} 
            card={card} 
          />
          ))
        }
      </div>
      <Modal/>
    </div>
  )
}

export default ScreenTwo