// File: Categories.js
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CategoriesContextC } from '../../Context/CategoriesContext';

const Categories = ({ hostlink }) => {
  const [newCategory, setNewCategory] = useState('');
  const [parentCategory, setParentCategory] = useState(null);
const {categories,setCategories,renderCategories} = useContext(CategoriesContextC);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${hostlink}/categories`, {
        name: newCategory,
        parentId: parentCategory,
      });
      console.log('Category added successfully:', response.data);
      // Clear the input field and update the categories list
      setNewCategory('');
      setParentCategory(null);
      setCategories([...categories, response.data]);
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };


  const renderParentCategoryOptions = (categories) => (
    <select
      value={parentCategory || ''}
      onChange={(e) => setParentCategory(e.target.value)}
      className='input-text w100'
    >
      <option value=''>Select Parent Category (Optional)</option>
      {categories.map((category) => (
        <option key={category._id} value={category._id}>
          {category.name}
        </option>
      ))}
    </select>
  );

  return (
    <div className='d-flex flex-c justify-center align-center w25 mauto'>
      <h3>Categories</h3>
      <form onSubmit={handleSubmit} className='w100 d-flex flex-c justify-center align-center'>
        <p className='input-row w100'>
          <input
            type='text'
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder='Enter a new category'
            required
            className='input-text w100'
          />
        </p>
        {categories.length > 0 ? (
          <p className='input-row w100'>{renderParentCategoryOptions(categories)}</p>
        ) : null}
        <button type='submit' className='button medium mb3'>
          Add Category
        </button>
      </form>
      {categories.length > 0 ? (
        renderCategories(categories)
      ) : (
        <p style={{ textAlign: 'center' }}>No Categories Available</p>
      )}
    </div>
  );
};

export default Categories;
