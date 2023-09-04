import React from "react";
import ProductInfoTabs from "./ProductInfoTabs";
import ProductReviews from "../ProductReviews/ProductReviews";

const ProductAddtionalInfo = ({ productDes, productAtt})=>{

    return (
        <div className="products-tabs wc-tabs-wrapper panels-offscreen">
									<ProductInfoTabs productAtt={productAtt}/>
									<div className="panels">
										<div className="backdrop"></div>
										<div className="products-tabs-panel products-tabs-panel--description panel entry-content wc-tab" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
											<div className="hamburger-menu button-close active">
												<span className="menu-text">Close</span>
												<div className="hamburger-box">
													<div className="hamburger-inner"></div>
												</div>
											</div>
											<div className="panel-header">
												<h3>Description</h3>
											</div>
											<div className="panel-content">
												<p className="fs-24 lh-32"> {productDes}</p>
											</div>
										</div>
										<div className="products-tabs-panel products-tabs-panel--additional_information panel entry-content wc-tab" id="tab-additional_information" role="tabpanel" aria-labelledby="tab-title-additional_information">
											<div className="hamburger-menu button-close active">
												<span className="menu-text">Close</span>
												<div className="hamburger-box">
													<div className="hamburger-inner"></div>
												</div>
											</div>
											<div className="panel-header">
												<h3>Additional information</h3>
											</div>
											<div className="panel-content">
											<table>
												<tbody>
													{productAtt.map((item) => (
														<tr key={item.id}>
															<th>{item.attributeType}</th>
															<td>
																{item.attributeValue}
															</td>
														</tr>
													))}
												</tbody>
											</table>

											</div>
										</div>
										<div className="products-tabs-panel products-tabs-panel--reviews panel entry-content wc-tab" id="tab-reviews" role="tabpanel">
											<div className="hamburger-menu button-close active">
												<span className="menu-text">Close</span>
												<div className="hamburger-box">
													<div className="hamburger-inner"></div>
												</div>
											</div>
											<div className="panel-header"><h3>Reviews (1)</h3></div>
											<div className="panel-content">
												<ProductReviews/>
											</div>
										</div>
									</div>
								</div>
    )
}

export default ProductAddtionalInfo;