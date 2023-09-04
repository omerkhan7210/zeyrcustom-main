import React from 'react'

export const CheckoutShippingForm = () => {
  return (
    <div className="col-2">
    <div className="products-shipping-fields">
        <h3 id="ship-to-different-address">
            <label className="products-form__label products-form__label-for-checkbox checkbox">
                <input id="ship-to-different-address-checkbox" className="input-checkbox" type="checkbox" name="ship_to_different_address" value="1"/> <span>Ship to a different address?</span>
            </label>
        </h3>
        <div className="shipping_address">
            <div className="woocommerce-shipping-fields__field-wrapper">
                <p className="form-row form-row-first">
                    <label for="shipping_first_name" className="">Name&nbsp;<abbr className="required" title="required">*</abbr></label>
                    <span className="products-input-wrapper focused">
                    <input type="text" className="input-text" name="shipping_first_name" id="shipping_first_name" placeholder="First name" value=""/></span>
                </p>
                <p className="form-row form-row-last">
                    <label for="shipping_last_name" className="">Last name&nbsp;<abbr className="required" title="required">*</abbr></label>
                    <span className="products-input-wrapper"><input type="text" className="input-text" name="shipping_last_name" id="shipping_last_name" placeholder="Last name" value=""/></span>
                </p>
                <p className="form-row form-row-wide">
                    <label for="shipping_company" className="">Company name&nbsp;<span className="optional">(optional)</span></label>
                    <span className="products-input-wrapper"><input type="text" className="input-text " name="shipping_company" id="shipping_company" placeholder="" value=""/></span>
                </p>
                <p className="form-row form-row-wide">
                    <label>Country / Region&nbsp;<abbr className="required" title="required">*</abbr></label>
                    <span className="products-input-wrapper">
                    <select name="shipping_country" className="konte-select2--small konte-select2--full select2-hidden-accessible" data-select2-id="4" tabindex="-1" aria-hidden="true">
                        <option value="0" selected="selected" data-select2-id="6">Select a country</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Andorra">Australia</option>
                    </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="5" ><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-shipping_country-dj-container"><span className="select2-selection__rendered" id="select2-shipping_country-dj-container" role="textbox" aria-readonly="true" title="Select a country">Select a country</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                </span></p>
                <p className="form-row address-field form-row-wide">
                        <label for="shipping_address_1">Street address&nbsp;<abbr className="required" title="required">*</abbr></label>
                        <span className="products-input-wrapper">
                            <input type="text" className="input-text " name="shipping_address_1" id="shipping_address_1" placeholder="House number and street name" value=""/>
                        </span>
                </p>
                <p className="form-row address-field form-row-wide">
                    <label for="shipping_address_2" className="hidden screen-reader-text">Apartment, suite, unit, etc. (optional)&nbsp;<span className="optional">(optional)</span></label>
                    <span className="products-input-wrapper">
                        <input type="text" className="input-text " name="shipping_address_2" id="shipping_address_2" placeholder="Apartment, suite, unit, etc. (optional)" value=""/>
                    </span>
                </p>
                <p className="form-row address-field form-row-wide">
                        <label for="shipping_city" className="">Town / City&nbsp;<abbr className="required" title="required">*</abbr></label>
                        <span className="products-input-wrapper"><input type="text" className="input-text " name="shipping_city" id="shipping_city" placeholder="" value=""/></span>
                </p>
            </div>
        </div>
    </div>

    
</div>
  )
}
