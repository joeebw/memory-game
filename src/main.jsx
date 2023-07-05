import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GameProvider } from './context/game.context.jsx'
import { HomeProvider } from './context/home.context.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomeProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </HomeProvider>
  </React.StrictMode>,
)
