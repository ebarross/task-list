import React from 'react';
import { useAppContext } from '../../context';
import Button from '../button';
import SectionList from '../section-list';

import * as S from './styles';

type Props = {
  title: string;
};

function TaskBoard({ title }: Props) {
  const { sections, addSection, deleteSection } = useAppContext();

  const handleCreate = () => {
    const sectionTitle = prompt('Section name:') as string;
    if (sectionTitle) {
      addSection({
        title: sectionTitle,
        color: '#fdecc8',
      });
    }
  };

  const handleDelete = (id: number) => {
    const confirmed = confirm('Are you sure?');
    if (confirmed) {
      deleteSection(id);
    }
  };

  return (
    <S.Content>
      <S.Header>
        <h1>{title}</h1>
        {!!sections.length && (
          <Button onClick={handleCreate}>New section</Button>
        )}
      </S.Header>
      <S.Body>
        {sections.length > 0 ? (
          <SectionList onDelete={handleDelete} />
        ) : (
          <S.NoContentMessage>
            <p>Oops, looks like there&apos;s nothing here.</p>
            <Button onClick={handleCreate}>Create section</Button>
          </S.NoContentMessage>
        )}
      </S.Body>
    </S.Content>
  );
}

export default TaskBoard;
