// src/App.js
import React,{useContext} from 'react';
import ProductList from '../Products/ProductsList/ProductList';
import ProductOrdering from '../Products/ProductsList/ProductOrdering';
import ProductsFilter from '../Products/ProductsList/ProductsFilter';
import { ProductFetchContext } from '../Context/ProductFetch'; // Update the path accordingly
import ErrorMessage from '../ErrorBoundary/ErrorMessage'


const DisplayProducts = ({hostlink,products }) => {

	const {loading,error,handleRetry} = useContext(ProductFetchContext);


  return (
	<>
	{loading ? (
		<div className="loading-spinner">
		  <img src="/images/loading.svg" alt="Loading Products PLease Wait..." />
		</div>
	  ) : error ? (
		<div className="network-error d-flex justify-center flex-c w25 mauto">
		  {error === 500 ? <ErrorMessage /> : <p>Server Error</p>}
		  <button onClick={handleRetry}>Retry</button>
		</div>
	  ) : (
    		<div className="site-content-container shop-content-container konte-container">
				<div id="primary" className="content-area">
					<main id="main" className="site-main" >
						<div className="products-toolbar layout-v3">

							<div className="products-tools clearfix">
								<p className="products-filter-toggle"> <a href="#products-filter" className="toggle-filters" data-toggle="dropdown" data-target="products-filter"> <span className="svg-icon icon-filter size-normal ">
									<svg x="0px" y="0px" viewBox="0 0 24 24">
										<g>
											<rect style={{fill:'none'}} width="24" height="24"/>
											<g>
												<path d="M9.859,7C9.413,5.278,7.862,4,6,4C3.791,4,2,5.791,2,8c0,2.209,1.791,4,4,4c1.862,0,3.412-1.278,3.859-3H22V7H9.859z M6,10c-0.738,0-1.376-0.405-1.723-1C4.106,8.705,4,8.366,4,8s0.106-0.705,0.277-1C4.624,6.405,5.262,6,6,6s1.376,0.405,1.723,1 C7.894,7.295,8,7.634,8,8S7.894,8.705,7.723,9C7.376,9.595,6.738,10,6,10z"/>
												<path d="M13,12c-1.862,0-3.413,1.278-3.859,3H2v2h7.141c0.446,1.722,1.997,3,3.859,3s3.412-1.278,3.859-3H22v-2h-5.141 C16.413,13.278,14.862,12,13,12z M13,18c-0.738,0-1.376-0.405-1.723-1C11.106,16.705,11,16.366,11,16s0.106-0.705,0.277-1 c0.346-0.595,0.984-1,1.723-1s1.376,0.405,1.723,1C14.894,15.295,15,15.634,15,16s-0.106,0.705-0.277,1 C14.376,17.595,13.738,18,13,18z"/>
											</g>
										</g>
									</svg>
								</span> Filter By </a></p>

								<ProductsFilter/>

                				<ProductOrdering/>

								<p className="products-result-count">   {products.length} {products.length > 1 ? "Products" : "Product"}</p>
                
    	      				</div>
			  				<ProductList hostlink={hostlink} products={products}/>
                
						</div>
						
					</main>
				</div>
			</div>
	  		)
	}
	  </>
  );
};

export default DisplayProducts;
