import { useState } from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarFallback } from './ui/avatar'
import { ChevronDown, Settings, User } from 'lucide-react'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

interface ChatAreaProps {
  messages: Message[]
  onSendMessage: (content: string, isUser: boolean) => void
}

export default function ChatArea({ messages, onSendMessage }: ChatAreaProps) {
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async (content: string) => {
    // Add user message
    onSendMessage(content, true)
    
    // Simulate AI typing
    setIsTyping(true)
    
    // Simulate AI response after a delay
    setTimeout(() => {
      setIsTyping(false)
      onSendMessage(
        "I understand you'd like to chat! This is a demo interface inspired by ChatGPT. How can I help you today?",
        false
      )
    }, 1500)
  }

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-3 flex items-center justify-between bg-white">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold text-gray-900">ChatGPT</h1>
          <span className="ml-1 text-sm text-gray-500">4.1</span>
          <ChevronDown className="w-4 h-4 ml-1 text-gray-400" />
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Settings className="w-5 h-5" />
          </Button>
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-blue-600 text-white text-sm">
              <User className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <div className="text-center max-w-md mx-auto px-6">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">
                Hey, Kai. Ready to dive in?
              </h2>
            </div>
          </div>
        ) : (
          <div className="space-y-6 p-6">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isTyping && (
              <div className="flex items-start gap-3">
                <Avatar className="w-8 h-8 shrink-0">
                  <AvatarFallback className="bg-gray-100 text-gray-600 text-sm">
                    AI
                  </AvatarFallback>
                </Avatar>
                <div className="bg-gray-100 rounded-lg px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Chat Input */}
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  )
}