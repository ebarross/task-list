import React from 'react';
import { Task as TTask } from '../../types';
import Task from '../task';

import * as S from './styles';

type Props = {
  tasks: TTask[];
};

function TaskList({ tasks }: Props) {
  return (
    <S.Container>
      {tasks.map((task, index) => (
        <Task key={index} text={task.text} />
      ))}
    </S.Container>
  );
}

export default TaskList;
