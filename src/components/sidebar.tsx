import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import {
  MessageSquare,
  CheckSquare,
  BarChart3,
  Sun,
  Moon,
  Sparkles,
} from 'lucide-react';

interface SidebarProps {
  activePanel: 'chat' | 'tasks' | 'stats';
  setActivePanel: (panel: 'chat' | 'tasks' | 'stats') => void;
}

export default function Sidebar({ activePanel, setActivePanel }: SidebarProps) {
  const { theme, setTheme } = useTheme();

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-16 md:w-64 h-screen bg-card border-r flex flex-col"
    >
      <div className="p-4 border-b">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-6 h-6 text-primary" />
          <span className="hidden md:inline font-bold text-lg">Nova</span>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <Button
          variant={activePanel === 'chat' ? 'default' : 'ghost'}
          className="w-full justify-start"
          onClick={() => setActivePanel('chat')}
        >
          <MessageSquare className="h-5 w-5 md:mr-2" />
          <span className="hidden md:inline">Chat</span>
        </Button>
        <Button
          variant={activePanel === 'tasks' ? 'default' : 'ghost'}
          className="w-full justify-start"
          onClick={() => setActivePanel('tasks')}
        >
          <CheckSquare className="h-5 w-5 md:mr-2" />
          <span className="hidden md:inline">Tasks</span>
        </Button>
        <Button
          variant={activePanel === 'stats' ? 'default' : 'ghost'}
          className="w-full justify-start"
          onClick={() => setActivePanel('stats')}
        >
          <BarChart3 className="h-5 w-5 md:mr-2" />
          <span className="hidden md:inline">Stats</span>
        </Button>
      </nav>

      <div className="p-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <>
              <Sun className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Light Mode</span>
            </>
          ) : (
            <>
              <Moon className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Dark Mode</span>
            </>
          )}
        </Button>
      </div>
    </motion.aside>
  );
}