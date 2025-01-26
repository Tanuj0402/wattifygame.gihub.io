import type React from "react"
import { useRef, useEffect } from "react"
import "./IntroVideo.css"

interface IntroVideoProps {
  onVideoEnd: () => void
}

const IntroVideo: React.FC<IntroVideoProps> = ({ onVideoEnd }) => {
  const playerRef = useRef<YT.Player | null>(null)

  useEffect(() => {
    // Load the YouTube iframe API
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    // Create YouTube player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new YT.Player("youtube-player", {
        height: "100%",
        width: "100%",
        videoId: "3L2UjCqqyLE", // YouTube video ID
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
        },
        events: {
          onReady: (event) => {
            event.target.playVideo()
          },
          onStateChange: (event) => {
            if (event.data === YT.PlayerState.ENDED) {
              onVideoEnd()
            }
          },
        },
      })
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
      }
    }
  }, [onVideoEnd])

  return (
    <div className="intro-video-container">
      <div id="youtube-player"></div>
    </div>
  )
}

export default IntroVideo

