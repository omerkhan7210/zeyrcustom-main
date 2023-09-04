import React from 'react'

export const CheckoutBillingForm = () => {
  return (
    <div className="products-billing-fields__field-wrapper">
												<p className="form-row form-row-first">
												<label htmlFor="account_first_name">Name&nbsp;<span className="required">*</span></label>
												<span className="products-input-wrapper">
													<input type="text" className="input-text" name="account_first_name" id="account_first_name" autoComplete="off" defaultValue="" placeholder="First name"/>
												</span>
											</p>

											<p className="form-row form-row-last" id="billing_last_name_field" data-priority="20">
												<label htmlFor="billing_last_name" className="">Last name&nbsp;
													<abbr className="required" title="required">*</abbr>
												</label>
												<span className="products-input-wrapper">
													<input type="text" className="input-text " name="billing_last_name" id="billing_last_name" placeholder="Last name" defaultValue="" autoComplete="family-name"/>
												</span>
											</p>

											<p className="form-row form-row-wide focused">
												<label htmlFor="shipping_company">Company name</label>

												<span className="products-input-wrapper">
													<input type="text" className="input-text " name="shipping_company" id="shipping_company" placeholder="" defaultValue="" autoComplete="organization"/>
												</span>
											</p>

											<p className="form-row form-row-wide validate-required" id="shipping_country_field" data-priority="40">
												<label>Country&nbsp;<abbr className="required" title="required">*</abbr></label>
												<span className="products-input-wrapper ml-xs-0 no-border">
													<select name="orderby" className="konte-select2--small konte-select2--full select2-hidden-accessible" aria-label="Shop order" tabindex="-1" aria-hidden="true" data-select2-id="1">
														<option defaultValue="0" selected="selected" data-select2-id="3">Select a country</option>
														<option defaultValue="Afghanistan">Afghanistan</option>
														<option defaultValue="Andorra">Andorra</option>
														<option defaultValue="Anguilla">Anguilla</option>
														<option defaultValue="Argentina">Argentina</option>
														<option defaultValue="Armenia">Armenia</option>
														<option defaultValue="Andorra">Australia</option>
													</select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2" ><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false" aria-labelledby="select2-orderby-rp-container"><span className="select2-selection__rendered" id="select2-orderby-rp-container" role="textbox" aria-readonly="true" title="Select a country">Select a country</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
												</span>
											</p>

											<p className="form-row form-row-wide address-field validate-required">
												<label htmlFor="shipping_address_1" className="">Street address&nbsp;<abbr className="required" title="required">*</abbr></label>
												<span className="products-input-wrapper">
													<input type="text" className="input-text " name="shipping_address_1" id="shipping_address_1" placeholder="House number and street name" defaultValue="" autoComplete="address-line1" data-placeholder="House number and street name"/>
												</span>
											</p>

											<p className="form-row form-row-wide" id="billing_postcode_field">
												<label htmlFor="billing_postcode" className="">Postcode / ZIP&nbsp;<span className="optional">(optional)</span></label>
												<span className="products-input-wrapper">
													<input type="text" className="input-text " name="billing_postcode" id="billing_postcode" placeholder="" defaultValue="" autoComplete="postal-code"/>
												</span>
											</p>

											<p className="form-row form-row-wide">
												<label htmlFor="shipping_city" className="">Town / City&nbsp;<abbr className="required" title="required">*</abbr></label>
												<span className="products-input-wrapper">
													<input type="text" className="input-text " name="shipping_city" id="shipping_city" placeholder="" defaultValue="" autoComplete="address-level2"/>
												</span>
											</p>

											<p className="form-row form-row-wide">
												<label htmlFor="billing_phone" className="">Phone&nbsp;<abbr className="required" title="required">*</abbr></label>
												<span className="products-input-wrapper">
													<input type="tel" className="input-text " name="billing_phone" id="billing_phone" placeholder="" defaultValue="" autoComplete="tel"/>
												</span>
											</p>

											<p className="form-row form-row-wide">
												<label htmlFor="billing_email" className="">Email address&nbsp;<abbr className="required" title="required">*</abbr></label>
												<span className="products-input-wrapper">
													<input type="email" className="input-text " name="billing_email" id="billing_email" placeholder="" defaultValue="admin@gmail.com" autoComplete="email"/>
												</span>
											</p>
											</div>
  )
}
