import { useState } from 'react';

import { Item } from '../../types/Item';
import { Container } from './Task.style';

type Props = {
  item: Item;
};

const TaskList = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  function invertChecked(e: React.ChangeEvent<HTMLInputElement>) {
    setIsChecked(e.target.checked);
  }

  return (
    <Container done={isChecked}>
      <input type="checkbox" checked={isChecked} onChange={invertChecked} />
      <label>{item.name.toUpperCase()}</label>
    </Container>
  );
};

export default TaskList;
