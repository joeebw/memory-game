import SoundOn from '../assets/sound--on.svg'
import SoundOff from '../assets/sound--off.svg'
import { useContext } from 'react'
import { GameContext } from '../context/game.context'

const Muted = () => {
  const {toggleMuted, isMuted} = useContext(GameContext); 

  return (
    <button
      className="bg-blue-200 rounded-md px-6 py-2 "
      onClick={toggleMuted}
    >
      <img 
        src={isMuted ? SoundOff : SoundOn}  
        className="w-6 h-6"
      />
    </button>
  )
}

export default Muted