import React, { useState } from 'react';

export const Shipping = ({ totalPrice }) => {
  const [selectedShipping, setSelectedShipping] = useState(0);

  const handleShippingChange = (event) => {
    const selectedValue = parseFloat(event.target.value);
    setSelectedShipping(selectedValue);
    
  };

  const totalWithShipping = totalPrice + selectedShipping;

  return (
    <tfoot>
      <tr className="shipping-totals shipping">
        <th>Shipping</th>
        <td data-title="Shipping">
          <ul id="shipping_method" className="shipping-methods justify-around">
            <li>
              <input
                type="radio"
                name="shipping_method"
                value="15"
                id="shipping_method_0_free_shipping"
                className="shipping_method"
                onChange={handleShippingChange}
              />
              <label htmlFor="shipping_method_0_free_shipping">Shipping: 15$</label>
            </li>
            <li>
              <input
                type="radio"
                name="shipping_method"
                value="30"
                id="shipping_method_15_flat_rate"
                className="shipping_method"
                onChange={handleShippingChange}
              />
              <label htmlFor="shipping_method_15_flat_rate">Flat rate: $30</label>
            </li>
            {/* Add similar code for other shipping options */}
          </ul>
        </td>
      </tr>

      <tr className="order-total">
        <th>Total</th>
        <td className="p2">
          <strong>
            <span className="amount">
              <span className="currencySymbol">$</span>
              {totalWithShipping ? totalWithShipping : totalPrice}
            </span>
          </strong>
        </td>
      </tr>
    </tfoot>
  );
};
