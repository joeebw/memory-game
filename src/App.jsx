import { useContext } from 'react'
import ScreenOne from './screens/ScreenOne'
import ScreenTwo from './screens/ScreenTwo'
import ScreenThree from './screens/ScreenThree'
import { ROUTES } from './utils/shared'
import { HomeContext } from './context/home.context'



function App() {
  const {routes} = useContext(HomeContext);

  return (
    <>
    {routes === ROUTES.firstScreen ?
      <ScreenOne/> 
    :
    routes === ROUTES.secondScreen ?
      <ScreenTwo />
    : 
    routes === ROUTES.thirdScreen &&
    <ScreenThree/>
    }
    </>
  )
}

export default App
