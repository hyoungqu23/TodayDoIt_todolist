import React, { useState } from 'react';
import CategoryBox from './CategoryBox';

const TodoForm = ({ onInsert, disabled }) => {
  const [inputValue, setInputValue] = useState('');
  const [category, setCategory] = useState(undefined);

  const handleSubmitBtn = (event) => {
    event.preventDefault();
    onInsert(inputValue);
    setInputValue('');
  };

  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <form onSubmit={handleSubmitBtn}>
      <CategoryBox onSelect={handleSelectCategory} />
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
