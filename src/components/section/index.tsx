import React, { useState } from 'react';
import AddButton from '../add-button';
import { Task } from '../../types';
import TaskList from '../task-list';

import * as S from './styles';

type Props = {
  title: string;
  color?: string;
};

const defaultColor = '#e3e3e380';

function Section({ title, color = defaultColor }: Props) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    // eslint-disable-next-line no-alert
    const text = prompt('Task text:');
    if (text) {
      setTasks([...tasks, { text }]);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          <S.Text color={color}>{title}</S.Text>
        </S.Title>
      </S.Header>
      <S.Body>
        <TaskList tasks={tasks} />
        <AddButton onClick={addTask} />
      </S.Body>
    </S.Container>
  );
}

export default Section;
