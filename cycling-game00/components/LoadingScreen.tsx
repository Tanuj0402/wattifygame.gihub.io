import type React from "react"
import { useEffect, useState } from "react"
import "./LoadingScreen.css"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

const BACKGROUND_IMAGES = [
  "https://i.pinimg.com/236x/d6/ba/d8/d6bad87c1ad1f011a4ef99189cd9841f.jpg",
  "https://i.pinimg.com/474x/35/bf/ae/35bfae007a8b07e58af464d5cfad6662.jpg",
  "https://i.pinimg.com/236x/68/b6/5c/68b65cde69bb93fac98e54a15ec59351.jpg",
  "https://i.pinimg.com/736x/35/f4/c9/35f4c94f0518d675ef4efdab07390605.jpg",
]

const QUOTES = [
  "For every milestone achieved, a tree is planted to restore our planet.",
  "One small step for you, one giant leap for nature.",
  "Together, we cycle toward a brighter future.",
]

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [selectedImage] = useState(() => BACKGROUND_IMAGES[Math.floor(Math.random() * BACKGROUND_IMAGES.length)])
  const [selectedQuote] = useState(() => QUOTES[Math.floor(Math.random() * QUOTES.length)])

  useEffect(() => {
    const img = new Image()
    img.src = selectedImage
    img.onload = () => setImageLoaded(true)

    const progressTimer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(progressTimer)
          setTimeout(onLoadingComplete, 1000)
          return 100
        }
        return Math.min(oldProgress + 0.5, 100)
      })
    }, 50)

    return () => {
      clearInterval(progressTimer)
    }
  }, [onLoadingComplete, selectedImage])

  return (
    <div className={`loading-screen ${imageLoaded ? "image-loaded" : ""}`}>
      <div className="background-image" style={{ backgroundImage: `url(${selectedImage})` }} />
      <div className="quote-container">
        <p className="quote">
          {selectedQuote.split(" ").map((word, index) => (
            <React.Fragment key={index}>
              <span className="quote-word" style={{ animationDelay: `${index * 0.1}s` }}>
                {word}
              </span>
              {index < selectedQuote.split(" ").length - 1 && " "}
            </React.Fragment>
          ))}
        </p>
      </div>
      <div className="loading-overlay">
        <div className="loading-content">
          <div className="progress-label">Preparing your journey...</div>
          <div className="loading-bar-container">
            <div className="loading-bar" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="loading-text">{Math.floor(progress)}%</div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen

