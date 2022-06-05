import React, { useState } from 'react';
import AddButton from '../add-button';
import { Section as SectionType } from '../../types';
import TaskList from '../task-list';

import * as S from './styles';
import DeleteButton from '../delete-button';
import { useAppContext } from '../../context';

type Props = {
  data: SectionType;
  onDelete: () => void;
};

function Section({ data, onDelete }: Props) {
  const { id: sectionId, title, color } = data;
  const [dragTarget, setDragTarget] = useState('');
  const { sections, addTask, deleteTask, moveSection } = useAppContext();
  const tasks = sections.find((s) => s.id === sectionId)?.tasks;

  if (!tasks) {
    return null;
  }

  const handleAdd = () => {
    const text = prompt('Task text:');
    if (text && sectionId) {
      addTask(sectionId, { text });
    }
  };

  const handleDelete = (id: number) => {
    const confirmed = confirm('Are you sure?');
    if (confirmed) {
      deleteTask(sectionId, id);
    }
  };

  const handleDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData('id', String(sectionId));
    event.dataTransfer.dropEffect = 'move';
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragTarget(event.currentTarget.id);
    event.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const dragData = event.dataTransfer.getData('id');
    moveSection(Number(dragData), Number(dragTarget));
  };

  return (
    <S.Container>
      <S.Header
        id={String(sectionId)}
        draggable
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <S.Title>
          <S.Text color={color}>{title}</S.Text>
        </S.Title>
        <S.Actions>
          <DeleteButton onClick={onDelete} />
        </S.Actions>
      </S.Header>
      <S.Body>
        <TaskList tasks={tasks} onDelete={handleDelete} />
        <AddButton onClick={handleAdd} />
      </S.Body>
    </S.Container>
  );
}

export default Section;
