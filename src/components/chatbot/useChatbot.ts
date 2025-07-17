
import { useState, useRef, useEffect } from 'react';
import { Message, Intent, ConversationContext, QuickReply } from './types';
import { responses, quickReplies } from './responses';
import { detectIntent, generateConversationId, analyzeUserSentiment, extractUserInfo } from './utils';
import { supabase } from '@/integrations/supabase/client';

export const useChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [conversationId] = useState(generateConversationId());
  const [context, setContext] = useState<ConversationContext>({});
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: responses.greeting,
      isBot: true,
      timestamp: new Date(),
      quickReplies: quickReplies.greeting,
      conversationId,
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickReply = (reply: QuickReply) => {
    handleSendMessage(reply.text, reply.intent);
  };

  const handleSendMessage = async (messageText?: string, forcedIntent?: Intent) => {
    const messageContent = messageText || inputValue;
    if (!messageContent.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageContent,
      isBot: false,
      timestamp: new Date(),
      conversationId,
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Extract user information from message
    const userInfo = extractUserInfo(messageContent);
    if (userInfo.name || userInfo.email || userInfo.phone) {
      setContext(prev => ({
        ...prev,
        userInfo: { ...prev.userInfo, ...userInfo }
      }));
    }

    // Detect intent with context
    const intent = forcedIntent || detectIntent(messageContent, context);
    const sentiment = analyzeUserSentiment(messageContent);
    const isIssueRelated = intent === 'issue' || sentiment === 'negative';

    // Update context
    setContext(prev => ({
      ...prev,
      lastIntent: intent,
      followUpNeeded: ['pricing', 'services', 'webDevelopment', 'mobileDevelopment'].includes(intent)
    }));

    // Simulate typing delay with more realistic timing
    const typingDelay = Math.min(responses[intent].length * 20, 2000);
    
    setTimeout(async () => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: responses[intent],
        isBot: true,
        timestamp: new Date(),
        isIssue: isIssueRelated,
        quickReplies: quickReplies[intent] || [],
        conversationId,
      };

      setMessages(prev => [...prev, botResponse]);

      // Handle issue reporting with enhanced information
      if (isIssueRelated) {
        try {
          await supabase.functions.invoke('send-chatbot-issue', {
            body: {
              userMessage: messageContent,
              timestamp: new Date().toISOString(),
              userAgent: navigator.userAgent,
              conversationId,
              context,
              sentiment,
              intent,
              userInfo: context.userInfo,
            }
          });

          // Add contextual follow-up message
          setTimeout(() => {
            const followUpMessage: Message = {
              id: (Date.now() + 2).toString(),
              content: `Our support team has been notified and will reach out within 2 hours. In the meantime, feel free to ask me anything else!${context.userInfo?.email ? ` We'll contact you at ${context.userInfo.email}.` : ''}`,
              isBot: true,
              timestamp: new Date(),
              conversationId,
            };
            setMessages(prev => [...prev, followUpMessage]);
          }, 1000);
        } catch (error) {
          console.error('Error sending issue notification:', error);
        }
      }

      // Add personalized follow-up for certain intents
      if (intent === 'pricing' && !context.userInfo?.name) {
        setTimeout(() => {
          const followUpMessage: Message = {
            id: (Date.now() + 3).toString(),
            content: 'To provide you with the most accurate quote, could you share your name and project details? This helps us personalize our recommendations.',
            isBot: true,
            timestamp: new Date(),
            conversationId,
            quickReplies: [
              { id: '1', text: '💬 Share Project Details', intent: 'getQuote' },
              { id: '2', text: '📞 Schedule Call Instead', intent: 'scheduleCall' },
            ],
          };
          setMessages(prev => [...prev, followUpMessage]);
        }, 2000);
      }

      setIsLoading(false);
    }, typingDelay);
  };

  return {
    isOpen,
    setIsOpen,
    messages,
    inputValue,
    setInputValue,
    isLoading,
    messagesEndRef,
    context,
    conversationId,
    handleSendMessage,
    handleQuickReply,
  };
};
