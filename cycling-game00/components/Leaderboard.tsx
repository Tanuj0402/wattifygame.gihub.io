import type React from "react"
import { X } from "lucide-react"
import "./Leaderboard.css"

interface LeaderboardProps {
  onClose: () => void
}

const Leaderboard: React.FC<LeaderboardProps> = ({ onClose }) => {
  // This would typically come from an API or database
  const leaderboardData = [
    { rank: 1, name: "Player 1", score: 1000 },
    { rank: 2, name: "Player 2", score: 950 },
    { rank: 3, name: "Player 3", score: 900 },
    { rank: 4, name: "Player 4", score: 850 },
    { rank: 5, name: "Player 5", score: 800 },
  ]

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>
        <h2>Leaderboard</h2>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((player) => (
              <tr key={player.rank}>
                <td>{player.rank}</td>
                <td>{player.name}</td>
                <td>{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Leaderboard

