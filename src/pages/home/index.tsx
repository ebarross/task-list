import React, { useState } from 'react';
import Button from '../../components/button';
import SectionList from '../../components/section-list';
import { Section as TSection } from '../../types';

import * as S from './styles';

function Home() {
  const [sections, setSections] = useState<TSection[]>([]);

  const createSection = () => {
    // eslint-disable-next-line no-alert
    const title = prompt('Section name:') as string;
    if (title) {
      setSections([
        ...sections,
        {
          title,
          color: '#fdecc8',
        },
      ]);
    }
  };

  const deleteSection = (index: number) => {
    // eslint-disable-next-line no-restricted-globals
    const confirmed = confirm('Are you sure?');
    if (confirmed) {
      const newSections = [...sections];
      newSections.splice(index, 1);
      setSections(newSections);
    }
  };

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <h1>Task List App</h1>
          {!!sections.length && (
            <Button onClick={createSection}>New section</Button>
          )}
        </S.Header>
        <S.Body>
          {sections.length > 0 ? (
            <SectionList sections={sections} onDelete={deleteSection} />
          ) : (
            <S.NoContentMessage>
              <p>Oops, looks like there&apos;s nothing here.</p>
              <Button onClick={createSection}>Create section</Button>
            </S.NoContentMessage>
          )}
        </S.Body>
      </S.Content>
    </S.Container>
  );
}

export default Home;
