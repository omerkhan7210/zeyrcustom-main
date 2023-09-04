import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductSummary from './ProductSummary/ProductSummary';
import SizeGuide from "./ProductSummary/SizeGuide"
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import ProductAdditionalInfo from "./ProductAdditionalInfo/ProductAddititonalInfo"
import ProductImages from "./ProductImages/ProductImages"
import { hostLink as hostlink } from '../../Hostlink/hostlink';

export const ProductDetailsContext = createContext();

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);


  useEffect(() => {
    // Fetch product details for the specific productId
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`${hostlink}/products/${productId}`);
        setProduct(response.data.product);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [hostlink, productId]);


  if (!product) {
    return <div>Loading...</div>;
  }

  return (

    <div id="content" className="site-content">
			<div className="site-content-container product-content-container konte-container">
				<div id="primary" className="content-area">
					<main id="main" className="site-main">

          <ProductDetailsContext.Provider value={{ product, hostlink }}>

						<div className="layout-v2 clearfix background-set product first instock has-post-thumbnail">

							
							<ProductImages />

							<ProductSummary/>

							<SizeGuide/>
						</div>

            <ProductAdditionalInfo productDes={product.longDescription} productAtt = {product.attributes}/>

            </ProductDetailsContext.Provider>

						{/* <RelatedProducts /> */}
					</main>
				</div>
			</div>
		</div>
    
  );
};

export default ProductDetailsPage;
