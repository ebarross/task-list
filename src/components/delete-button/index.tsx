import React from 'react';
import { ReactComponent as Icon } from './trash.svg';

import * as S from './styles';

type Props = {
  onClick: () => void;
};

function DeleteButton({ onClick }: Props) {
  return (
    <S.Container onClick={onClick}>
      <Icon />
    </S.Container>
  );
}

export default DeleteButton;
