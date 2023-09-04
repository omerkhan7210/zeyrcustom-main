import React from 'react'

export const Payment = () => {
  return (
    <div id="payment" className="products-checkout-payment">
    <h4>Payment</h4>

    <ul className="wc_payment_methods payment_methods methods">
        <li className="wc_payment_method payment_method_bacs">
            <input id="payment_method_bacs" type="radio" className="input-radio" name="payment_method" value="bacs"  data-order_button_text=""/>

            <label for="payment_method_bacs">Direct bank transfer </label>
            <div className="payment_box payment_method_bacs">
                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
            </div>
        </li>

        <li className="wc_payment_method payment_method_cheque">
            <input id="payment_method_cheque" type="radio" className="input-radio" name="payment_method" value="cheque" data-order_button_text=""/>

            <label for="payment_method_cheque">Check payments 	</label>
            <div className="payment_box payment_method_cheque">
                <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
            </div>
        </li>

        <li className="wc_payment_method payment_method_paypal">
            <input id="payment_method_paypal" type="radio" className="input-radio" name="payment_method" value="paypal" data-order_button_text="Proceed to PayPal"/>

            <label for="payment_method_paypal">
                PayPal <img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg" alt="PayPal acceptance mark"/><a href="#" className="about_paypal">What is PayPal?</a>
            </label>
           
        </li>
    </ul>
    <div className="form-row place-order">
        <div className="terms-and-conditions-wrapper">
            <div className="privacy-policy-text">
                <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#" className="privacy-policy-link" target="_blank">privacy policy</a>.</p>
            </div>
        </div>
        <button type="submit" className="button alt" name="checkout_place_order" id="place_order" value="Place order" data-value="Place order">Place order</button>
    </div>
</div>
  )
}
