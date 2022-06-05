import React from 'react';
import { useAppContext } from '../../context';
import Section from '../section';

import * as S from './styles';

type Props = {
  onDelete: (id: number) => void;
};

function SectionList({ onDelete }: Props) {
  const { sections } = useAppContext();
  return (
    <S.Container>
      {sections.map((section, index) => (
        <Section
          key={section.id}
          data={section}
          onDelete={() => onDelete(section.id as number)}
        />
      ))}
    </S.Container>
  );
}

export default SectionList;
