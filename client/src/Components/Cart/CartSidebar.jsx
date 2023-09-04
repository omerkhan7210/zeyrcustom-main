// src/components/CartSidebar.js
import React,{useContext} from 'react';
import { CartContextC } from '../Context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const CartSidebar = ({hostlink}) => {

  const handleclosecartsidebar = ()=>{
    const cartSidebar = document.querySelector(".cart-drawer");
    cartSidebar.classList.remove("drawer--active");
  }

  const {cartItems} = useContext(CartContextC); 
 const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div id="shopify-section-cart-drawer" className="shopify-section">
      <div className="cart-drawer drawer" style={{zIndex:"999999"}}>
        <div
          id="CartDrawer--overlay"
          className="drawer--overlay"
          onClick={handleclosecartsidebar}
        ></div>
        <div
          id="CartDrawer"
          className="drawer__container flex flex--column"
          role="dialog"
          aria-modal="true"
          aria-label="Cart"
          tabIndex="-1"
        >
          <div className="drawer__header flex jcc aic">
            {cartItems.length === 0 ? null : (
              <h2 className="drawer__heading">Your Shopping Bag </h2>
            )}
            <button
              id="cartClose"
              onClick={handleclosecartsidebar}
              className="btn btn--unstyled content--floating"
              type="button"
              aria-label="Close"
            >
              <svg
                className="icon icon--close"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Close"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.43437 7.99993L0.517212 14.9171L1.0829 15.4828L8.00005 8.56562L14.9172 15.4828L15.4829 14.9171L8.56574 7.99993L15.4829 1.08278L14.9172 0.51709L8.00005 7.43424L1.0829 0.51709L0.517212 1.08278L7.43437 7.99993Z"
                  fill="black"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`"drawer__body ${
              cartItems.length === 0
                ? "cart--empty flex flex--column jcc aic"
                : null
            } `}
          >
            {cartItems.length === 0 ? (
              <>
                <p>Your bag is empty</p>
                <a href="/en-pk/collections/all" className="btn btn--primary">
                  Continue shopping
                </a>
              </>
            ) : (
              <>
                <div>
                    <div
                      id="CartDrawer-CartItems"
                      className="drawer__contents flex flex--column js-contents"
                    >
                      <div className="drawer__cart-items-wrapper">
                        <table className="cart-items" role="table">
                          <thead role="rowgroup">
                            <tr role="row">
                              <th
                                id="CartDrawer-ColumnProductImage"
                                role="columnheader"
                              >
                                <span className="visually-hidden">
                                  Product image
                                </span>
                              </th>
                              <th
                                id="CartDrawer-ColumnProduct"
                                className="caption-with-letter-spacing"
                                scope="col"
                                role="columnheader"
                              >
                                Product
                              </th>
                              <th
                                id="CartDrawer-ColumnTotal"
                                className="right caption-with-letter-spacing"
                                scope="col"
                                role="columnheader"
                              >
                                Total
                              </th>
                              <th
                                id="CartDrawer-ColumnQuantity"
                                role="columnheader"
                              >
                                <span className="visually-hidden">
                                  Quantity
                                </span>
                              </th>
                            </tr>
                          </thead>

                          <tbody role="rowgroup">
                            {cartItems.map((item) => (
                              <CartItem
                                key={item.id}
                                item={item}
                                hostlink={hostlink}
                              />
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p
                        id="CartDrawer-LiveRegionText"
                        className="visually-hidden"
                        role="status"
                      ></p>
                      <p
                        id="CartDrawer-LineItemStatus"
                        className="visually-hidden"
                        aria-hidden="true"
                        role="status"
                      >
                        Loading...
                      </p>
                    </div>
                    <div id="CartDrawer-CartErrors" role="alert"></div>
                </div>
              </>
            )}
          </div>
 {cartItems.length === 0 ? null : (
          <div className="drawer__footer">
            <div className="cart-drawer__totals" role="status">
              <div className="flex jcb">
                <span className="cart-drawer__heading">Subtotal</span>
                <span>${totalPrice}</span>
              </div>
            </div>

            <div className="cart-drawer__ctas flex flex--column">
              <button
                type="submit"
                className="btn btn--primary giftbox-checkout"
                name="checkout"
                form="CartDrawer-Form"
                style={{
                  display: "none!important",
                  visibility: "hidden",
                  position: "absolute",
                  left: "-10000px",
                }}
              >
                Checkout
              </button>
              <button
                type="submit"
                className="btn btn--primary giftbox-checkout giftbox-checkout-cloned"
                name="checkout"
                form="CartDrawer-Form"
              >
                Checkout
              </button>
            </div>
          </div>
 )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
