
import React, { useState } from 'react';
import { 
  Star, 
    Calendar, 
      Users, 
        Award, 
          Plus, 
            Send, 
              Clock, 
                Hash, 
                  TrendingUp,
                    User,
                      Search,
                        Filter,
                          Settings,
                            Bell,
                              Shield,
                                Zap,
                                  BookOpen,
                                    Code,
                                      Palette,
                                        Briefcase
                                        } from 'lucide-react';



// Types
interface EndorsementTag {
    id: string;
      label: string;
        icon: React.ComponentType<{ className?: string }>;
          color: string;
}

interface Channel {
    id: string;
      name: string;
        members: string;
          growth: string;
}

interface Endorsement {
    id: number;
      from: string;
        to: string;
          tag: string;
            message: string;
              timestamp: string;
                onchain: boolean;
}

interface ScheduledCast {
    id: number;
      content: string;
        channels: string[];
          time: string;
            status: string;
}

interface StatCard {
    label: string;
      value: string;
        change: string;
          icon: React.ComponentType<{ className?: string }>;
            color: string;
}

interface Tab {
    id: string;
      label: string;
        icon: React.ComponentType<{ className?: string }>;
}

}
}
}
}
}
}



// Header Component
const Header: React.FC = () => {
    return (
          <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                                  <div className="flex items-center space-x-3">
                                              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                                            <Shield className="w-5 h-5 text-white" />
                                                                        </div>
                                                                                    <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                                                                  CastCred
                                                                                                              </h1>
                                                                                                                        </div>
                                                                                                                                  <div className="flex items-center space-x-4">
                                                                                                                                              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                                                                                                                                                            <Bell className="w-5 h-5" />
                                                                                                                                                                        </button>
                                                                                                                                                                                    <button className="p-2 text-gray-400 hover:text-white transition-colors">
                                                                                                                                                                                                  <Settings className="w-5 h-5" />
                                                                                                                                                                                                              </button>
                                                                                                                                                                                                                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                      </header>
    );
};



    )
}