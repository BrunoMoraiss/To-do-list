import { useState } from 'react';

import { Area, Container, Header } from './App.styles';
import AddArea from './components/AddArea/AddArea';
import TaskList from './components/TaskList/Task';
import { Item } from './types/Item';

function App() {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Comprar o pão na padaria',
      done: false,
    },
    {
      id: 2,
      name: 'Comprar o bolo na padaria',
      done: true,
    },
  ]);
  return (
    <Container>
      <Area>
        <Header>PROJETO</Header>
        <AddArea />
        {list && list.map((item) => <TaskList key={item.id} item={item} />)}
      </Area>
    </Container>
  );
}

export default App;
