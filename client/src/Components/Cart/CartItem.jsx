import React,{useContext} from 'react';
import {CartContextC} from '../Context/CartContext';
import { Link } from 'react-router-dom';
import { hostLink as hostlink } from '../Hostlink/hostlink';



const CartItem = ({ item}) => {

  const {removeFromCart,increaseQuantity,decreaseQuantity} = useContext(CartContextC); 

  return (
    <tr id="CartDrawer-Item-1" className="cart-item" role="row">
      <td
        className="cart-item__media"
        role="cell"
        headers="CartDrawer-ColumnProductImage"
      >
        <Link
          to={"/products/" + item.id}
          className="cart-item__link"
          tabndex="-1"
          aria-hidden="true"
        ></Link>
        <img
          className="cart-item__image"
          src={`${hostlink}/uploads/` + item.featuredImage}
          alt={item.name}
          loading="lazy"
          width="150"
          height="201"
        />
      </td>

      <td
        className="cart-item__details flex flex--column"
        role="cell"
        headers="CartDrawer-ColumnProduct"
      >
        <div className="flex" style={{gap:"1rem"}}>
          <Link
            to={"/products/" + item.id}
            className="cart-item__name link-styled"
          >
            {item.name}
          </Link>
            <button
              className="btn btn--unstyled"
              onClick={() => removeFromCart(item.id)}
              style={{color:"red"}}
            >
              X
            </button>
        </div>

        <dl className="cart-item__variants flex">
          {/* Display selected variations */}
          {item.selectedVariations && (
            <span>
              {item.selectedVariations.color &&
              item.selectedVariations.size ? null : item.selectedVariations
                  .color ? (
                <div className="cart-item__variant cart-item__variant--color flex">
                  <dt hidden="">Color: </dt>
                  <dd>{item.selectedVariations.color}</dd>
                </div>
              ) : item.selectedVariations.size ? (
                <div className="cart-item__variant cart-item__variant--size flex">
                  <dt hidden="">Size: </dt>
                  <dd>{item.selectedVariations.size}</dd>
                </div>
              ) : null}
            </span>
          )}
        </dl>

        <div className="flex aic jcb flex--wrap">
          <div className="cart-item__quantity">
            <div className="quantity flex" style={{ marginBottom: "10px" }}>
              <button
                className="btn btn--unstyled quantity__button no-js-hidden"
                name="minus"
                type="button"
                onClick={decreaseQuantity}
              >
                <span className="visually-hidden">
                  Decrease quantity for {item.name}
                </span>
                -
              </button>
              <input
                className="quantity__input"
                type="number"
                name="updates[]"
                defaultValue={item.quantity > 0 ? item.quantity : 1}
                min="0"
                aria-label="Quantity for AMIRI STAGGERED LOGO TEE - FROSTY GREEN"
                id="Drawer-quantity-1"
                data-index="1"
              />

              <button
                className="btn btn--unstyled quantity__button no-js-hidden"
                name="plus"
                type="button"
                onClick={increaseQuantity}
              >
                <span className="visually-hidden">
                  Increase quantity for {item.name}
                </span>
                +
              </button>
            </div>
          </div>

          <div className="cart-item__price">${item.price}</div>
        </div>

        <ul
          className="cart-item__discounts list-unstyled"
          role="list"
          aria-label="Discount"
        ></ul>

        <div
          id="CartDrawer-LineItemError-1"
          className="cart-item__error"
          role="alert"
        >
          <small className="cart-item__error-text"></small>
          <svg
            className="icon icon--error"
            width="14"
            height="14"
            aria-hidden="true"
            focusable="false"
            role="presentation"
            viewBox="0 0 13 13"
          >
            <circle
              cx="6.5"
              cy="6.50049"
              r="5.5"
              stroke="white"
              strokeWidth="2"
            ></circle>
            <circle
              cx="6.5"
              cy="6.5"
              r="5.5"
              fill="#EB001B"
              stroke="#EB001B"
              strokeWidth="0.7"
            ></circle>
            <path
              d="M5.87413 3.52832L5.97439 7.57216H7.02713L7.12739 3.52832H5.87413ZM6.50076 9.66091C6.88091 9.66091 7.18169 9.37267 7.18169 9.00504C7.18169 8.63742 6.88091 8.34917 6.50076 8.34917C6.12061 8.34917 5.81982 8.63742 5.81982 9.00504C5.81982 9.37267 6.12061 9.66091 6.50076 9.66091Z"
              fill="white"
            ></path>
            <path
              d="M5.87413 3.17832H5.51535L5.52424 3.537L5.6245 7.58083L5.63296 7.92216H5.97439H7.02713H7.36856L7.37702 7.58083L7.47728 3.537L7.48617 3.17832H7.12739H5.87413ZM6.50076 10.0109C7.06121 10.0109 7.5317 9.57872 7.5317 9.00504C7.5317 8.43137 7.06121 7.99918 6.50076 7.99918C5.94031 7.99918 5.46982 8.43137 5.46982 9.00504C5.46982 9.57872 5.94031 10.0109 6.50076 10.0109Z"
              fill="white"
              stroke="#EB001B"
              strokeWidth="0.7"
            ></path>
          </svg>
        </div>

        <div
          className="loading-overlay content--floating"
          style={{ display: "none" }}
        >
          <div className="loading-overlay__spinner">
            <svg
              aria-hidden="true"
              focusable="false"
              role="presentation"
              className="spinner"
              viewBox="0 0 66 66"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="path"
                fill="none"
                strokeWidth="6"
                cx="33"
                cy="33"
                r="30"
              ></circle>
            </svg>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
