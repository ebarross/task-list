import React, { useState } from 'react';
import AddButton from '../add-button';
import { Task } from '../../types';
import TaskList from '../task-list';

import * as S from './styles';
import DeleteButton from '../delete-button';

type Props = {
  title: string;
  color?: string;
  onDelete: () => void;
};

const defaultColor = '#e3e3e380';

function Section({ title, color = defaultColor, onDelete }: Props) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    // eslint-disable-next-line no-alert
    const text = prompt('Task text:');
    if (text) {
      setTasks([...tasks, { text }]);
    }
  };

  const deleteTask = (index: number) => {
    // eslint-disable-next-line no-restricted-globals
    const confirmed = confirm('Are you sure?');
    if (confirmed) {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          <S.Text color={color}>{title}</S.Text>
        </S.Title>
        <S.Actions>
          <DeleteButton onClick={onDelete} />
        </S.Actions>
      </S.Header>
      <S.Body>
        <TaskList tasks={tasks} onDelete={deleteTask} />
        <AddButton onClick={addTask} />
      </S.Body>
    </S.Container>
  );
}

export default Section;
