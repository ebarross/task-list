import React from 'react';

import * as S from './styles';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

function ActionButton({ children, onClick }: Props) {
  return <S.Container onClick={onClick}>{children}</S.Container>;
}

export default ActionButton;
