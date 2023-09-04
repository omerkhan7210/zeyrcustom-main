import React from 'react'

export const CheckoutLoginForm = () => {
  return (
    <div className="checkout-login konte-toggle">
								<div className="products-info konte-toggle__btn">
									<span className="svg-icon icon-warning size-normal message-icon">
										<svg width="40px" height="40px" viewBox="0 0 40 40">
											<g>
												<path d="M20,40C8.972,40,0,31.028,0,20C0,8.972,8.972,0,20,0c11.028,0,20,8.972,20,20C40,31.028,31.028,40,20,40z M20,2 C10.075,2,2,10.075,2,20c0,9.925,8.075,18,18,18c9.925,0,18-8.075,18-18C38,10.075,29.925,2,20,2z"></path>
											</g>
											<g>
												<path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M14,24.5"></path>
											</g>
											<g>
												<rect x="19" y="15" width="2" height="6"></rect>
											</g>
											<g>
												<rect x="19" y="23" width="2" height="2"></rect>
											</g>
											<g>
												<path d="M26,29H14c-1.673,0-3.016-0.648-3.684-1.778s-0.589-2.618,0.218-4.085l6.18-11.238c0.825-1.5,1.992-2.325,3.286-2.325 c1.294,0,2.461,0.825,3.285,2.325l6.182,11.238c0.807,1.467,0.886,2.955,0.218,4.085S27.674,29,26,29z M20,11.574 c-0.524,0-1.083,0.47-1.534,1.289l-6.18,11.238c-0.457,0.831-0.548,1.598-0.249,2.104C12.336,26.71,13.052,27,14,27h12 c0.948,0,1.664-0.29,1.963-0.796s0.209-1.272-0.248-2.103l-6.182-11.239C21.082,12.044,20.523,11.574,20,11.574z"></path>
											</g>
										</svg>
									</span>
									Returning customer?
									<a href="#" className="showlogin">Click here to login</a>
								</div>
								
    <form className="products-form products-form-login login konte-toggle__content" method="post" >
									<p>If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing section.</p>

									<p className="form-row form-row-first">
										<label for="username">Username or email&nbsp;<span className="required">*</span></label>
										<input type="text" className="input-text" name="username" id="username" autocomplete="off"/>

									</p>

									<p className="form-row form-row-last">
										<label for="password">Password <span className="required">*</span></label>
										<input className="input-text" type="password" name="password" id="password" autocomplete="off"/>
									</p>

									<p className="form-row">
										<label className="products-form__label products-form__label-for-checkbox products-form-login__rememberme"> 
										<input className="products-form__input products-form__input-checkbox" name="rememberme" type="checkbox" id="rememberme" value="forever"/>
											<span>Remember me</span>
										</label>
									</p>

									<p className="form-row">
										<button type="submit" className="button products-form-login__submit" name="login" value="Login">Login</button>
									</p>

									<p className="lost_password"><a href="../other-shop-pages/lost-password.html">Lost your password?</a></p>
								</form>
                            </div>
  )
}
