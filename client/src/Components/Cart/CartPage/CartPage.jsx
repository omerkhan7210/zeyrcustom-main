import React, { useContext } from "react";
import { CartContextC } from "../../Context/CartContext";
import CartItemRows from "./CartItemRows"
import { Link } from "react-router-dom";

const CartPage = ({hostLink})=>{

    const {cartItems} = useContext(CartContextC);
// Calculate the total price by multiplying the price of each item with its quantity and then summing them up
const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
      <>
        <main
          id="MainContent"
          class="content-for-layout"
          role="main"
          tabindex="-1"
        >
          <div
            id="shopify-section-template--14940997189697__cart-items"
            class="shopify-section"
            style={{ background: "white" }}
          >
            <script src="/cdn/shop/t/300/assets/cart.js" defer="defer"></script>
            <link
              href="/cdn/shop/t/300/assets/cart-items.css"
              rel="stylesheet"
              type="text/css"
              media="all"
            />
            <link
              href="/cdn/shop/t/300/assets/cart-page.css"
              rel="stylesheet"
              type="text/css"
              media="all"
            />
            <style data-shopify="">
              {`
                .section-template--14940997189697__cart-items-padding {
                    padding-top: 27px;
                    padding-bottom: 27px;
                }

                @media screen and (min-width: 750px) {
                    .section-template--14940997189697__cart-items-padding {
                        padding-top: 36px;
                        padding-bottom: 36px;
                    }
                }
				`}
            </style>
            <div class="page-width is-empty">
              {cartItems.length > 0 ? (
                <>
                  <div class="title-wrapper-with-link flex jcb flex--mobile">
                    <h1 class="title title--primary h4">Shopping bag</h1>
                    <a href="/en-pk/collections/all" class="underlined-link">
                      Continue shopping
                    </a>
                  </div>
                  <div
                    class="cart__items"
                    id="main-cart-items"
                    data-id="template--14940997189697__cart-items"
                  >
                    <div class="js-contents">
                      <table class="cart-items">
                        <caption class="visually-hidden">Shopping bag</caption>
                        <thead>
                          <tr>
                            <th
                              class="caption-with-letter-spacing"
                              colspan="2"
                              scope="col"
                            >
                              Product
                            </th>
                            <th
                              class="cart-items__heading--wide small-hide caption-with-letter-spacing"
                              colspan="1"
                              scope="col"
                            >
                              Quantity
                            </th>
                            <th
                              class="small-hide right caption-with-letter-spacing"
                              colspan="1"
                              scope="col"
                            >
                              Total
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((item) => (
                            <CartItemRows
                              key={item.id}
                              item={item}
                              hostlink={hostLink}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div class="cart__warnings">
                    <h1 class="cart__empty-text h4">Your bag is empty</h1>
                    <a href="/en-pk/collections/all" class="button">
                      Continue shopping
                    </a>
                    <h2 class="cart__login-title h4">Have an account?</h2>
                    <p class="cart__login-paragraph">
                      <a
                        href="/en-pk/account/login"
                        class="link underlined-link"
                      >
                        Log in
                      </a>{" "}
                      to check out faster.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </>
    );
}

export default CartPage;