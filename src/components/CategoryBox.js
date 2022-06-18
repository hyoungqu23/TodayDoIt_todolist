import React from 'react';

const CategoryBox = ({ onSelect }) => {
  return (
    <select name="category" id="category" onChange={onSelect}>
      <option value="coding">Coding</option>
      <option value="blog">Blog</option>
      <option value="job-seeking">Job Seeking</option>
    </select>
  );
};

export default CategoryBox;
