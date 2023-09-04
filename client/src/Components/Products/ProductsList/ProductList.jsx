// src/components/ProductList.js
import React from 'react';
import ProductItem from './ProductItem';


const ProductList = ({products}) => {


  return (
    
      <>
      
      {products.length>0 ? (
        <>
         <h1 style={{textAlign:'center'}}>{products[0].categories}</h1>
        <ul className="products hover-other_image main-products layout-standard columns-4">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
        </>
      ):(
        <p>No Products</p>
      )}
       
       
     
    </>
    
   
  );
};

export default ProductList;


