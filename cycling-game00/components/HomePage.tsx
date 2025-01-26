import type React from "react"
import { useState } from "react"
import { Settings, BarcodeIcon as Garage, Trophy, ArrowLeft } from "lucide-react"
import Leaderboard from "./Leaderboard"
import SettingsModal from "./SettingsModal"
import GarageModal from "./GarageModal"
import FriendsList from "./FriendsList"
import "./HomePage.css"

interface HomePageProps {
  onStartGame: () => void
  onExit: () => void
}

const HomePage: React.FC<HomePageProps> = ({ onStartGame, onExit }) => {
  const [showLeaderboard, setShowLeaderboard] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [showGarage, setShowGarage] = useState(false)

  return (
    <div className="home-page">
      <div className="content-wrapper">
        <div className="left-section">
          <h1>Cycling Adventure</h1>
          <div className="menu-buttons">
            <button onClick={onStartGame} className="start-button">
              Start Game
            </button>
            <button onClick={() => setShowLeaderboard(true)} className="menu-button">
              <Trophy size={24} />
              Leaderboard
            </button>
            <button onClick={() => setShowSettings(true)} className="menu-button">
              <Settings size={24} />
              Settings
            </button>
            <button onClick={() => setShowGarage(true)} className="menu-button">
              <Garage size={24} />
              Garage
            </button>
            <button onClick={onExit} className="menu-button">
              <ArrowLeft size={24} />
              Exit
            </button>
          </div>
        </div>
        <div className="right-section">
          <FriendsList />
        </div>
      </div>
      {showLeaderboard && <Leaderboard onClose={() => setShowLeaderboard(false)} />}
      {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
      {showGarage && <GarageModal onClose={() => setShowGarage(false)} />}
    </div>
  )
}

export default HomePage

