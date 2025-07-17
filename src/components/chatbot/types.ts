
export interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
  isIssue?: boolean;
  quickReplies?: QuickReply[];
  conversationId?: string;
}

export interface QuickReply {
  id: string;
  text: string;
  intent: Intent;
}

export interface ConversationContext {
  lastIntent?: Intent;
  userInfo?: {
    name?: string;
    email?: string;
    phone?: string;
  };
  inquiryType?: string;
  followUpNeeded?: boolean;
}

export type Intent = 
  | 'greeting' 
  | 'services' 
  | 'webDevelopment' 
  | 'mobileDevelopment' 
  | 'uiuxDesign' 
  | 'database' 
  | 'cloud' 
  | 'about' 
  | 'pricing' 
  | 'contact' 
  | 'portfolio' 
  | 'process' 
  | 'technologies' 
  | 'issue' 
  | 'getQuote'
  | 'scheduleCall'
  | 'moreInfo'
  | 'default';
