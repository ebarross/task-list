import React from 'react';

import * as S from './styles';

type Props = {
  title: string;
  color?: string;
};

const defaultColor = '#e3e3e380';

function Section({ title, color = defaultColor }: Props) {
  return (
    <S.Container>
      <S.Header>
        <S.Title>
          <S.Text color={color}>{title}</S.Text>
        </S.Title>
      </S.Header>
      <S.Body />
    </S.Container>
  );
}

export default Section;
