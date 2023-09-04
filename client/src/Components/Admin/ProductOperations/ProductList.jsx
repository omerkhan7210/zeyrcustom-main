import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { hostLink as hostlink } from '../../Hostlink/hostlink';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch all products from the server
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${hostlink}/products`);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Handle deletion of a product
  const handleDelete = async (productId) => {
    try {
      await axios.delete(`${hostlink}/products/${productId}`);
      // Fetch updated product list from the server after deletion
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  // Handle duplication of a product
const handleDuplicate = async (productId) => {
  try {
    const response = await axios.post(`${hostlink}/products/${productId}/duplicate`);
    // Fetch updated product list from the server after duplication
    fetchProducts();
  } catch (error) {
    console.error(error);
  }
};

  return (

    <div className='d-flex justify-center align-center g1 flex-c w75 mauto'>
      {/* List of Products */}
      <h3 className='signup-heading'>All Products List</h3>
      <Link to='/dashboard' className="button small">Return to dashboard</Link>
      {products.length>0 ? (
  <table className='product-table'>
  <thead>
    <tr>
      <th>Product Featured Image</th>
      <th>Product Title</th>
      <th>Product Price</th>
      <th>Product Short Description</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {products.map((product) => (
      <tr key={product.id}>
        <td>
          <img src={`${hostlink}/uploads/${product.featuredImage}`} alt="" className='thumbnail-img w25' />
        </td>
        <td>{product.name}</td>
        <td>${product.price}</td>
        <td>{product.shortDescription}</td>
        <td className='d-flex flex-c g1 pi2'>
           {/* Edit Button: Redirect to the edit product route */}
           <Link to={`/products/${product.id}`} className='button small' style={{marginBottom:'10px'}}>View</Link>
           <Link to={`/dashboard/edit-product/${product.id}`} className='button small' style={{marginBottom:'10px'}}>Edit</Link>
          <button onClick={() => handleDelete(product.id)} className='button small' style={{marginBottom:'10px'}}>Delete</button>
          <button onClick={() => handleDuplicate(product.id)} className='button small'>Duplicate</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
      ):(
        <p>No Products Added</p>
      )}
    
        
    </div>
  );
};

export default ProductList;
