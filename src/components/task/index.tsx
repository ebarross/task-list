import React from 'react';

import * as S from './styles';

type Props = {
  text: string;
};

function Task({ text }: Props) {
  return (
    <S.Container>
      <S.Content>{text}</S.Content>
    </S.Container>
  );
}

export default Task;
