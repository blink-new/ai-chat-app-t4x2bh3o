import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { ScrollArea } from './ui/scroll-area'
import { Separator } from './ui/separator'
import { 
  Settings, 
  MessageSquarePlus, 
  Search, 
  Library, 
  Bot,
  User,
  FileText,
  Code,
  Megaphone,
  BookOpen,
  Lightbulb,
  CreditCard
} from 'lucide-react'
import { chatHistory } from '../lib/mockData'

interface SidebarProps {
  onNewChat: () => void
  onSwitchChat: (id: string) => void
  onShowModal: (type: string, title: string, content: string) => void
  onShowToast: (msg: string) => void
  currentChatId: string | null
}

export default function Sidebar({ onNewChat, onSwitchChat, onShowModal, onShowToast, currentChatId }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'coach': return <User className="w-4 h-4" />
      case 'writer': return <FileText className="w-4 h-4" />
      case 'advisor': return <Lightbulb className="w-4 h-4" />
      case 'gpt': return <Bot className="w-4 h-4" />
      case 'developer': return <Code className="w-4 h-4" />
      case 'announcement': return <Megaphone className="w-4 h-4" />
      case 'assistant': return <BookOpen className="w-4 h-4" />
      default: return <MessageSquarePlus className="w-4 h-4" />
    }
  }

  // Filter chats by search
  const filter = (str: string) => str.toLowerCase().includes(searchQuery.toLowerCase())

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="p-3 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <Button variant="ghost" size="icon" className="text-gray-600" onClick={() => onShowToast('Settings coming soon!')}>
            <Settings className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-600" onClick={onNewChat}>
            <MessageSquarePlus className="w-5 h-5" />
          </Button>
        </div>
        
        <Button 
          onClick={onNewChat}
          variant="ghost" 
          className="w-full justify-start text-gray-700 hover:bg-gray-100"
        >
          <MessageSquarePlus className="w-4 h-4 mr-2" />
          New chat
        </Button>
        
        <div className="relative mt-3">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search chats"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-white border-gray-200"
          />
        </div>
        
        <Button 
          variant="ghost" 
          className="w-full justify-start text-gray-700 hover:bg-gray-100 mt-2"
          onClick={() => onShowModal('library', 'Library', 'Browse your saved prompts, files, and resources here. (Demo)')}
        >
          <Library className="w-4 h-4 mr-2" />
          Library
        </Button>
      </div>

      {/* Chat History */}
      <ScrollArea className="flex-1 px-3">
        <div className="py-3">
          {/* Preset GPTs */}
          <div className="mb-6">
            {chatHistory.presetGPTs.filter(gpt => filter(gpt.name)).map((gpt) => (
              <Button
                key={gpt.id}
                variant={currentChatId === gpt.id ? 'secondary' : 'ghost'}
                className="w-full justify-start text-gray-700 hover:bg-gray-100 mb-1 h-auto py-2"
                onClick={() => onSwitchChat(gpt.id)}
              >
                {getCategoryIcon(gpt.category)}
                <span className="ml-2 text-left truncate flex-1">{gpt.name}</span>
              </Button>
            ))}
          </div>

          <Separator className="my-4" />

          {/* Recent Chats */}
          <div className="mb-4">
            <h3 className="text-xs font-medium text-gray-500 mb-2 px-2">Today</h3>
            {chatHistory.today.filter(chat => filter(chat.title)).map((chat) => (
              <Button
                key={chat.id}
                variant={currentChatId === chat.id ? 'secondary' : 'ghost'}
                className="w-full justify-start text-gray-700 hover:bg-gray-100 mb-1 h-auto py-2"
                onClick={() => onSwitchChat(chat.id)}
              >
                <span className="text-left truncate">{chat.title}</span>
              </Button>
            ))}
          </div>

          <div className="mb-4">
            <h3 className="text-xs font-medium text-gray-500 mb-2 px-2">Yesterday</h3>
            {chatHistory.yesterday.filter(chat => filter(chat.title)).map((chat) => (
              <Button
                key={chat.id}
                variant={currentChatId === chat.id ? 'secondary' : 'ghost'}
                className="w-full justify-start text-gray-700 hover:bg-gray-100 mb-1 h-auto py-2"
                onClick={() => onSwitchChat(chat.id)}
              >
                <span className="text-left truncate">{chat.title}</span>
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="p-3 border-t border-gray-200">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-gray-700 hover:bg-gray-100"
          onClick={() => onShowModal('plans', 'View Plans', 'Upgrade to Plus for unlimited access and team features! (Demo)')}
        >
          <CreditCard className="w-4 h-4 mr-2" />
          View plans
        </Button>
        <div className="text-xs text-gray-500 mt-2 px-2">
          Unlimited access, team
        </div>
      </div>
    </div>
  )
}
