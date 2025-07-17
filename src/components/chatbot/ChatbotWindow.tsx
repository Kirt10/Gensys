
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot } from 'lucide-react';
import { ChatbotMessages } from './ChatbotMessages';
import { ChatbotInput } from './ChatbotInput';
import { Message, QuickReply } from './types';

interface ChatbotWindowProps {
  messages: Message[];
  isLoading: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement>;
  inputValue: string;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  onQuickReply: (reply: QuickReply) => void;
}

export const ChatbotWindow = ({
  messages,
  isLoading,
  messagesEndRef,
  inputValue,
  onInputChange,
  onSendMessage,
  onKeyPress,
  onQuickReply,
}: ChatbotWindowProps) => {
  return (
    <div className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-2rem)] animate-scale-in">
      <Card className="shadow-2xl border-0 bg-card">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Bot className="h-6 w-6 text-primary" />
            Digital Solutions Assistant
            <Badge variant="secondary" className="ml-auto">Online</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ChatbotMessages 
            messages={messages} 
            isLoading={isLoading} 
            messagesEndRef={messagesEndRef}
            onQuickReply={onQuickReply}
          />
          <ChatbotInput
            value={inputValue}
            onChange={onInputChange}
            onSend={onSendMessage}
            onKeyPress={onKeyPress}
            disabled={isLoading}
          />
        </CardContent>
      </Card>
    </div>
  );
};
