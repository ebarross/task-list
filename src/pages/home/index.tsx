import React, { useState } from 'react';
import Button from '../../components/button';
import Section from '../../components/section';

import * as S from './styles';

type TSection = {
  title: string;
  color: string;
};

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
          color: 'red',
        },
      ]);
    }
  };

  const renderSections = () =>
    sections.map((section) => (
      <Section
        key={section.title}
        title={section.title}
        color={section.color}
      />
    ));

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
            renderSections()
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
