import { useState } from 'react';

import { Item } from '../../types/Item';
import { Container } from './Task.style';

type Props = {
  item: Item;
  modifyDone: (done: boolean, value: string) => void;
};

const TaskList = ({ item, modifyDone }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  function invertChecked(e: React.ChangeEvent<HTMLInputElement>) {
    setIsChecked(e.target.checked);
    modifyDone(!isChecked, e.target.value);
  }

  return (
    <Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={invertChecked}
        value={item.id}
      />
      <label>
        {item.name.toUpperCase()} - {item.done.toString()}
      </label>
    </Container>
  );
};

export default TaskList;
