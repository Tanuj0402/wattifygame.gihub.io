import type React from "react"
import { useState } from "react"
import { X } from "lucide-react"
import "./GarageModal.css"

interface GarageModalProps {
  onClose: () => void
}

const GarageModal: React.FC<GarageModalProps> = ({ onClose }) => {
  const [selectedBike, setSelectedBike] = useState("bike1")

  const bikes = [
    { id: "bike1", name: "Standard Bike", image: "https://example.com/bike1.png" },
    { id: "bike2", name: "Mountain Bike", image: "https://example.com/bike2.png" },
    { id: "bike3", name: "Racing Bike", image: "https://example.com/bike3.png" },
  ]

  const handleSelectBike = (bikeId: string) => {
    setSelectedBike(bikeId)
    // Here you would typically save the selected bike to the game state
    console.log("Selected bike:", bikeId)
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>
        <h2>Garage</h2>
        <div className="bike-list">
          {bikes.map((bike) => (
            <div
              key={bike.id}
              className={`bike-item ${selectedBike === bike.id ? "selected" : ""}`}
              onClick={() => handleSelectBike(bike.id)}
            >
              <img src={bike.image || "/placeholder.svg"} alt={bike.name} />
              <p>{bike.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GarageModal

