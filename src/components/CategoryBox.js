import React from 'react';

const CategoryBox = () => {
  return (
    <select name="category" id="category">
      <option value="coding">Coding</option>
      <option value="blog">Blog</option>
      <option value="job-seeking">Job Seeking</option>
    </select>
  );
};

export default CategoryBox;
