import React,{useContext, useEffect, useState} from "react";
import { CartContextC } from "../../Context/CartContext";
import { hostLink as hostlink } from "../../Hostlink/hostlink";

const CartItemRows = ({item})=>{

	const [quantity, setQuantity] = useState(1);
  
  
	const handleQuantityChange = (event) => {
	  const newQuantity = parseInt(event.target.value, 10);
	  setQuantity(newQuantity);
	};
	const {removeFromCart} = useContext(CartContextC);


    return (
      <tr class="cart-item" id="CartItem-1" data-product-id="40473032654913">
        <td class="cart-item__media">
          <a
            href={`/products/` + item.id}
            class="cart-item__link"
            aria-hidden="true"
            tabindex="-1"
          >
            {" "}
          </a>
          <div class="cart-item__image-container gradient global-media-settings">
            <img
              src={`${hostlink}/uploads/` + item.featuredImage}
              alt={item.name}
              class="cart-item__image"
              loading="lazy"
              width="150"
              height="201"
            />
          </div>
        </td>
        <td class="cart-item__details">
          <a class="cart-item__name link-styled" href={`/products/` + item.id}>
            {item.name}
          </a>
          <div class="product-option">${item.price}</div>
          <dl>
            <div class="product-option">
              <dt>MATERIAL: </dt>
              <dd>COTTON</dd>
            </div>
            <div class="product-option">
              <dt>COLOR: </dt>
              <dd>VANILLA ICE</dd>
            </div>
            <div class="product-option">
              <dt>SIZE: </dt>
              <dd>Small</dd>
            </div>
          </dl>
          <p class="product-option"></p>
          <ul
            class="discounts list-unstyled"
            role="list"
            aria-label="Discount"
          ></ul>
        </td>
        <td class="cart-item__quantity">
          <div class="cart-item__quantity-wrapper">
            <label class="visually-hidden" for="Quantity-1">
              Quantity
            </label>
            <quantity-input class="quantity">
              <button
                class="btn btn--unstyled quantity__button no-js-hidden"
                name="minus"
                type="button"
              >
                <span class="visually-hidden">
                  Decrease quantity for {item.name}
                </span>
                -
              </button>
              <input
                class="quantity__input"
                type="number"
                name="updates[]"
                min="0"
                id="Quantity-1"
                data-index="1"
                defaultValue={item.quantity}
                onChange={handleQuantityChange}
              />
              <button
                class="btn btn--unstyled quantity__button no-js-hidden"
                name="plus"
                type="button"
              >
                <span class="visually-hidden">
                  Increase quantity for {item.name}
                </span>
                +
              </button>
            </quantity-input>

            <button id="Remove-1" onClick={() => removeFromCart(item.id)}>
              <a class="button button--tertiary">Remove</a>
            </button>
          </div>
          <div class="cart-item__error" id="Line-item-error-1" role="alert">
            <small class="cart-item__error-text"></small>
            <svg
              aria-hidden="true"
              focusable="false"
              role="presentation"
              class="icon icon-error"
              viewBox="0 0 13 13"
            >
              <circle
                cx="6.5"
                cy="6.50049"
                r="5.5"
                stroke="white"
                stroke-width="2"
              ></circle>
              <circle
                cx="6.5"
                cy="6.5"
                r="5.5"
                fill="#EB001B"
                stroke="#EB001B"
                stroke-width="0.7"
              ></circle>
              <path
                d="M5.87413 3.52832L5.97439 7.57216H7.02713L7.12739 3.52832H5.87413ZM6.50076 9.66091C6.88091 9.66091 7.18169 9.37267 7.18169 9.00504C7.18169 8.63742 6.88091 8.34917 6.50076 8.34917C6.12061 8.34917 5.81982 8.63742 5.81982 9.00504C5.81982 9.37267 6.12061 9.66091 6.50076 9.66091Z"
                fill="white"
              ></path>
              <path
                d="M5.87413 3.17832H5.51535L5.52424 3.537L5.6245 7.58083L5.63296 7.92216H5.97439H7.02713H7.36856L7.37702 7.58083L7.47728 3.537L7.48617 3.17832H7.12739H5.87413ZM6.50076 10.0109C7.06121 10.0109 7.5317 9.57872 7.5317 9.00504C7.5317 8.43137 7.06121 7.99918 6.50076 7.99918C5.94031 7.99918 5.46982 8.43137 5.46982 9.00504C5.46982 9.57872 5.94031 10.0109 6.50076 10.0109Z"
                fill="white"
                stroke="#EB001B"
                stroke-width="0.7"
              ></path>
            </svg>
          </div>
        </td>
        <td class="cart-item__totals right small-hide">
          <div class="loading-overlay hidden">
            <div class="loading-overlay__spinner">
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                class="spinner"
                viewBox="0 0 66 66"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  class="path"
                  fill="none"
                  stroke-width="6"
                  cx="33"
                  cy="33"
                  r="30"
                ></circle>
              </svg>
            </div>
          </div>
          <div class="cart-item__price-wrapper">
            <span class="price price--end">${item.price}</span>
          </div>
        </td>
      </tr>
    );
}

export default CartItemRows;