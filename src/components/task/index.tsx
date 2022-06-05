import React, { useState } from 'react';
import { useAppContext } from '../../context';
import DeleteButton from '../delete-button';

import * as S from './styles';

type Props = {
  id: number;
  text: string;
  onDelete: () => void;
};

function Task({ id, text, onDelete }: Props) {
  const [target, setTarget] = useState('');
  const { moveTask } = useAppContext();

  const handleDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData('id', String(id));
    event.dataTransfer.dropEffect = 'move';
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    setTarget(event.currentTarget.id);
    event.dataTransfer.dropEffect = 'move';
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('id');
    moveTask(Number(data), Number(target));
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
