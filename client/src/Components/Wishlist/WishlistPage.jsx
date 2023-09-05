import React, { useContext } from "react";
import WishlistItem from "./WishlistItem";
import { WishlistContextC } from "../Context/WishlistContext";

const WishlistPage = ({ hostLink }) => {
  const { wishlistItemsCount } = useContext(WishlistContextC);

  return (
    <main id="MainContent" class="content-for-layout" role="main" tabindex="-1">
      <section
        id="shopify-section-template--14940997419073__main"
        class="shopify-section section"
      >
        <style data-shopify="">
          {`
		#shopify-section-template--14940997419073__main .section-padding {
         padding-top: 14px;
         padding-bottom: 14px;
         }
         @media screen and (min-width: 769px) {        
         #shopify-section-template--14940997419073__main .section-padding {
         padding-top: 28px;
         padding-bottom: 28px;
         }
         }
		 `}
        </style>
        <div class="section-padding color-schema-1 text-">
          <div class="page-width" style={{ width: "992px" }}>
            <h1 class="section-heading h2 text-center">Wishlist</h1>
            <div class="rte" data-appmate=""></div>
            <div class="wk-page " data-appmate="">
              <div class="wk-grid">
                <WishlistItem hostLink={hostLink} />
              </div>
              {wishlistItemsCount > 0 ? (
                <div class="wk-sharing">
                  <h4 class="wk-title">Share Wishlist</h4>
                  <ul class="wk-sharing__list">
                    <li class="wk-sharing__list-item">
                      <a
                        href="#"
                        class="wk-share-button"
                        title="Share on Facebook"
                        data-wk-share-service="facebook"
                        data-wk-share="64f5f9699a8ac27d49aec4ef"
                      >
                        <svg
                          version="1.1"
                          x="0px"
                          y="0px"
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M18.768,7.465H14.5V5.56c0-0.896,0.594-1.105,1.012-1.105s2.988,0,2.988,0V0.513L14.171,0.5C10.244,0.5,9.5,3.438,9.5,5.32 v2.145h-3v4h3c0,5.212,0,12,0,12h5c0,0,0-6.85,0-12h3.851L18.768,7.465z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li class="wk-sharing__list-item">
                      <a
                        href="#"
                        class="wk-share-button"
                        title="Share on Twitter"
                        data-wk-share-service="twitter"
                        data-wk-share="64f5f9699a8ac27d49aec4ef"
                      >
                        <svg
                          version="1.1"
                          x="0px"
                          y="0px"
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M23.444,4.834c-0.814,0.363-1.5,0.375-2.228,0.016c0.938-0.562,0.981-0.957,1.32-2.019c-0.878,0.521-1.851,0.9-2.886,1.104 C18.823,3.053,17.642,2.5,16.335,2.5c-2.51,0-4.544,2.036-4.544,4.544c0,0.356,0.04,0.703,0.117,1.036 C8.132,7.891,4.783,6.082,2.542,3.332C2.151,4.003,1.927,4.784,1.927,5.617c0,1.577,0.803,2.967,2.021,3.782 C3.203,9.375,2.503,9.171,1.891,8.831C1.89,8.85,1.89,8.868,1.89,8.888c0,2.202,1.566,4.038,3.646,4.456 c-0.666,0.181-1.368,0.209-2.053,0.079c0.579,1.804,2.257,3.118,4.245,3.155C5.783,18.102,3.372,18.737,1,18.459 C3.012,19.748,5.399,20.5,7.966,20.5c8.358,0,12.928-6.924,12.928-12.929c0-0.198-0.003-0.393-0.012-0.588 C21.769,6.343,22.835,5.746,23.444,4.834z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li class="wk-sharing__list-item">
                      <a
                        href="#"
                        class="wk-share-button"
                        title="Share with Email"
                        data-wk-share-service="email"
                        data-wk-share="64f5f9699a8ac27d49aec4ef"
                      >
                        <svg
                          version="1.1"
                          x="0px"
                          y="0px"
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M22,4H2C0.897,4,0,4.897,0,6v12c0,1.103,0.897,2,2,2h20c1.103,0,2-0.897,2-2V6C24,4.897,23.103,4,22,4z M7.248,14.434 l-3.5,2C3.67,16.479,3.584,16.5,3.5,16.5c-0.174,0-0.342-0.09-0.435-0.252c-0.137-0.239-0.054-0.545,0.186-0.682l3.5-2 c0.24-0.137,0.545-0.054,0.682,0.186C7.571,13.992,7.488,14.297,7.248,14.434z M12,14.5c-0.094,0-0.189-0.026-0.271-0.08l-8.5-5.5 C2.997,8.77,2.93,8.46,3.081,8.229c0.15-0.23,0.459-0.298,0.691-0.147L12,13.405l8.229-5.324c0.232-0.15,0.542-0.084,0.691,0.147 c0.15,0.232,0.083,0.542-0.148,0.691l-8.5,5.5C12.189,14.474,12.095,14.5,12,14.5z M20.934,16.248 C20.842,16.41,20.673,16.5,20.5,16.5c-0.084,0-0.169-0.021-0.248-0.065l-3.5-2c-0.24-0.137-0.323-0.442-0.186-0.682 s0.443-0.322,0.682-0.186l3.5,2C20.988,15.703,21.071,16.009,20.934,16.248z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li class="wk-sharing__list-item">
                      <a
                        href="#"
                        class="wk-share-button"
                        title="Get link"
                        data-wk-share-service="link"
                        data-wk-share="64f5f9699a8ac27d49aec4ef"
                      >
                        <svg
                          xmlns="https://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M459.654,233.373l-90.531,90.5c-49.969,50-131.031,50-181,0c-7.875-7.844-14.031-16.688-19.438-25.813
                                 l42.063-42.063c2-2.016,4.469-3.172,6.828-4.531c2.906,9.938,7.984,19.344,15.797,27.156c24.953,24.969,65.563,24.938,90.5,0
                                 l90.5-90.5c24.969-24.969,24.969-65.563,0-90.516c-24.938-24.953-65.531-24.953-90.5,0l-32.188,32.219
                                 c-26.109-10.172-54.25-12.906-81.641-8.891l68.578-68.578c50-49.984,131.031-49.984,181.031,0
                                 C509.623,102.342,509.623,183.389,459.654,233.373z M220.326,382.186l-32.203,32.219c-24.953,24.938-65.563,24.938-90.516,0
                                 c-24.953-24.969-24.953-65.563,0-90.531l90.516-90.5c24.969-24.969,65.547-24.969,90.5,0c7.797,7.797,12.875,17.203,15.813,27.125
                                 c2.375-1.375,4.813-2.5,6.813-4.5l42.063-42.047c-5.375-9.156-11.563-17.969-19.438-25.828c-49.969-49.984-131.031-49.984-181.016,0
                                 l-90.5,90.5c-49.984,50-49.984,131.031,0,181.031c49.984,49.969,131.031,49.969,181.016,0l68.594-68.594
                                 C274.561,395.092,246.42,392.342,220.326,382.186z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li class="wk-sharing__list-item">
                      <a
                        href="#"
                        class="wk-share-button"
                        title="Share with WhatsApp"
                        data-wk-share-service="whatsapp"
                        data-wk-share="64f5f9699a8ac27d49aec4ef"
                      >
                        <svg
                          xmlns="https://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            stroke="none"
                            d="M20.1,3.9C17.9,1.7,15,0.5,12,0.5C5.8,0.5,0.7,5.6,0.7,11.9c0,2,0.5,3.9,1.5,5.6l-1.6,5.9l6-1.6c1.6,0.9,3.5,1.3,5.4,1.3l0,0l0,0c6.3,0,11.4-5.1,11.4-11.4C23.3,8.9,22.2,6,20.1,3.9z M12,21.4L12,21.4c-1.7,0-3.3-0.5-4.8-1.3l-0.4-0.2l-3.5,1l1-3.4L4,17c-1-1.5-1.4-3.2-1.4-5.1c0-5.2,4.2-9.4,9.4-9.4c2.5,0,4.9,1,6.7,2.8c1.8,1.8,2.8,4.2,2.8,6.7C21.4,17.2,17.2,21.4,12,21.4z M17.1,14.3c-0.3-0.1-1.7-0.9-1.9-1c-0.3-0.1-0.5-0.1-0.7,0.1c-0.2,0.3-0.8,1-0.9,1.1c-0.2,0.2-0.3,0.2-0.6,0.1c-0.3-0.1-1.2-0.5-2.3-1.4c-0.9-0.8-1.4-1.7-1.6-2c-0.2-0.3,0-0.5,0.1-0.6s0.3-0.3,0.4-0.5c0.2-0.1,0.3-0.3,0.4-0.5c0.1-0.2,0-0.4,0-0.5c0-0.1-0.7-1.5-1-2.1C8.9,6.6,8.6,6.7,8.5,6.7c-0.2,0-0.4,0-0.6,0S7.5,6.8,7.2,7c-0.3,0.3-1,1-1,2.4s1,2.8,1.1,3c0.1,0.2,2,3.1,4.9,4.3c0.7,0.3,1.2,0.5,1.6,0.6c0.7,0.2,1.3,0.2,1.8,0.1c0.6-0.1,1.7-0.7,1.9-1.3c0.2-0.7,0.2-1.2,0.2-1.3C17.6,14.5,17.4,14.4,17.1,14.3z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <div class="wk-sharing__link wk-sharing__link--hidden">
                    <span class="wk-sharing__link-text"></span>
                    <button
                      class="wk-sharing__link__copy-button"
                      data-clipboard-target=".wk-sharing__link-text"
                    >
                      Copy Link
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WishlistPage;
