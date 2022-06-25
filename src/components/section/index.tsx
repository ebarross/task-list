import React from 'react';
import { Section as SectionType } from '../../types';
import { useAppContext } from '../../context';
import AddButton from '../add-button';
import DeleteButton from '../delete-button';
import Task from '../task';
import * as S from './styles';

type Props = {
  data: SectionType;
  onDelete: () => void;
};

function Section({ data, onDelete }: Props) {
  const { id: sectionId, title, color } = data;
  const { sections, updateSection, addTask, moveSection, moveTask } =
    useAppContext();

  const tasks = sections.find((s) => s.id === sectionId)?.tasks;

  const handleEdit = () => {
    const newTitle = prompt('New section title:');
    if (newTitle) {
      updateSection(sectionId, newTitle);
    }
  };

  const handleAdd = () => {
    const text = prompt('Task text:');
    if (text && sectionId) {
      addTask(sectionId, { text });
    }
  };

  const handleDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData('type', 'section');
    event.dataTransfer.setData('id', String(sectionId));
    event.dataTransfer.dropEffect = 'move';
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    if (event.dataTransfer.getData('type') === 'section') {
      const sourceId = Number(event.dataTransfer.getData('id'));
      moveSection(sourceId, sectionId);
    }
  };

  const handleTaskDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const type = event.dataTransfer.getData('type');
    if (tasks?.length === 0 && type === 'task') {
      const sourceSectionId = Number(event.dataTransfer.getData('sectionId'));
      const sourceId = Number(event.dataTransfer.getData('id'));
      moveTask(sourceSectionId, sourceId, sectionId);
    }
  };

  return (
    <S.Container>
      <S.Header
        draggable
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <S.Title onClick={handleEdit}>
          <S.Text color={color}>{title}</S.Text>
        </S.Title>
        <S.Actions>
          <DeleteButton onClick={onDelete} />
        </S.Actions>
      </S.Header>
      <S.Body onDragOver={handleDragOver} onDrop={handleTaskDrop}>
        {tasks && tasks.length > 0 && (
          <S.TaskList>
            {tasks.map((task) => (
              <Task
                key={task.id}
                sectionId={sectionId}
                id={task.id}
                text={task.text}
              />
            ))}
          </S.TaskList>
        )}
        <AddButton onClick={handleAdd} />
      </S.Body>
    </S.Container>
  );
}

export default Section;
