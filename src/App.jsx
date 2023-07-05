import { useState } from 'react'
import ScreenOne from './screens/ScreenOne'
import ScreenTwo from './screens/ScreenTwo'
import ScreenThree from './screens/ScreenThree'
import { ROUTES } from './utils/shared'



function App() {
  const [routes, setRoutes] = useState(ROUTES.firstScreen);
  const [finalMessage, setFinalMessage] = useState('');

  return (
    <>
    {routes === ROUTES.firstScreen ?
      <ScreenOne setRoutes={setRoutes}/> 
    :
    routes === ROUTES.secondScreen ?
      <ScreenTwo 
        setFinalMessage={setFinalMessage}
        setRoutes={setRoutes}
      />
    : 
    routes === ROUTES.thirdScreen &&
    <ScreenThree 
      finalMessage={finalMessage}
      setRoutes={setRoutes}
    />
    }
    </>
  )
}

export default App
