import React from 'react';
import DeleteButton from '../delete-button';

import * as S from './styles';

type Props = {
  text: string;
  onDelete: () => void;
};

function Task({ text, onDelete }: Props) {
  return (
    <S.Container>
      <S.Actions>
        <DeleteButton onClick={onDelete} />
      </S.Actions>
      <S.Content>{text}</S.Content>
    </S.Container>
  );
}

export default Task;
