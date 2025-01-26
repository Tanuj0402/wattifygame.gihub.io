import type React from "react"
import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import Cycle from "./Cycle"
import Background from "./Background"
import IntroVideo from "./IntroVideo"
import AudioPlayer from "./AudioPlayer"
import HomePage from "./HomePage"
import LoadingScreen from "./LoadingScreen"
import AvatarSelectionScreen from "./AvatarSelectionScreen"
import "./Game.css"

const Game: React.FC = () => {
  const [gameState, setGameState] = useState<"loading" | "character-selection" | "home" | "intro" | "playing">(
    "loading",
  )
  const [distance, setDistance] = useState(0)
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null)

  useEffect(() => {
    if (gameState === "playing") {
      const timer = setInterval(() => {
        setDistance((prevDistance) => prevDistance + 1)
      }, 100)

      return () => clearInterval(timer)
    }
  }, [gameState])

  const handleLoadingComplete = () => {
    setGameState("character-selection")
  }

  const handleCharacterSelected = (characterId: string) => {
    setSelectedCharacter(characterId)
    setGameState("home")
  }

  const handleStartGame = () => {
    setGameState("intro")
  }

  const handleIntroEnd = () => {
    setGameState("playing")
  }

  const handleSkipIntro = () => {
    setGameState("playing")
  }

  const handleExit = () => {
    // Here you would typically handle exiting the game
    console.log("Exiting game")
  }

  const handleBackToHome = () => {
    setGameState("home")
    setDistance(0) // Reset the distance when going back to home
  }

  if (gameState === "loading") {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  if (gameState === "character-selection") {
    return <AvatarSelectionScreen onCharacterSelected={handleCharacterSelected} />
  }

  if (gameState === "home") {
    return <HomePage onStartGame={handleStartGame} onExit={handleExit} />
  }

  if (gameState === "intro") {
    return (
      <div className="intro-container">
        <IntroVideo onVideoEnd={handleIntroEnd} />
        <button className="skip-button" onClick={handleSkipIntro}>
          Skip Intro
        </button>
      </div>
    )
  }

  return (
    <div className="game-container">
      <AudioPlayer src="https://example.com/path-to-your-background-music.mp3" />
      <button className="back-button" onClick={handleBackToHome}>
        <ArrowLeft size={24} />
        Back
      </button>
      <div className="game-stats">
        <span>Distance: {distance} m</span>
      </div>
      <div className="game-area">
        <Background />
        <Cycle characterId={selectedCharacter || "speedy"} />
      </div>
    </div>
  )
}

export default Game

