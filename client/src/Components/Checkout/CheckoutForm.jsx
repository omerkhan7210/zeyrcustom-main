import React from 'react'

export const CheckoutForm = () => {
  return (
  
        <div className="products-billing-fields__field-wrapper">
                                                <p className="form-row form-row-first">
                                                <label for="account_first_name">Name&nbsp;<span className="required">*</span></label>
                                                <span className="products-input-wrapper">
                                                    <input type="text" className="input-text" name="account_first_name" id="account_first_name" autocomplete="off" value="" placeholder="First name"/>
                                                </span>
                                            </p>

                                            <p className="form-row form-row-last" id="billing_last_name_field" data-priority="20">
                                                <label for="billing_last_name" className="">Last name&nbsp;
                                                    <abbr className="required" title="required">*</abbr>
                                                </label>
                                                <span className="products-input-wrapper">
                                                    <input type="text" className="input-text " name="billing_last_name" id="billing_last_name" placeholder="Last name" value="" autocomplete="family-name"/>
                                                </span>
                                            </p>

                                            <p className="form-row form-row-wide focused">
                                                <label for="shipping_company">Company name</label>

                                                <span className="products-input-wrapper">
                                                    <input type="text" className="input-text " name="shipping_company" id="shipping_company" placeholder="" value="" autocomplete="organization"/>
                                                </span>
                                            </p>

                                            <p className="form-row form-row-wide validate-required" id="shipping_country_field" data-priority="40">
                                                <label>Country&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                <span className="products-input-wrapper ml-xs-0 no-border">
                                                    <select name="orderby" className="konte-select2--small konte-select2--full" aria-label="Shop order" tabindex="-1" aria-hidden="true">
                                                        <option value="0" selected="selected">Select a country</option>
                                                        <option value="Afghanistan">Afghanistan</option>
                                                        <option value="Andorra">Andorra</option>
                                                        <option value="Anguilla">Anguilla</option>
                                                        <option value="Argentina">Argentina</option>
                                                        <option value="Armenia">Armenia</option>
                                                        <option value="Andorra">Australia</option>
                                                    </select>
                                                </span>
                                            </p>

                                            <p className="form-row form-row-wide address-field validate-required">
                                                <label for="shipping_address_1" className="">Street address&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                <span className="products-input-wrapper">
                                                    <input type="text" className="input-text " name="shipping_address_1" id="shipping_address_1" placeholder="House number and street name" value="" autocomplete="address-line1" data-placeholder="House number and street name"/>
                                                </span>
                                            </p>

                                            <p className="form-row form-row-wide" id="billing_postcode_field" >
                                                <label for="billing_postcode" className="">Postcode / ZIP&nbsp;<span className="optional">(optional)</span></label>
                                                <span className="products-input-wrapper">
                                                    <input type="text" className="input-text " name="billing_postcode" id="billing_postcode" placeholder="" value="" autocomplete="postal-code"/>
                                                </span>
                                            </p>

                                            <p className="form-row form-row-wide">
                                                <label for="shipping_city" className="">Town / City&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                <span className="products-input-wrapper">
                                                    <input type="text" className="input-text " name="shipping_city" id="shipping_city" placeholder="" value="" autocomplete="address-level2"/>
                                                </span>
                                            </p>

                                            <p className="form-row form-row-wide">
                                                <label for="billing_phone" className="">Phone&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                <span className="products-input-wrapper">
                                                    <input type="tel" className="input-text " name="billing_phone" id="billing_phone" placeholder="" value="" autocomplete="tel"/>
                                                </span>
                                            </p>

                                            <p className="form-row form-row-wide">
                                                <label for="billing_email" className="">Email address&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                <span className="products-input-wrapper">
                                                    <input type="email" className="input-text " name="billing_email" id="billing_email" placeholder="" value="admin@gmail.com" autocomplete="email"/>
                                                </span>
                                            </p>
                                            </div>
  )
}
