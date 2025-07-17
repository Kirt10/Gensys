
import React from 'react';
import { User, Settings } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const ProfileHeader = () => {
  const { user } = useAuth();

  const getDisplayName = () => {
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name;
    }
    return user?.email?.split('@')[0] || 'User';
  };

  const getInitials = () => {
    const name = getDisplayName();
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="bg-card rounded-lg border shadow-sm p-6 mb-6">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground text-xl font-semibold">
            {getInitials()}
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-foreground">{getDisplayName()}</h1>
          <p className="text-muted-foreground">{user?.email}</p>
          <div className="flex items-center mt-2 text-sm text-muted-foreground">
            <User className="w-4 h-4 mr-1" />
            <span>Client Account</span>
          </div>
        </div>
        <div className="flex items-center text-muted-foreground">
          <Settings className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
