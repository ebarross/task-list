import React, { useContext, useMemo, useState } from 'react';
import { Section, SectionData, TaskData } from '../types';

type State = {
  sections: Section[];
  addSection: (section: SectionData) => void;
  updateSection: (id: number, title: string) => void;
  deleteSection: (id: number) => void;
  addTask: (sectionId: number, task: TaskData) => void;
  deleteTask: (sectionId: number, id: number) => void;
  moveSection: (sourceId: number, targetId: number) => void;
  moveTask: (sourceId: number, targetId: number) => void;
};

const AppContext = React.createContext<State | undefined>(undefined);

type ProviderProps = {
  children: React.ReactNode;
};

function AppProvider({ children }: ProviderProps) {
  const [sections, setSections] = useState<Section[]>([]);

  const addSection = (section: SectionData) => {
    const newSection = {
      ...section,
      id: Date.now(),
      tasks: [],
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

  const addTask = (sectionId: number, task: TaskData) => {
    const section = sections.find((s) => s.id === sectionId);
    if (!section) {
      return;
    }

    const index = sections.indexOf(section);
    const newSections = [...sections];
    newSections[index].tasks.push({
      ...task,
      id: Date.now(),
    });
    setSections(newSections);
  };

  const deleteTask = (sectionId: number, id: number) => {
    const section = sections.find((s) => s.id === sectionId);
    if (!section) {
      return;
    }

    const { tasks: tesks } = section;

    const task = tesks.find((t) => t.id === id);
    if (!task) {
      return;
    }

    const index = tesks.indexOf(task);
    const newTasks = [...tesks];
    newTasks.splice(index, 1);

    const sectionIndex = sections.indexOf(section);
    const newSection = { ...section, tasks: newTasks };

    const newSections = [...sections];
    newSections[sectionIndex] = newSection;
    setSections(newSections);
  };

  const getTaskSection = (id: number) =>
    sections.find((s) => s.tasks.find((t) => t.id === id));

  const moveTask = (sourceId: number, targetId: number) => {
    if (sourceId === targetId) {
      return;
    }

    const sourceSection = getTaskSection(sourceId);
    const targetSection = getTaskSection(targetId);
    if (!sourceSection || !targetSection) {
      return;
    }
    if (sourceSection.id === targetSection.id) {
      const source = sourceSection.tasks.find((t) => t.id === sourceId);
      const target = sourceSection.tasks.find((t) => t.id === targetId);
      if (!source || !target) {
        return;
      }

      if (sourceSection.id === targetSection.id) {
        const sourceIndex = sourceSection.tasks.indexOf(source);
        const targetIndex = sourceSection.tasks.indexOf(target);

        const newTasks = [...sourceSection.tasks];
        newTasks.splice(sourceIndex, 1);
        newTasks.splice(targetIndex, 0, source);

        const newSection = { ...sourceSection, tasks: newTasks };
        const sectionIndex = sections.indexOf(sourceSection);
        const newSections = [...sections];
        newSections[sectionIndex] = newSection;
        setSections(newSections);
      }
    }
  };

  const moveSection = (sourceId: number, targetId: number) => {
    if (sourceId === targetId) {
      return;
    }

    const source = sections.find((s) => s.id === sourceId);
    const target = sections.find((s) => s.id === targetId);

    if (source && target) {
      const sourceIndex = sections.indexOf(source);
      const targetIndex = sections.indexOf(target);

      const newSections = [...sections];
      newSections.splice(sourceIndex, 1);
      newSections.splice(targetIndex, 0, source);
      setSections(newSections);
    }
  };

  const updateSection = (id: number, title: string) => {
    const section = sections.find((s) => s.id === id);
    if (section) {
      const newSection = { ...section, title };
      const index = sections.indexOf(section);
      const newSections = [...sections];
      newSections[index] = newSection;
      setSections(newSections);
    }
  };

  const value = useMemo<State>(
    () => ({
      sections,
      addSection,
      updateSection,
      deleteSection,
      addTask,
      deleteTask,
      moveSection,
      moveTask,
    }),
    [sections],
  );

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
