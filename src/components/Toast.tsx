import React from 'react'

export default function Toast({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-black text-white rounded-full shadow-lg animate-fade-in">
      {children}
    </div>
  )
}
