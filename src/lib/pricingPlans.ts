export const pricingPlans = [
  {
    name: 'Free',
    price: 0,
    period: 'month',
    description: 'Get started with basic AI chat features.',
    features: [
      'Unlimited messages',
      'Basic AI model',
      'Access to preset GPTs',
      'Community support'
    ],
    cta: 'Start for free',
    popular: false
  },
  {
    name: 'Pro',
    price: 20,
    period: 'month',
    description: 'Unlock advanced AI and productivity tools.',
    features: [
      'Everything in Free',
      'Access to GPT-4.1',
      'Priority AI responses',
      'Custom GPTs',
      'File uploads',
      'Priority support'
    ],
    cta: 'Upgrade to Pro',
    popular: true
  },
  {
    name: 'Team',
    price: 50,
    period: 'month',
    description: 'Collaborate with your team and manage projects.',
    features: [
      'Everything in Pro',
      'Team workspaces',
      'Admin controls',
      'Shared chat history',
      'Advanced analytics',
      'SAML SSO'
    ],
    cta: 'Start Team Plan',
    popular: false
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with advanced needs and compliance.',
    features: [
      'Everything in Team',
      'Custom AI models',
      'Dedicated account manager',
      'Custom integrations',
      'Enterprise SLAs',
      'Security & compliance review'
    ],
    cta: 'Contact sales',
    popular: false
  }
]
