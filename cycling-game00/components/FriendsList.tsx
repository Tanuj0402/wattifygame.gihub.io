import type React from "react"
import { useState } from "react"
import { User, Plus, MessageCircle } from "lucide-react"
import "./FriendsList.css"

interface Friend {
  id: string
  name: string
  isOnline: boolean
  avatar: string
}

const FriendsList: React.FC = () => {
  const [friends, setFriends] = useState<Friend[]>([
    { id: "1", name: "Alice", isOnline: true, avatar: "/placeholder.svg?height=40&width=40" },
    { id: "2", name: "Bob", isOnline: false, avatar: "/placeholder.svg?height=40&width=40" },
    { id: "3", name: "Charlie", isOnline: true, avatar: "/placeholder.svg?height=40&width=40" },
    { id: "4", name: "David", isOnline: false, avatar: "/placeholder.svg?height=40&width=40" },
  ])

  const [lobby, setLobby] = useState<string[]>([])

  const addToLobby = (friendId: string) => {
    if (!lobby.includes(friendId)) {
      setLobby([...lobby, friendId])
      // Here you would typically send a request to your backend to invite the friend
      console.log(`Friend ${friendId} added to lobby`)
    }
  }

  const startChat = (friendId: string) => {
    // Here you would typically open a chat window or navigate to a chat page
    console.log(`Starting chat with friend ${friendId}`)
  }

  return (
    <div className="friends-list">
      <h3>Friends</h3>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id} className={friend.isOnline ? "online" : "offline"}>
            <img src={friend.avatar || "/placeholder.svg"} alt={friend.name} className="friend-avatar" />
            <span className="friend-name">{friend.name}</span>
            <span className="status-indicator"></span>
            {friend.isOnline ? (
              <button
                className="add-to-lobby-btn"
                onClick={() => addToLobby(friend.id)}
                disabled={lobby.includes(friend.id)}
              >
                <Plus size={16} />
              </button>
            ) : (
              <button className="chat-btn" onClick={() => startChat(friend.id)}>
                <MessageCircle size={16} />
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FriendsList

