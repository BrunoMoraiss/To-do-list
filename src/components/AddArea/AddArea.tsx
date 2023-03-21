import { KeyboardEvent, useState } from 'react';

import { Container } from '../AddArea/AddArea.style';

type Props = {
  onEnter: (taskName: string) => void;
};

function AddArea({ onEnter }: Props) {
  const [inputText, setInputText] = useState('');

  function handleKeyUp(e: KeyboardEvent) {
    if ((e.code === 'Enter' || e.code === 'NumpadEnter') && inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  }

  return (
    <Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </Container>
  );
}

export default AddArea;
