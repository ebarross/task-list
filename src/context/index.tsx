import React, { useContext, useMemo, useState } from 'react';
import { Section, SectionData, TaskData } from '../types';

type State = {
  sections: Section[];
  addSection: (section: SectionData) => void;
  updateSection: (id: number, title: string) => void;
  deleteSection: (id: number) => void;
  addTask: (sectionId: number, task: TaskData) => void;
  updateTask: (sectionId: number, id: number, text: string) => void;
  deleteTask: (sectionId: number, id: number) => void;
  moveSection: (sourceId: number, targetId: number) => void;
  moveTask: (
    sourceSectionId: number,
    sourceId: number,
    targetSectionId: number,
    targetId?: number,
  ) => void;
};

const AppContext = React.createContext<State | undefined>(undefined);

type ProviderProps = {
  children: React.ReactNode;
};

function AppProvider({ children }: ProviderProps) {
  const [sections, setSections] = useState<Section[]>([
    {
      id: 1,
      title: 'section 1',
      color: 'yellow',
      tasks: [
        {
          id: 11,
          text: 'task 11',
        },
        {
          id: 12,
          text: 'task 12',
        },
      ],
    },
    {
      id: 2,
      title: 'section 2',
      color: 'blue',
      tasks: [
        {
          id: 21,
          text: 'task 21',
        },
        {
          id: 22,
          text: 'task 22',
        },
        {
          id: 23,
          text: 'task 23',
        },
      ],
    },
  ]);

  const addSection = (section: SectionData) => {
    setSections([
      ...sections,
      {
        ...section,
        id: Date.now(),
        tasks: [],
      },
    ]);
  };

  const deleteSection = (id: number) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  const addTask = (sectionId: number, task: TaskData) => {
    const newSections = sections.map((section) => {
      if (section.id === sectionId) {
        const newTask = {
          ...task,
          id: Date.now(),
        };
        return {
          ...section,
          tasks: [...section.tasks, newTask],
        };
      }

      return section;
    });

    setSections(newSections);
  };

  const updateTask = (sectionId: number, id: number, text: string) => {
    const newSections = sections.map((section) => {
      if (section.id === sectionId) {
        const newTasks = section.tasks.map((task) => {
          if (task.id === id) {
            return { ...task, text };
          }

          return task;
        });

        return {
          ...section,
          tasks: newTasks,
        };
      }

      return section;
    });
    setSections(newSections);
  };

  const deleteTask = (sectionId: number, id: number) => {
    const newSections = sections.map((section) => {
      if (section.id === sectionId) {
        const newTasks = section.tasks.filter((task) => task.id !== id);
        return {
          ...section,
          tasks: newTasks,
        };
      }

      return section;
    });
    setSections(newSections);
  };

  const moveTask = (
    sourceSectionId: number,
    sourceId: number,
    targetSectionId: number,
    targetId?: number,
  ) => {
    if (sourceSectionId === targetSectionId) {
      // reorder task on section

      const newSections = sections.map((section) => {
        // iterate on sections

        if (section.id === sourceSectionId) {
          const { tasks } = section;
          const source = tasks.find((task) => task.id === sourceId);
          const target = tasks.find((task) => task.id === targetId);

          if (!source || !target) {
            return section;
          }

          const targetIndex = tasks.indexOf(target);
          let newTasks = tasks.filter((task) => task.id !== sourceId);
          newTasks = [
            ...newTasks.slice(0, targetIndex),
            source,
            ...newTasks.slice(targetIndex),
          ];

          return { ...section, tasks: newTasks };
        }

        return section;
      });

      setSections(newSections);
    } else {
      // move task to another section

      const sourceSection = sections.find(
        (section) => section.id === sourceSectionId,
      );
      const source = sourceSection?.tasks.find((task) => task.id === sourceId);
      if (!source) return;

      const newSections = sections.map((section) => {
        const { id, tasks } = section;
        if (id === sourceSectionId) {
          // remove from source section
          const newTasks = tasks.filter((task) => task.id !== sourceId);
          return { ...section, tasks: newTasks };
        }
        if (id === targetSectionId) {
          // insert on target section
          const target = tasks.find((sec) => sec.id === targetId);
          const targetIndex = target ? tasks.indexOf(target) : 0;

          const newTasks = [
            ...tasks.slice(0, targetIndex),
            source,
            ...tasks.slice(targetIndex),
          ];
          return {
            ...section,
            tasks: newTasks,
          };
        }

        return section;
      });

      setSections(newSections);
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
    const newSections = sections.map((section) => {
      if (section.id === id) {
        return { ...section, title };
      }

      return section;
    });

    setSections(newSections);
  };

  const value = useMemo<State>(
    () => ({
      sections,
      addSection,
      updateSection,
      deleteSection,
      addTask,
      updateTask,
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
