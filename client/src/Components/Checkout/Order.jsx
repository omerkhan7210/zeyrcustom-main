import React, { useContext, useState } from 'react';
import { Shipping } from './Shipping';
import { Payment } from './Payment';
import { CartContextC } from '../Context/CartContext';

export const Order = () => {
    const { cartItems } = useContext(CartContextC);
    let totalPrice = '';

    return (
        <div id="order_review" className="products-checkout-review-order">
        <table className="shop_table products-checkout-review-order-table">
            <thead>
                <tr>
                    <th className="product-name">Product</th>
                    <th className="product-total">Total</th>
                </tr>
            </thead>
            <tbody>
                    {cartItems ? (
                        cartItems.map((item) => {
                            const subtotal = item.price * item.quantity;
                            totalPrice = subtotal;

                            return (
                                
                                <tr key={item.id} className="cart_item">
                                    <th>PRODUCT</th>
                                    <td>
                                        <div className="product-item d-flex pi2 align-center">
                                            <div className="product-name">
                                                {item.name}
                                                <dl className="variation">
                                                {
                                                Object.entries(item.selectedVariations).map(([key, value]) => (
                                                    <>
                                                        <dt className={`variation-${key}`}>{key}</dt>
                                                        <dd className={`variation-${key}`}>
                                                            {value}
                                                        </dd>
                                                   </>
                                                ))
                                                }
                                                 </dl>

                                                    
                                            </div>

                                            <div className="product-quantity">
                                                <strong className="product-quantity">
                                                    × {item.quantity}
                                                </strong>
                                            </div>

                                            <div className="product-subtotal">
                                                <span className="amount">
                                                    <span className="currencySymbol">$</span>
                                                    {item.price}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })
                    ) : null}
                </tbody>

          <Shipping totalPrice={totalPrice}/>
        </table>

        <Payment/>
    </div>

    );
};
