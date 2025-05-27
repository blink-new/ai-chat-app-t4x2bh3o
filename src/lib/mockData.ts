export const chatHistory = {
  presetGPTs: [
    { id: 'cold-email', name: 'Cold Email Coach', category: 'coach' },
    { id: 'adam-writer', name: 'Adam the Post Writer', category: 'writer' },
    { id: 'product-advisor', name: 'Product-Market Fit Advisor', category: 'advisor' },
    { id: 'bookworm', name: 'BookwormGPT', category: 'gpt' },
    { id: 'prompt-enhancer', name: 'Prompt Enhancer for Coding', category: 'developer' },
    { id: 'feature-announcement', name: 'Feature Announcement Writer', category: 'announcement' },
    { id: 'gpts', name: 'GPTs', category: 'gpt' },
    { id: 'sora', name: 'Sora', category: 'assistant' },
    { id: 'new-project', name: 'New project', category: 'default' },
    { id: 'coding-agent', name: 'coding agent', category: 'developer' }
  ],
  today: [
    { id: 'emoji-update', title: 'Emoji Update Request' },
    { id: 'domain-suggestions', title: 'Domain Suggestions for Tuesday' },
    { id: 'blink-update', title: 'Blink Update Summary' },
    { id: 'model-card', title: 'Model Card Design Features' }
  ],
  yesterday: [
    { id: 'password-manager', title: 'Password Manager App Design' },
    { id: 'secure-app', title: 'Secure App Design' },
    { id: 'ecstatic-clarification', title: 'Ecstatic clarification' },
    { id: 'newborn-visit', title: 'Newborn Visit Guidelines' }
  ]
}

export const mockMessages: Record<string, Array<{id: string, content: string, isUser: boolean, timestamp: Date}>> = {
  'cold-email': [
    { id: '1', content: 'How do I write a cold email that gets replies?', isUser: true, timestamp: new Date() },
    { id: '2', content: 'Start with a personalized greeting, keep it concise, and offer clear value. Would you like a template?', isUser: false, timestamp: new Date() }
  ],
  'adam-writer': [
    { id: '1', content: 'Write a LinkedIn post about remote work benefits.', isUser: true, timestamp: new Date() },
    { id: '2', content: 'Remote work increases productivity, flexibility, and work-life balance. Here’s a draft post...', isUser: false, timestamp: new Date() }
  ],
  'product-advisor': [
    { id: '1', content: 'How do I find product-market fit?', isUser: true, timestamp: new Date() },
    { id: '2', content: 'Talk to users, iterate quickly, and measure retention. Want a checklist?', isUser: false, timestamp: new Date() }
  ],
  'bookworm': [
    { id: '1', content: 'Recommend a book for startup founders.', isUser: true, timestamp: new Date() },
    { id: '2', content: '"The Lean Startup" by Eric Ries is a must-read for founders.', isUser: false, timestamp: new Date() }
  ],
  'prompt-enhancer': [
    { id: '1', content: 'How can I improve my AI prompts?', isUser: true, timestamp: new Date() },
    { id: '2', content: 'Be specific, provide context, and test variations. Need examples?', isUser: false, timestamp: new Date() }
  ],
  'feature-announcement': [
    { id: '1', content: 'Draft a feature announcement for our new dashboard.', isUser: true, timestamp: new Date() },
    { id: '2', content: 'Excited to announce our new dashboard! Here’s a draft you can use...', isUser: false, timestamp: new Date() }
  ],
  'gpts': [
    { id: '1', content: 'What are GPTs?', isUser: true, timestamp: new Date() },
    { id: '2', content: 'GPTs are Generative Pre-trained Transformers, a type of AI model for language tasks.', isUser: false, timestamp: new Date() }
  ],
  'sora': [
    { id: '1', content: 'What is Sora?', isUser: true, timestamp: new Date() },
    { id: '2', content: 'Sora is an AI video model by OpenAI. Want to see a demo?', isUser: false, timestamp: new Date() }
  ],
  'new-project': [
    { id: '1', content: 'Start a new project for me.', isUser: true, timestamp: new Date() },
    { id: '2', content: 'Sure! What’s your project about?', isUser: false, timestamp: new Date() }
  ],
  'coding-agent': [
    { id: '1', content: 'Can you write a Python script to sort a list?', isUser: true, timestamp: new Date() },
    { id: '2', content: 'Absolutely! Here’s a simple Python script for sorting a list...', isUser: false, timestamp: new Date() }
  ],
  'emoji-update': [
    { id: '1', content: 'Can you add new emojis to our chat app?', isUser: true, timestamp: new Date() },
    { id: '2', content: 'Of course! Which emojis would you like to add?', isUser: false, timestamp: new Date() }
  ],
  'domain-suggestions': [
    { id: '1', content: 'Suggest domains for a travel startup.', isUser: true, timestamp: new Date() },
    { id: '2', content: 'How about travelgenius.com or tripster.io?', isUser: false, timestamp: new Date() }
  ],
  'blink-update': [
    { id: '1', content: 'What’s new in the latest Blink update?', isUser: true, timestamp: new Date() },
    { id: '2', content: 'We’ve improved performance and added new features. Want details?', isUser: false, timestamp: new Date() }
  ],
  'model-card': [
    { id: '1', content: 'How do I design a model card?', isUser: true, timestamp: new Date() },
    { id: '2', content: 'A model card should include intended use, limitations, and metrics. Need a template?', isUser: false, timestamp: new Date() }
  ],
  'password-manager': [
    { id: '1', content: 'Design a password manager app.', isUser: true, timestamp: new Date() },
    { id: '2', content: 'Here’s a wireframe and feature list for a password manager app...', isUser: false, timestamp: new Date() }
  ],
  'secure-app': [
    { id: '1', content: 'How do I secure my app?', isUser: true, timestamp: new Date() },
    { id: '2', content: 'Use HTTPS, validate inputs, and enable 2FA. Want a security checklist?', isUser: false, timestamp: new Date() }
  ],
  'ecstatic-clarification': [
    { id: '1', content: 'What does “ecstatic” mean?', isUser: true, timestamp: new Date() },
    { id: '2', content: '“Ecstatic” means feeling or expressing overwhelming happiness.', isUser: false, timestamp: new Date() }
  ],
  'newborn-visit': [
    { id: '1', content: 'What are the guidelines for a newborn visit?', isUser: true, timestamp: new Date() },
    { id: '2', content: 'Check feeding, weight, and jaundice. Would you like a checklist?', isUser: false, timestamp: new Date() }
  ]
}
