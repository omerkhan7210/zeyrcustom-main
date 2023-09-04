import React, { createContext,useEffect,useState } from 'react'
import axios from 'axios'
import { hostLink } from '../Hostlink/hostlink';

export const CategoriesContextC = createContext();

const CategoriesContext = ({children}) => {
    
  const [categories, setCategories] = useState([]);
  const [errorStatus, setErrorStatus] = useState('');
  // Define a state variable to manage selected category IDs
const [selectedCategories, setSelectedCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${hostLink}/categories`);
      setCategories(response.data);
      setErrorStatus('');
    } catch (error) {
      console.error('Error fetching categories:', error);
      setErrorStatus(error.response ? error.response.status : 'Error fetching categories');
    }
  };
  useEffect(() => {
    // Fetch all categories
    fetchCategories();
  }, []);

  const handleDelete = async (categoryId) => {
    try {
      await axios.delete(`${hostLink}/categories/${categoryId}`);
      // Update the categories list after deletion
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };
  
    const renderCategories = (categories, indent = 0) => (
        <ul style={{listStyleType:'none'}}>
          {categories.map((category) => (
            <li key={category._id} style={{marginBlock:'10px'}}>
              {Array(indent + 1).join('—')} {category.name}{' '}
              <button  className='button small' onClick={() => handleDelete(category._id)} style={{marginInline:'10px'}}>Delete</button>
              {/* Add the Edit button and its functionality */}
              <button className='button small' onClick={() => handleEdit(category)}>Edit</button>
              {category.subcategories && category.subcategories.length > 0 && (
                renderCategories(category.subcategories, indent + 1)
              )}
            </li>
          ))}
        </ul>
      );

      const renderCategoriesCheckboxes = (categories, indent = 0) => (
        
        <ul  style={{textAlign:'center',listStyleType:'none',padding:'0'}}>
            
          {categories.map((category) => (
            <li key={category._id} >
              <label className='d-flex align-center' style={{gap:'6px',textTransform:'uppercase'}}>
                <input
                  type="checkbox"
                  checked={isSelected(category._id)}
                  onChange={() => handleCheckboxChange(category._id)}
                />
                {Array(indent + 1).join('—')} {category.name}{' '}
              </label>
              {category.subcategories && category.subcategories.length > 0 && (
                renderCategoriesCheckboxes(category.subcategories, indent + 2)
              )}
            </li>
          ))}
        </ul>
      );

// Function to check if a category is selected
const isSelected = (categoryId) => selectedCategories.includes(categoryId);

// Function to handle checkbox changes
const handleCheckboxChange = (categoryId) => {
  if (isSelected(categoryId)) {
    setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
  } else {
    setSelectedCategories([...selectedCategories, categoryId]);
  }
};
// Function to get the names of selected categories and their parents
const getSelectedCategoryNames = (categoryId) => {
  const findCategoryWithId = (categories, id) => {
    for (const category of categories) {
      if (category._id === id) {
        return category;
      }
      if (category.subcategories.length > 0) {
        const found = findCategoryWithId(category.subcategories, id);
        if (found) {
          return found;
        }
      }
    }
    return null;
  };

  const selectedCategory = findCategoryWithId(categories, categoryId);

  if (selectedCategory) {
    const categoryNames = [selectedCategory.name];
    let parentCategory = findCategoryWithId(categories, selectedCategory.parentId);

    while (parentCategory) {
      categoryNames.unshift(parentCategory.name);
      parentCategory = findCategoryWithId(categories, parentCategory.parentId);
    }

    return categoryNames.join(' > ');
  }

  return '';
};

// Get an array of selected category names
const selectedCategoryNames = selectedCategories.map(getSelectedCategoryNames);



  return (
    <CategoriesContextC.Provider value={{categories,errorStatus,renderCategoriesCheckboxes,selectedCategoryNames,renderCategories,setCategories}}>
        {children}
    </CategoriesContextC.Provider>
  )
}

export default CategoriesContext;
