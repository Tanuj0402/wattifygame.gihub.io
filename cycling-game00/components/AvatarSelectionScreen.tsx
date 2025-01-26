import type React from "react"
import { useState } from "react"
import "./AvatarSelectionScreen.css"

interface AvatarSelectionScreenProps {
  onCharacterSelected: (character: string) => void
}

const characters = [
  {
    id: "pedalprowler",
    name: "PedalProwler",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatar%201-kbm7Aq08rHSLU6eVQOcN2xakmsKLNf.png",
    description: "Master of urban cycling techniques",
  },
  {
    id: "chainchaser",
    name: "ChainChaser",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatar%202-81f5alc7IrewRUVgj4UCIF9nmjxJeS.png",
    description: "Relentless pursuer of cycling excellence",
  },
  {
    id: "spinspecter",
    name: "SpinSpecter",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatar%203-5YFjgH7oVFycNW5Mmku939nx12y1Jj.png",
    description: "Mysterious master of wheel control",
  },
  {
    id: "saddlenomad",
    name: "SaddleNomad",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatar%204-nioY6kbbw6sRDv0pml9KK8oxneKSCl.png",
    description: "Wanderer of the cycling paths",
  },
  {
    id: "gearglider",
    name: "GearGlider",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatar%205-CuUE14LXKtXT6oXpfKN7lAqMPEJmHE.png",
    description: "Smooth operator of mechanical precision",
  },
  {
    id: "velovagrant",
    name: "VeloVagrant",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatar%206-Fk2rabf19Wg3x8eaP89lnZb5ANdUfx.png",
    description: "Free spirit of the cycling world",
  },
  {
    id: "crankcruiser",
    name: "CrankCruiser",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatar%207-mrSZfW3byhdIajWdpxNwVfeJAMZn9L.png",
    description: "Seasoned rider of the long roads",
  },
  {
    id: "breezestrider",
    name: "BreezeStrider",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatar%208-qwWOdxO9KDxQ3LcfXCSHJDf5P5qwS7.png",
    description: "Swift and graceful cycling master",
  },
]

const AvatarSelectionScreen: React.FC<AvatarSelectionScreenProps> = ({ onCharacterSelected }) => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null)
  const [hoveredCharacter, setHoveredCharacter] = useState<string | null>(null)

  const handleSelection = (characterId: string) => {
    setSelectedCharacter(characterId)
  }

  const handleConfirm = () => {
    if (selectedCharacter) {
      onCharacterSelected(selectedCharacter)
    }
  }

  return (
    <div className="avatar-selection-screen">
      <div className="selection-content">
        <h1 className="avatar-selection-title">Choose Your Rider</h1>
        <div className="character-grid">
          {characters.map((character) => (
            <div
              key={character.id}
              className={`character-option ${selectedCharacter === character.id ? "selected" : ""}`}
              onClick={() => handleSelection(character.id)}
              onMouseEnter={() => setHoveredCharacter(character.id)}
              onMouseLeave={() => setHoveredCharacter(null)}
            >
              <div className="character-image-container">
                <div className="character-image" style={{ backgroundImage: `url(${character.image})` }} />
              </div>
              <div className="character-info">
                <span className="character-name">{character.name}</span>
                {hoveredCharacter === character.id && (
                  <span className="character-description">{character.description}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className="confirm-button" onClick={handleConfirm} disabled={!selectedCharacter}>
          {selectedCharacter ? "Confirm Selection" : "Select a Rider"}
        </button>
      </div>
    </div>
  )
}

export default AvatarSelectionScreen

