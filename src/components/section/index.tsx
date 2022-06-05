import React from 'react';
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
  const { tasks, addTask, deleteTask, moveTask } = useAppContext();
  const sectionTasks = tasks.filter((task) => task.sectionId === sectionId);

  const handleAdd = () => {
    const text = prompt('Task text:');
    if (text && sectionId) {
      addTask({ sectionId, text });
    }
  };

  const handleDelete = (id: number) => {
    const confirmed = confirm('Are you sure?');
    if (confirmed) {
      deleteTask(id);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('id');
    if (sectionId) {
      moveTask(Number(id), sectionId);
    }
  };

  return (
    <S.Container onDragOver={handleDragOver} onDrop={handleDrop}>
      <S.Header>
        <S.Title>
          <S.Text color={color}>{title}</S.Text>
        </S.Title>
        <S.Actions>
          <DeleteButton onClick={onDelete} />
        </S.Actions>
      </S.Header>
      <S.Body>
        <TaskList tasks={sectionTasks} onDelete={handleDelete} />
        <AddButton onClick={handleAdd} />
      </S.Body>
    </S.Container>
  );
}

export default Section;
