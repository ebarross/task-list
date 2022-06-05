import React from 'react';
import TaskBoard from '../../components/task-board';

import * as S from './styles';

function Home() {
  return (
    <S.Container>
      <TaskBoard title="Task List App" />
    </S.Container>
  );
}

export default Home;
