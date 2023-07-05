import Button from '../components/Button'
import Logo from '../assets/logo.svg'
import { ROUTES } from '../utils/shared'

function ScreenOne({setRoutes}) {

  const handleChangeRoute = () => {
    setRoutes(ROUTES.secondScreen)
  }

  return (
    <div className='flex flex-col justify-center items-center gap-28 h-full'>

      <div className='w-56 logo animate-slide-in-top'>
        <img src={Logo} alt="" />
      </div>
      
      <div className='start-button animate-slide-in-bottom'>
        <Button 
          onClick={handleChangeRoute}
        >
          Start
        </Button>
      </div>
    </div>
  )
}

export default ScreenOne