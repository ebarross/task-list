import React from 'react';
import DeleteButton from '../delete-button';

import * as S from './styles';

type Props = {
  id: number;
  text: string;
  onDelete: () => void;
};

function Task({ id, text, onDelete }: Props) {
  const handleDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData('id', String(id));
    event.dataTransfer.dropEffect = 'move';
  };

  return (
    <S.Container draggable onDragStart={handleDragStart}>
      <S.Actions>
        <DeleteButton onClick={onDelete} />
      </S.Actions>
      <S.Content>{text}</S.Content>
    </S.Container>
  );
}

export default Task;
