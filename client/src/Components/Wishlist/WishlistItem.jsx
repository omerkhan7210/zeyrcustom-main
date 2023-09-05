import React, { useContext } from "react";
import { WishlistContextC } from "../Context/WishlistContext";
import {Link} from 'react-router-dom'
import { hostLink } from '../Hostlink/hostlink';

const WishlistItem = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContextC)

  return (
    <>
      {wishlist.length > 0 ? (
        <>
          {wishlist.map((w) => (
            <div class="wk-grid__item " key={w.id}>
              <button
                class="wk-button wk-button--remove wk-button--floating"
                title="Remove from Wishlist"
                onClick={() => removeFromWishlist(w.id)}
              >
                <div class="wk-icon wk-button__icon">
                  <svg
                    class="wk-icon__svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 64 64"
                    version="1.1"
                  >
                    <path
                      vector-effect="non-scaling-stroke"
                      d="M0.309,0.309a0.9,0.9,0,0,1,1.268,0L63.691,62.423a0.9,0.9,0,0,1-1.268,1.268L0.309,1.577A0.9,0.9,0,0,1,.309.309Z"
                    ></path>
                    <path
                      vector-effect="non-scaling-stroke"
                      d="M63.691,0.309a0.9,0.9,0,0,1,0,1.268L1.577,63.691A0.9,0.9,0,0,1,.309,62.423L62.423,0.309A0.9,0.9,0,0,1,63.691.309Z"
                    ></path>
                  </svg>
                </div>
              </button>
              <Link
                to={`/products/${w.id}`}
                class="wk-product-image"
                title="View product"
                style={{
                  backgroundImage: `url(${
                    hostLink + "/uploads/" + w.featuredImage
                  })`,
                }}
              ></Link>
              <div class="wk-product-info">
                <Link class="wk-product-title" to={`/products/${w.id}`}>
                  {w.name}
                </Link>
                <div class="wk-product-price">
                  <span class="wk-product-price--current">${w.price}</span>
                </div>
              </div>
              <form class="wk-product-form" action="/cart/add" method="post">
                <div class="wk-product-form__options">
                  <div class="wk-product-form__option">
                    <label class="wk-product-form__option__label" for="Option2">
                      COLOR
                    </label>
                    <select
                      class="wk-product-form__option__select"
                      name="options[COLOR]"
                    >
                      <option
                        value="Aged Black"
                        selected="selected"
                        disabled=""
                      >
                        Aged Black
                      </option>
                    </select>
                  </div>
                  <div class="wk-product-form__option">
                    <label class="wk-product-form__option__label" for="Option3">
                      SIZE
                    </label>
                    <select
                      class="wk-product-form__option__select"
                      name="options[SIZE]"
                    >
                      <option value="28" disabled="">
                        28
                      </option>
                      <option value="29" selected="selected">
                        29
                      </option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                      <option value="32">32</option>
                      <option value="33">33</option>
                      <option value="34">34</option>
                      <option value="36">36</option>
                      <option value="38">38</option>
                      <option value="40">40</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  class="wk-product-form__submit"
                  data-wk-add-to-cart="64f5f969efabe032296d3a45"
                >
                  Add to Bag
                </button>
              </form>
            </div>
          ))}
        </>
      ) : (
        <p>No items in wishlist</p>
      )}
    </>
  );
};

export default WishlistItem;
