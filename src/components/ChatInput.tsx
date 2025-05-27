import { useState } from 'react'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { Plus, Wrench, Mic, ArrowUp } from 'lucide-react'

interface ChatInputProps {
  onSendMessage: (content: string) => void
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    if (message.trim()) {
      onSendMessage(message.trim())
      setMessage('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="border-t border-gray-200 bg-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-white border border-gray-200 rounded-3xl shadow-sm">
          <div className="flex items-start p-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-400 hover:text-gray-600 shrink-0 mt-1"
            >
              <Plus className="w-5 h-5" />
            </Button>
            
            <div className="flex-1 mx-2">
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask anything"
                className="border-0 resize-none bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[24px] max-h-32"
                rows={1}
              />
            </div>
            
            <div className="flex items-center gap-2 shrink-0">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-400 hover:text-gray-600"
              >
                <Wrench className="w-4 h-4" />
              </Button>
              <span className="text-sm text-gray-400">Tools</span>
              
              {message.trim() ? (
                <Button 
                  onClick={handleSubmit}
                  size="icon" 
                  className="bg-black hover:bg-gray-800 text-white rounded-full w-8 h-8"
                >
                  <ArrowUp className="w-4 h-4" />
                </Button>
              ) : (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-400 hover:text-gray-600 rounded-full w-8 h-8"
                >
                  <Mic className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
        
        <div className="text-xs text-gray-500 text-center mt-2">
          ChatGPT can make mistakes. Check important info.
        </div>
      </div>
    </div>
  )
}