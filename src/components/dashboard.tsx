import { useState } from 'react';
import { motion } from 'framer-motion';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Sidebar from '@/components/sidebar';
import ChatInterface from '@/components/chat-interface';
import TasksPanel from '@/components/tasks-panel';
import StatsPanel from '@/components/stats-panel';
import { useTheme } from '@/components/theme-provider';

export default function Dashboard() {
  const { theme } = useTheme();
  const [activePanel, setActivePanel] = useState<'chat' | 'tasks' | 'stats'>(
    'chat'
  );

  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="flex h-screen overflow-hidden">
        <Sidebar activePanel={activePanel} setActivePanel={setActivePanel} />
        <motion.main
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex-1 overflow-auto bg-background"
        >
          <div className="container mx-auto p-4 md:p-6 space-y-6">
            {activePanel === 'chat' && <ChatInterface />}
            {activePanel === 'tasks' && <TasksPanel />}
            {activePanel === 'stats' && <StatsPanel />}
          </div>
        </motion.main>
      </div>
    </DragDropContext>
  );
}