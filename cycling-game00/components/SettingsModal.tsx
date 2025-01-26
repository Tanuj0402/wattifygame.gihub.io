import type React from "react"
import { useState } from "react"
import { X } from "lucide-react"
import "./SettingsModal.css"

interface SettingsModalProps {
  onClose: () => void
}

const SettingsModal: React.FC<SettingsModalProps> = ({ onClose }) => {
  const [musicVolume, setMusicVolume] = useState(50)
  const [sfxVolume, setSfxVolume] = useState(50)

  const handleSave = () => {
    // Here you would typically save these settings to local storage or a backend
    console.log("Saving settings:", { musicVolume, sfxVolume })
    onClose()
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>
        <h2>Settings</h2>
        <div className="settings-form">
          <div className="setting-item">
            <label htmlFor="music-volume">Music Volume</label>
            <input
              type="range"
              id="music-volume"
              min="0"
              max="100"
              value={musicVolume}
              onChange={(e) => setMusicVolume(Number(e.target.value))}
            />
            <span>{musicVolume}%</span>
          </div>
          <div className="setting-item">
            <label htmlFor="sfx-volume">SFX Volume</label>
            <input
              type="range"
              id="sfx-volume"
              min="0"
              max="100"
              value={sfxVolume}
              onChange={(e) => setSfxVolume(Number(e.target.value))}
            />
            <span>{sfxVolume}%</span>
          </div>
          <button onClick={handleSave} className="save-button">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  )
}

export default SettingsModal

