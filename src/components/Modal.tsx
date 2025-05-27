import { X } from 'lucide-react'
import PricingPlans from './PricingPlans'

interface ModalProps {
  title: string
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ title, onClose, children }: ModalProps) {
  // If the modal is for pricing plans, show the PricingPlans component
  const isPlans = title.toLowerCase().includes('plan')
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-6 relative animate-fade-in">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-semibold mb-4 text-gray-900">{title}</h2>
        {isPlans ? <PricingPlans /> : children}
      </div>
    </div>
  )
}
