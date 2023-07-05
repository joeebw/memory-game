import { useContext } from "react"
import Button from "../components/Button"
import { FINAL_MESSAGE, ROUTES } from "../utils/shared"
import { HomeContext } from "../context/home.context"


const ScreenThree = () => {
  const {finalMessage, setRoutes, playBackgroundMusic} = useContext(HomeContext);

  const handleChangeRoute = () => {
    playBackgroundMusic();
    setRoutes(ROUTES.secondScreen);
  }

  return (
    <div className="flex flex-col gap-16 justify-center items-center h-full w-5/6 mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold">
        {FINAL_MESSAGE[finalMessage]}
      </h1>
      <Button
        onClick={handleChangeRoute}
      >
        Play Again
      </Button>
    </div>
  )
}

export default ScreenThree