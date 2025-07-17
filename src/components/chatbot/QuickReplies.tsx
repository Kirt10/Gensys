
import React from 'react';
import { Button } from '@/components/ui/button';
import { QuickReply } from './types';

interface QuickRepliesProps {
  quickReplies: QuickReply[];
  onQuickReply: (reply: QuickReply) => void;
  disabled?: boolean;
}

export const QuickReplies = ({ quickReplies, onQuickReply, disabled }: QuickRepliesProps) => {
  if (!quickReplies.length) return null;

  return (
    <div className="px-4 pb-4">
      <div className="flex flex-wrap gap-2">
        {quickReplies.map((reply) => (
          <Button
            key={reply.id}
            variant="outline"
            size="sm"
            className="text-xs transition-all duration-200 hover:scale-105 hover:shadow-md"
            onClick={() => onQuickReply(reply)}
            disabled={disabled}
          >
            {reply.text}
          </Button>
        ))}
      </div>
    </div>
  );
};
