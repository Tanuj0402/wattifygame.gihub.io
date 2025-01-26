import type React from "react"
import { useRef, useState, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"
import "./AudioPlayer.css"

interface AudioPlayerProps {
  src: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5 // Set initial volume to 50%
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={src} loop />
      <button onClick={togglePlay} className="audio-control">
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </div>
  )
}

export default AudioPlayer

