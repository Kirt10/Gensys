
import React from 'react';
import { useChatbot } from './chatbot/useChatbot';
import { ChatbotToggle } from './chatbot/ChatbotToggle';
import { ChatbotWindow } from './chatbot/ChatbotWindow';

const Chatbot = () => {
  const {
    isOpen,
    setIsOpen,
    messages,
    inputValue,
    setInputValue,
    isLoading,
    messagesEndRef,
    handleSendMessage,
    handleQuickReply,
  } = useChatbot();

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <ChatbotToggle 
        isOpen={isOpen} 
        onClick={() => setIsOpen(!isOpen)} 
      />

      {isOpen && (
        <ChatbotWindow
          messages={messages}
          isLoading={isLoading}
          messagesEndRef={messagesEndRef}
          inputValue={inputValue}
          onInputChange={setInputValue}
          onSendMessage={handleSendMessage}
          onKeyPress={handleKeyPress}
          onQuickReply={handleQuickReply}
        />
      )}
    </>
  );
};

export default Chatbot;
