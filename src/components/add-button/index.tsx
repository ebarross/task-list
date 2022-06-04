import React from 'react';
import { ReactComponent as PlusIcon } from './icon.svg';

import * as S from './styles';

function AddButton() {
  return (
    <S.Button type="button">
      <PlusIcon />
      New
    </S.Button>
  );
}

export default AddButton;
