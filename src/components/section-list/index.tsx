import React from 'react';
import { Section as TSection } from '../../types';
import Section from '../section';

import * as S from './styles';

type Props = {
  sections: TSection[];
};

function SectionList({ sections }: Props) {
  return (
    <S.Container>
      {sections.map((section, index) => (
        <Section
          key={`${section.title}-${index}`}
          title={section.title}
          color={section.color}
        />
      ))}
    </S.Container>
  );
}

export default SectionList;
