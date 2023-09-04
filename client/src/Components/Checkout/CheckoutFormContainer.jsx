import React from 'react'
import { CheckoutForm } from './CheckoutForm'
import {Order} from './Order'

export const CheckoutFormContainer = () => {
  return (
    <form name="checkout" method="post" className="checkout products-checkout" action="#" enctype="multipart/form-data" novalidate="novalidate">
    <div className="col2-set" id="customer_details">
    <div className="col-1">
        <div className="products-billing-fields">
            <h3>Billing details</h3>

           <CheckoutForm/>
        </div>
    </div>

    <div className="col-2">
        <div className="products-shipping-fields">
            <h3 id="ship-to-different-address">
                <label className="products-form__label products-form__label-for-checkbox checkbox">
                    <input id="ship-to-different-address-checkbox" className="input-checkbox" type="checkbox" name="ship_to_different_address" value="1"/> <span>Ship to a different address?</span>
                </label>
            </h3>
            <CheckoutForm/>
        </div>

        <div className="products-additional-fields">
            <div className="products-additional-fields__field-wrapper">
                <p className="form-row notes" id="order_comments_field" data-priority="">
                    <label for="order_comments" className="">Order notes&nbsp;
                        <span className="optional">(optional)</span>
                    </label>
                    <span className="products-input-wrapper">
                        <textarea name="order_comments" className="input-text " id="order_comments" placeholder="Notes about your order, e.g. special notes for delivery." rows="2" cols="5"></textarea>
                    </span>
                </p>
            </div>
        </div>
    </div>
</div>

<h3 id="order_review_heading">Your order</h3>

<Order/>

</form>
    
  )
}
