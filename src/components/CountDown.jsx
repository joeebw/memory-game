import { useState, useEffect } from 'react';
import { audios } from '../utils/myAudio';
import { ROUTES, KEY_FINAL_MESSAGE } from '../utils/shared';

const CountdownTimer = ({setFinalMessage, setRoutes}) => {
  const [countdown, setCountdown] = useState(30);

  const handleChangeRoute = () => {
    setFinalMessage(KEY_FINAL_MESSAGE.fail);
    setRoutes(ROUTES.thirdScreen);
  }

  useEffect(() => {
    if (countdown >= 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      if (countdown === 10) {
        audios.ticking.play();
      }

      if (countdown === 0) {
        handleChangeRoute()
      }

      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <div className='flex justify-center mt-2 sm:-translate-x-2/4'>
      <h1 className='font-orbitron text-xl sm:text-3xl font-bold'>{countdown} seconds</h1>
    </div>
  );
}

export default CountdownTimer;
