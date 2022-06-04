import React from 'react';
import { Section as TSection } from '../../types';
import Section from '../section';

import * as S from './styles';

type Props = {
  sections: TSection[];
  onDelete: (index: number) => void;
};

function SectionList({ sections, onDelete }: Props) {
  return (
    <S.Container>
      {sections.map((section, index) => (
        <Section
          key={`${section.title}-${index}`}
          title={section.title}
          color={section.color}
          onDelete={() => onDelete(index)}
        />
      ))}
    </S.Container>
  );
}

export default SectionList;
