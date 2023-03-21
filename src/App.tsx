import { useState } from 'react';

import { Area, Container, Header } from './App.styles';
import AddArea from './components/AddArea/AddArea';
import TaskList from './components/TaskList/Task';
import { Item } from './types/Item';

function App() {
  function changeDone(done: boolean, value: string) {
    const changeValueDone = list.findIndex((item) => item.id === +value);
    const newList = [...list];
    newList[changeValueDone].done = done;
    console.log(newList);
    setList(newList);
  }

  function addTask(taskName: string) {
    const newList = [...list];

    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });

    setList(newList);
  }

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
        <AddArea onEnter={addTask} />
        {list &&
          list.map((item) => (
            <TaskList key={item.id} item={item} modifyDone={changeDone} />
          ))}
      </Area>
    </Container>
  );
}

export default App;
