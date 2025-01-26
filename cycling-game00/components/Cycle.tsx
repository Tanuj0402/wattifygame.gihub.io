import type React from "react"
import "./Cycle.css"

interface CycleProps {
  characterId: string
}

const characterImages: { [key: string]: string } = {
  speedy: "/placeholder.svg?height=100&width=100",
  enduro: "/placeholder.svg?height=100&width=100",
  mountain: "/placeholder.svg?height=100&width=100",
  racer: "/placeholder.svg?height=100&width=100",
  trick: "/placeholder.svg?height=100&width=100",
  urban: "/placeholder.svg?height=100&width=100",
  downhill: "/placeholder.svg?height=100&width=100",
  cross: "/placeholder.svg?height=100&width=100",
}

const Cycle: React.FC<CycleProps> = ({ characterId }) => {
  const characterImage = characterImages[characterId] || characterImages.speedy

  return (
    <div className="cycle">
      <img src={characterImage || "/placeholder.svg"} alt={`${characterId} cyclist`} />
    </div>
  )
}

export default Cycle

