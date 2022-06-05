import React, { useContext, useState } from 'react';
import { Section, Task } from '../types';

type State = {
  sections: Section[];
  tasks: Task[];
  addSection: (section: Section) => void;
  deleteSection: (id: number) => void;
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  moveTask: (id: number, sectionId: number) => void;
};

const AppContext = React.createContext<State | undefined>(undefined);

type ProviderProps = {
  children: React.ReactNode;
};

function AppProvider({ children }: ProviderProps) {
  const [sections, setSections] = useState<Section[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  const addSection = (section: Section) => {
    const newSection = {
      id: Date.now(),
      ...section,
    };
    setSections([...sections, newSection]);
  };

  const deleteSection = (id: number) => {
    const section = sections.find((s) => s.id === id);
    if (!section) {
      return;
    }

    const index = sections.indexOf(section);
    const newSections = [...sections];
    newSections.splice(index, 1);
    setSections(newSections);
  };

  const addTask = (task: Task) => {
    const newTask = {
      id: Date.now(),
      ...task,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) {
      return;
    }

    const index = tasks.indexOf(task);
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const moveTask = (id: number, sectionId: number) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) {
      return;
    }

    const newTask = { ...task, sectionId };
    const index = tasks.indexOf(task);
    const newTasks = [...tasks];
    newTasks[index] = newTask;
    setTasks(newTasks);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    sections,
    tasks,
    addSection,
    deleteSection,
    addTask,
    deleteTask,
    moveTask,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
}

export default AppProvider;
