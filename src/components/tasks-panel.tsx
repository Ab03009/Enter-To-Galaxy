import { useState } from 'react';
import { motion } from 'framer-motion';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const initialTasks: Task[] = [
  { id: '1', title: 'Complete project proposal', completed: false },
  { id: '2', title: 'Review team updates', completed: true },
  { id: '3', title: 'Schedule weekly meeting', completed: false },
];

export default function TasksPanel() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask.trim()) return;
    const task: Task = {
      id: Date.now().toString(),
      title: newTask,
      completed: false,
    };
    setTasks((prev) => [...prev, task]);
    setNewTask('');
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
          className="flex-1"
        />
        <Button onClick={addTask}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <Droppable droppableId="tasks">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="space-y-2"
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <motion.div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg border ${
                      task.completed
                        ? 'bg-muted line-through'
                        : 'bg-card hover:bg-accent/50'
                    } cursor-pointer transition-colors`}
                    onClick={() => toggleTask(task.id)}
                  >
                    {task.title}
                  </motion.div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}