import React, { useState } from 'react';

const TodoForm = ({ onInsert, disabled }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmitBtn = (event) => {
    event.preventDefault();
    onInsert(inputValue);
    setInputValue('');
  };

  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmitBtn}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChangeInput}
        disabled={disabled}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoForm;
