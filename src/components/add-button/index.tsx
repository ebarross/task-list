import React from 'react';
import { ReactComponent as PlusIcon } from './icon.svg';

import * as S from './styles';

type Props = {
  onClick: () => void;
};

function AddButton({ onClick }: Props) {
  return (
    <S.Button type="button" onClick={onClick}>
      <PlusIcon />
      New
    </S.Button>
  );
}

export default AddButton;
