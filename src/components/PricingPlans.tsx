import { pricingPlans } from '../lib/pricingPlans'
import { CheckCircle2 } from 'lucide-react'

export default function PricingPlans() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-center mb-2">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose your plan</h2>
        <p className="text-gray-500 text-base">Simple, transparent pricing. No hidden fees.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pricingPlans.map(plan => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border bg-white p-6 shadow-md flex flex-col transition-all duration-200 hover:scale-[1.025] ${plan.popular ? 'border-blue-600 ring-2 ring-blue-100' : 'border-gray-200'}`}
          >
            {plan.popular && (
              <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">Most popular</span>
            )}
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{plan.name}</h3>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-3xl font-bold text-gray-900">
                {plan.price === 0 ? 'Free' : plan.price === 'Custom' ? 'Custom' : `$${plan.price}`}
              </span>
              {plan.price !== 0 && plan.price !== 'Custom' && (
                <span className="text-gray-500 text-base">/ {plan.period}</span>
              )}
            </div>
            <p className="text-gray-600 mb-4 min-h-[40px]">{plan.description}</p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-auto w-full py-2 rounded-lg font-semibold transition-colors duration-150 ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
              onClick={() => alert('This is a demo!')}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
