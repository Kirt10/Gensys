
import { Intent, ConversationContext } from './types';
import { predefinedResponses } from './responses';

export const detectIntent = (message: string, context?: ConversationContext): Intent => {
  const lowerMessage = message.toLowerCase();
  
  // Enhanced intent detection with context awareness
  for (const [intent, keywords] of Object.entries(predefinedResponses)) {
    if (keywords.some(keyword => lowerMessage.includes(keyword))) {
      return intent as Intent;
    }
  }
  
  // Context-based follow-up detection
  if (context?.lastIntent) {
    if (lowerMessage.includes('yes') || lowerMessage.includes('sure') || lowerMessage.includes('okay')) {
      // User agreed to a follow-up suggestion
      if (context.lastIntent === 'services') return 'getQuote';
      if (context.lastIntent === 'pricing') return 'scheduleCall';
    }
  }
  
  return 'default';
};

export const generateConversationId = (): string => {
  return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const analyzeUserSentiment = (message: string): 'positive' | 'neutral' | 'negative' => {
  const positiveWords = ['great', 'awesome', 'excellent', 'perfect', 'love', 'amazing', 'fantastic'];
  const negativeWords = ['bad', 'terrible', 'awful', 'hate', 'problem', 'issue', 'broken', 'frustrating'];
  
  const lowerMessage = message.toLowerCase();
  const hasPositive = positiveWords.some(word => lowerMessage.includes(word));
  const hasNegative = negativeWords.some(word => lowerMessage.includes(word));
  
  if (hasPositive && !hasNegative) return 'positive';
  if (hasNegative && !hasPositive) return 'negative';
  return 'neutral';
};

export const extractUserInfo = (message: string): { name?: string; email?: string; phone?: string } => {
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
  const phoneRegex = /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/;
  
  const email = message.match(emailRegex)?.[0];
  const phone = message.match(phoneRegex)?.[0];
  
  // Simple name extraction (this could be improved with NLP)
  let name;
  if (message.toLowerCase().includes('my name is')) {
    name = message.split(/my name is/i)[1]?.trim().split(' ')[0];
  } else if (message.toLowerCase().includes("i'm ")) {
    name = message.split(/i'm /i)[1]?.trim().split(' ')[0];
  }
  
  return { name, email, phone };
};
