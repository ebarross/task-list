import React from 'react';
import { useAppContext } from '../../context';
import DeleteButton from '../delete-button';

import * as S from './styles';

type Props = {
  id: number;
  text: string;
  onDelete: () => void;
};

function Task({ id, text, onDelete }: Props) {
  const { moveTask } = useAppContext();

  const handleDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData('id', String(id));
    event.dataTransfer.dropEffect = 'move';
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const sourceId = Number(event.dataTransfer.getData('id'));
    const targetId = Number(event.currentTarget.id);
    moveTask(sourceId, targetId);
  };

  return (
    <S.Container
      id={String(id)}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <S.Actions>
        <DeleteButton onClick={onDelete} />
      </S.Actions>
      <S.Content>{text}</S.Content>
    </S.Container>
  );
}

export default Task;
