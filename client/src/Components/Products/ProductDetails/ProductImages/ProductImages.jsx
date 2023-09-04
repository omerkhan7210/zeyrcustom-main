import React, { useContext } from "react";
import SingleProductImage from "./SingleProductImage";
import { ProductDetailsContext } from "../ProductDetailPage";

const ProductImages = () => {

  const {product,hostlink} = useContext(ProductDetailsContext);

  const mobileImageCheck = ()=>{
    if(window.innerWidth <= 768) return true;
    return false;
  }

  const productImagesArray = JSON.parse(product.productImages);
  const prodName = product.name;

  return (
    <>
    <div className="product-gallery product-gallery--with-images product-gallery--columns-4 images lightbox-support" data-columns="4">
      <figure className="product-gallery__wrapper">
       
          <img src={`${hostlink}/uploads/` + product.featuredImage} alt={prodName} data-large_image_width="680" data-large_image_height="960"/>   
          {productImagesArray && productImagesArray.length > 0 ? (
            productImagesArray.map((productImg, index) => ( // Added "index" to the map function
              <SingleProductImage key={index} productImg={productImg} prodName={prodName}/> // Added "key" prop to SingleProductImage
            ))
          ) : (
            <p>No Image</p>
          )}
        
      </figure>
    </div>

</>
  );
};

export default ProductImages;
