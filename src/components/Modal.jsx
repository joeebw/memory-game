import { useContext } from "react";
import { GameContext } from "../context/game.context";

const Modal = () => {
  const {showModal, setShowModal} = useContext(GameContext);

  return (
    <>
      {showModal.show ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal({...showModal, show: false})}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="mt-3 sm:flex justify-center">
                  <div className="mt-2 text-center sm:ml-4 sm:text-left">
                    
                    <p className="mt-2 text-[15px] font-bold leading-relaxed text-gray-500">
                      {showModal.text}
                    </p>
                    <div className=" mt-3 sm:flex">
                      <button
                        className="w-[200px] mt-2 p-2.5 flex-1 text-white bg-yellow-400 rounded-md outline-none ring-offset-2 focus:ring-2"
                        onClick={() =>
                          setShowModal({...showModal, show: false})
                        }
                      >
                        continue
                      </button>                                            
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Modal;