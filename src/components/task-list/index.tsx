import React from 'react';
import { Task as TTask } from '../../types';
import Task from '../task';

import * as S from './styles';

type Props = {
  tasks: TTask[];
  onDelete: (index: number) => void;
};

function TaskList({ tasks }: Props) {
  return (
    <S.Container>
      {tasks.map((task, index) => (
        <Task
          key={`${task.text}-${index}`}
          text={task.text}
          onDelete={() => onDelete(index)}
        />
      ))}
    </S.Container>
  );
}

export default TaskList;
