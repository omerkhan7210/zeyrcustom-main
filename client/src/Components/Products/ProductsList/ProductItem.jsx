// src/components/ProductItem.js
import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import AddtoWishlistButton from "../../Wishlist/AddtoWishlistButton"
import { hostLink as hostlink } from '../../Hostlink/hostlink';

const ProductItem = ({product }) => {

  const productImagesArray = JSON.parse(product.productImages);

  return (

    <li className="product instock">
								<div className="product-inner">
								<div className="buttons clearfix position-a">
											
											<AddtoWishlistButton product={product}/>
										</div>
									<div className="product-thumbnail product-thumbnails--hover">
										<Link to={`/products/${product.id}`}>
											<img src={`${hostlink}/uploads/`+product.featuredImage} alt={product.name}/>
											<img src={`${hostlink}/uploads/`+productImagesArray[0]} className="hover-image" alt={product.name}/>
										</Link>
									</div>
									<div className="product-summary">
										<h2 className="loop-product__title">
											<Link to={`/products/${product.id}`}>{product.name}</Link>
										</h2>
										<span className="price">${product.price}</span>
										
									</div>
								</div>
							</li>
  );
};

export default ProductItem;
