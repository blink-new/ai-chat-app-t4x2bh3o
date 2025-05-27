import { useState } from 'react'
import Sidebar from './components/Sidebar'
import ChatArea from './components/ChatArea'
import Modal from './components/Modal'
import Toast from './components/Toast'
import { chatHistory, mockMessages } from './lib/mockData'

export interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

export interface ChatMeta {
  id: string
  title: string
  type: 'gpt' | 'chat'
}

const getAllChats = () => {
  // Flatten all chats and GPTs into a single list
  const gpts = chatHistory.presetGPTs.map(gpt => ({
    id: gpt.id,
    title: gpt.name,
    type: 'gpt' as const
  }))
  const today = chatHistory.today.map(chat => ({
    id: chat.id,
    title: chat.title,
    type: 'chat' as const
  }))
  const yesterday = chatHistory.yesterday.map(chat => ({
    id: chat.id,
    title: chat.title,
    type: 'chat' as const
  }))
  return [...gpts, ...today, ...yesterday]
}

function App() {
  const allChats = getAllChats()
  const [currentChatId, setCurrentChatId] = useState<string>(allChats[0].id)
  const [chats, setChats] = useState<Record<string, Message[]>>(() => {
    const obj: Record<string, Message[]> = {}
    allChats.forEach(chat => {
      obj[chat.id] = mockMessages[chat.id] || []
    })
    return obj
  })
  const [modal, setModal] = useState<null | { type: string, title: string, content: string }>(null)
  const [toast, setToast] = useState<null | string>(null)

  const handleSwitchChat = (chatId: string) => {
    setCurrentChatId(chatId)
  }

  const handleNewChat = () => {
    // Create a new chat with a unique id
    const newId = 'chat-' + Date.now()
    setChats(prev => ({ ...prev, [newId]: [] }))
    setCurrentChatId(newId)
  }

  const handleSendMessage = (content: string, isUser: boolean) => {
    setChats(prev => ({
      ...prev,
      [currentChatId]: [
        ...(prev[currentChatId] || []),
        {
          id: Date.now().toString(),
          content,
          isUser,
          timestamp: new Date()
        }
      ]
    }))
  }

  // Modal/Toast handlers
  const showModal = (type: string, title: string, content: string) => setModal({ type, title, content })
  const closeModal = () => setModal(null)
  const showToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(null), 2000)
  }

  return (
    <div className="h-screen flex bg-white">
      <Sidebar
        onNewChat={handleNewChat}
        onSwitchChat={handleSwitchChat}
        onShowModal={showModal}
        onShowToast={showToast}
        currentChatId={currentChatId}
      />
      <ChatArea
        messages={chats[currentChatId] || []}
        onSendMessage={handleSendMessage}
        onShowModal={showModal}
        onShowToast={showToast}
      />
      {modal && (
        <Modal title={modal.title} onClose={closeModal}>
          <div className="text-gray-700 text-base whitespace-pre-line">{modal.content}</div>
        </Modal>
      )}
      {toast && <Toast>{toast}</Toast>}
    </div>
  )
}

export default App
