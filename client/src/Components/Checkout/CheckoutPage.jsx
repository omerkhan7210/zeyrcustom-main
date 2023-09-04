import React,{useContext} from "react";
import {CheckoutBillingForm} from './CheckoutBillingForm'
import {CheckoutShippingForm} from './CheckoutShippingForm'
import { CheckoutLoginForm } from "./CheckoutLoginForm";
import { CheckoutCoupon } from "./CheckoutCoupon";
import { Order } from "./Order";

const CheckoutPage = ()=>{
	const handleSubmit = ()=>{
		
	}

    return (
		<div id="content" className="site-content">
		<div className="site-content-container container">
			<div id="primary" className="content-area">
				<main id="main" className="site-main">
					<div className="page hentry">
						<header className="entry-header"><h1 className="entry-title">Checkout</h1></header>
						<div className="entry-content">
							<CheckoutLoginForm/>


							<CheckoutCoupon/>

							<form name="checkout" onSubmit={handleSubmit} className="checkout products-checkout"  enctype="multipart/form-data">
								<div className="col2-set" id="customer_details">
									<div className="col-1">
										<div className="products-billing-fields">
											<h3>Billing details</h3>

											<CheckoutBillingForm/>
										</div>
									</div>

									<CheckoutShippingForm/>
								</div>

								<h3 id="order_review_heading">Your order</h3>
								<Order/>
								
							</form>
						</div>
					</div>
				</main>
			</div>
		</div>
	</div>
    )
}

export default CheckoutPage;