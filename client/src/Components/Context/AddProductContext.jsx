
import React, { createContext, useState,useContext } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import DOMPurify from 'dompurify';
import { CategoriesContextC } from "./CategoriesContext";
import { hostLink } from '../Hostlink/hostlink';

export const AddProductAdminContext = createContext();

 const AddProductContext = ({children}) => {

   
const [formData, setFormData] = useState({
        name: '',
        price: '',
        categories: '',
        sku: '',
        isOnSale: false,
        isFeatured: false,
        featuredImage: null,
        thumbnailImages: [],
        videos: '',
        shortDescription: '',
        longDescription: '',
        attributes: [], // An array to hold product attributes (e.g., size, color, etc.)
          status: "draft", // Status can be either "draft" or "published"
          variations: [], // An array to hold different variations based on the selected attributes
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const history = useNavigate();
  const {selectedCategoryNames} = useContext(CategoriesContextC) ;

      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show the loading icon
        setSuccessMessage('');
        setErrorMessage('');
        try {
    
          // Convert variations array to a JSON string
          const variationsJson = JSON.stringify(formData.variations);


          const parsedCategories = selectedCategoryNames.map(category => {
            if (category.includes(" > ")) {
              const [parentCategory, subcategory] = category.split(" > ");
              return { category: parentCategory, subcategory };
            } else {
              return { category, subcategory: null };
            }
          });
          
          const uniqueCategories = [...new Set(parsedCategories.map(parsedCategory => parsedCategory.category))];
          const uniqueSubcategories = parsedCategories.map(parsedCategory => parsedCategory.subcategory);
          
          // Remove NULL from subcategories array
          const filteredSubcategories = uniqueSubcategories.filter(subcategory => subcategory !== null);
          
          // Create the final formData object to send to the server
          const formDataToSend = {
            ...formData,
            variations: variationsJson,
            categories: uniqueCategories.join(', '), // Convert to comma-separated string
            subcategories: filteredSubcategories.join(', '), // Convert to comma-separated string
          };
          
      
          // Convert the thumbnail images array to a FormData object to handle file upload
          const formDataWithFiles = new FormData();
          for (const key in formData) {
            if (key === 'thumbnailImages') {
              for (const thumbnailImage of formData.thumbnailImages) {
                formDataWithFiles.append('thumbnailImages', thumbnailImage);
              }
            } else if (key === 'featuredImage' && formData.featuredImage) {
              formDataWithFiles.append('featuredImage', formData.featuredImage);
            } else {
              formDataWithFiles.append(key, formData[key]);
              
            }
            
          }
      
      
          // Send JSON data separately using 'application/json' content type
          const response = await axios.post(`${hostLink}/products`, formDataToSend, {
            headers: {
              'Content-Type': 'application/json', // Set the correct content type for JSON data
            },
          });
          
          const productId = response.data.productId;
          if(response.data.message === "Success"){
            const response2 = await axios.post(`${hostLink}/upload-images/${productId}`, formDataWithFiles);
            // Redirect to the home page after a short delay (e.g., 1 second)
            setSuccessMessage(response2.data.message)
            setTimeout(() => {
              history('/dashboard/product-list');
            }, 1000);
          }
          
        
        }catch (error) {
          console.log(error)
          setErrorMessage(DOMPurify.sanitize(error.message));
        } finally {
          setLoading(false); // Hide the loading icon
        }
        
        }
      
      const handleSubmitEdit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show the loading icon
        setSuccessMessage('');
        try {
          const response = await axios.put(`${hostLink}/products/${productId}`, productData);
          console.log('Product updated successfully:', response.data);
          // Redirect or perform any other action after updating the product
          setSuccessMessage(response.data.message);
          setLoading(false)
          // Redirect to the home page after a short delay (e.g., 1 second)
          setTimeout(() => {
            history('/dashboard');
          }, 1000);
          // Redirect to the home page after a short delay (e.g., 1 second)
          
        } catch (error) {
          console.log(error)
          setErrorMessage(DOMPurify.sanitize(error.response.data.message));
        } finally {
          setLoading(false); // Hide the loading icon
        }
      };
          
      const handleFileChange = (e) => {
        const files = e.target.files;
        if (e.target.name === 'featuredImage') {
          setFormData((prevFormData) => ({ ...prevFormData, featuredImage: files[0] }));
        } else if (e.target.name === 'thumbnailImages') {
          setFormData((prevFormData) => ({ ...prevFormData, thumbnailImages: [...files] }));
        }
      };
      
          // Function to handle image removal
  const handleFeaturedImageRemove = () => {
    setFormData({ ...formData, featuredImage: null });
  };

      const handleImageRemove = (index) => {
        const newThumbnailImages = formData.thumbnailImages.filter((_, i) => i !== index);
        setFormData({ ...formData, thumbnailImages: newThumbnailImages });
      };
      

  return (
    <AddProductAdminContext.Provider
    value={{formData,handleFileChange,handleImageRemove,handleSubmit,handleSubmitEdit,setFormData,loading,successMessage,errorMessage,handleFeaturedImageRemove}}>
        {children}
    </AddProductAdminContext.Provider>
  )
}

export default AddProductContext;
