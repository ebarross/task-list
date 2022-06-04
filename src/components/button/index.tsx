import React from 'react';

import * as S from './styles';

type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

function Button({ children, type = 'button', onClick }: Props) {
  return (
    <S.Button type={type} onClick={onClick}>
      {children}
    </S.Button>
  );
}

export default Button;
