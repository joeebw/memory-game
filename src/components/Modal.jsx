import { useContext, useEffect } from "react";
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
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="mt-3 sm:flex justify-center">
                  <div className="mt-2 text-center sm:ml-4 sm:text-left">
                    
                    <p className="mt-2 text-lg font-bold leading-relaxed text-black">
                      {showModal.text.toUpperCase()}
                    </p>
                    <div className=" mt-3 sm:flex">                                         
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