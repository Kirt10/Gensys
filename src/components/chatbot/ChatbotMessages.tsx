
import React from 'react';
import { Bot, User, AlertCircle } from 'lucide-react';
import { Message } from './types';
import { QuickReplies } from './QuickReplies';

interface ChatbotMessagesProps {
  messages: Message[];
  isLoading: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement>;
  onQuickReply: (reply: any) => void;
}

export const ChatbotMessages = ({ messages, isLoading, messagesEndRef, onQuickReply }: ChatbotMessagesProps) => {
  return (
    <div className="h-80 overflow-y-auto px-4 pb-4 space-y-4">
      {messages.map((message, index) => (
        <div key={message.id}>
          <div
            className={`flex items-start gap-2 ${
              message.isBot ? 'justify-start' : 'justify-end'
            }`}
          >
            {message.isBot && (
              <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                <Bot className="h-4 w-4 text-primary" />
              </div>
            )}
            <div
              className={`max-w-[85%] p-3 rounded-lg ${
                message.isBot
                  ? 'bg-muted text-foreground'
                  : 'bg-primary text-primary-foreground'
              }`}
            >
              <p className="text-sm whitespace-pre-line leading-relaxed">{message.content}</p>
              {message.isIssue && (
                <div className="flex items-center gap-1 mt-2 text-xs opacity-80">
                  <AlertCircle className="h-3 w-3" />
                  Issue reported to support team
                </div>
              )}
              {message.timestamp && (
                <div className="text-xs opacity-60 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              )}
            </div>
            {!message.isBot && (
              <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                <User className="h-4 w-4 text-primary" />
              </div>
            )}
          </div>
          
          {/* Quick replies for bot messages */}
          {message.isBot && message.quickReplies && message.quickReplies.length > 0 && 
           index === messages.length - 1 && !isLoading && (
            <div className="mt-3 ml-12">
              <QuickReplies 
                quickReplies={message.quickReplies} 
                onQuickReply={onQuickReply}
                disabled={isLoading}
              />
            </div>
          )}
        </div>
      ))}
      
      {isLoading && (
        <div className="flex items-start gap-2">
          <div className="bg-primary/10 p-2 rounded-full">
            <Bot className="h-4 w-4 text-primary" />
          </div>
          <div className="bg-muted p-3 rounded-lg">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};
