import { Avatar, AvatarFallback } from './ui/avatar'
import { User } from 'lucide-react'

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

interface ChatMessageProps {
  message: Message
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className="flex items-start gap-3">
      <Avatar className="w-8 h-8 shrink-0">
        <AvatarFallback className={message.isUser ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"}>
          {message.isUser ? <User className="w-4 h-4" /> : "AI"}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1 space-y-1">
        <div className="text-sm font-medium text-gray-900">
          {message.isUser ? "You" : "ChatGPT"}
        </div>
        
        <div className="text-gray-700 leading-relaxed">
          {message.content}
        </div>
        
        <div className="text-xs text-gray-500">
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
    </div>
  )
}