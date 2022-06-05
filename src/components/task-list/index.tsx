import React, { useState } from 'react';
import { Task as TaskType } from '../../types';
import Task from '../task';

import * as S from './styles';

type Props = {
  tasks: TaskType[];
  onDelete: (id: number) => void;
};

function TaskList({ tasks, onDelete }: Props) {
  return (
    <S.Container>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id as number}
          text={task.text}
          onDelete={() => onDelete(task.id as number)}
        />
      ))}
    </S.Container>
  );
}

export default TaskList;
