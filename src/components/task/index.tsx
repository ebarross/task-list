import React from 'react';
import { useAppContext } from '../../context';
import DeleteButton from '../delete-button';

import * as S from './styles';

type Props = {
  sectionId: number;
  id: number;
  text: string;
  onDelete: () => void;
};

function Task({ sectionId, id, text, onDelete }: Props) {
  const { moveTask } = useAppContext();

  const handleDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData('type', 'task');
    event.dataTransfer.setData('sectionId', String(sectionId));
    event.dataTransfer.setData('id', String(id));
    event.dataTransfer.dropEffect = 'move';
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    if (event.dataTransfer.getData('type') === 'task') {
      const sourceSectionId = Number(event.dataTransfer.getData('sectionId'));
      const sourceId = Number(event.dataTransfer.getData('id'));
      moveTask(sourceSectionId, sourceId, sectionId, id);
    }
  };

  return (
    <S.Container
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
