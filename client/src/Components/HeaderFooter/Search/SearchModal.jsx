import React,{useContext, useState} from "react";
import SearchItem from "./SearchItem"
import { ProductFetchContext } from '../../Context/ProductFetch'; // Update the path accordingly


const SearchModal = ({hostlink})=>{

	const {products} = useContext(ProductFetchContext);

	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const closesearchsidebar = ()=>{
		    const searchSidebar = document.querySelector(".search-drawer");
    searchSidebar.classList.remove("drawer--active");

	}
  
	const handleSearch = (e) => {
	  const query = e.target.value;
	  setSearchTerm(query);
  
	  if(products){
			const filteredProducts = products.filter((product) =>
				product.name.toLowerCase().includes(query.toLowerCase())
			);
			setSearchResults(filteredProducts);
		}
	};
  

    return (
      <>
        <div id="search-modal" className="search-modal modal">
          <div className="modal-header">
            <div className="hamburger-menu button-close active">
              <span className="menu-text">Close</span>
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
          <div className="modal-content">
            <div className="search-form konte-container">
              <form className="instance-search">
                <div className="search-fields">
                  <input
                    type="text"
                    name="s"
                    className="search-field"
                    placeholder="Find Your Luxury"
                    autoComplete="off"
                    value={searchTerm}
                    onChange={handleSearch}
                  />

                  <span className="spinner"></span>
                  <button type="reset" className="search-reset">
                    <svg width="24px" height="24px" viewBox="0 0 24 24">
                      <g>
                        <rect fill="none" width="24" height="24" />
                        <polygon points="19.778,5.636 18.364,4.222 12,10.586 5.636,4.222 4.222,5.636 10.586,12 4.222,18.364 5.636,19.778 12,13.414 18.364,19.778 19.778,18.364 13.414,12 	" />
                      </g>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <div
              className="search-result konte-container"
              style={
                searchResults && searchResults.length > 0
                  ? { opacity: "1" }
                  : null
              }
            >
              <p className="label">Search Result</p>
              <div className="cart-panel">
                <div className="panel">
                  <div className="panel-content">
                    <div className="widget_shopping_cart_content products">
                      {searchResults && searchResults.length > 0 ? (
                        <ul className="mini-cart cart_list product_list_widget d-flex align-center g2">
                          {searchResults.map((item) => (
                            <SearchItem
                              key={item.id}
                              item={item}
                              hostlink={hostlink}
                            />
                          ))}
                        </ul>
                      ) : (
                        <p>No results found.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          className="search-drawer drawer "
          tabIndex="-1"
          role="dialog"
          aria-modal="true"
          aria-label="Search drawer"
        >
          <div id="DrawerOverlay" className="drawer--overlay"></div>
          <div className="drawer__container flex flex--column">
            <div className="drawer__header text-center">
              <button
                id="DrawerClose"
                className="btn btn--unstyled content--floating flex aic jcc"
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
                  onClick={closesearchsidebar}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.43437 7.99993L0.517212 14.9171L1.0829 15.4828L8.00005 8.56562L14.9172 15.4828L15.4829 14.9171L8.56574 7.99993L15.4829 1.08278L14.9172 0.51709L8.00005 7.43424L1.0829 0.51709L0.517212 1.08278L7.43437 7.99993Z"
                    fill="black"
                  ></path>
                </svg>
              </button>
              <h2 className="drawer__heading visually-hidden">Search</h2>
            </div>
            <div className="drawer__body">
              <div className="search-modal__form" data-loading-text="Loading...">
                <form
                  action="/en-pk/search"
                  method="get"
                  role="search"
                  className="search"
                >
                  <div className="flex aic jcb">
                    <div className="form__input flex aic">
                      <label className="visually-hidden" htmlFor="SearchInput">
                        Search
                      </label>
                      <input
                        id="SearchInput"
                        type="search"
                        name="q"
                        value=""
                        placeholder="Search"
                        role="combobox"
                        aria-expanded="false"
                        aria-owns="predictive-search-results-list"
                        aria-controls="predictive-search-results-list"
                        aria-haspopup="listbox"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        autoComplete="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        aria-activedescendant=""
                      />
                    </div>
                  </div>
                  <input type="hidden" name="options[prefix]" value="last" />
                  <div
                    className="predictive-search predictive-search--header"
                    tabIndex="-1"
                    data-predictive-search=""
                  ></div>
                  <span
                    className="predictive-search-status visually-hidden"
                    role="status"
                    aria-hidden="true"
                  ></span>
                </form>
                <div className="search-defaults">
                  <h3 className="predictive-search__heading">Popular Searches</h3>
                  <ul className="predictive-search__links list-unstyled">
                    <li>
                      <a
                        href="/en-pk/collections/aw-22-mens-shop-the-look"
                        className="link-styled"
                      >
                        AW 22 Wes Lang
                      </a>
                    </li>
                    <li>
                      <a
                        href="/en-pk/collections/ready-to-wear"
                        className="link-styled"
                      >
                        Jeans
                      </a>
                    </li>
                    <li>
                      <a href="/en-pk/collections/women" className="link-styled">
                        Women
                      </a>
                    </li>
                  </ul>
                  <h3 className="predictive-search__heading">You Might Like</h3>
                  <ul
                    className="collection__grid flex flex--wrap jcb list-unstyled"
                    role="list"
                  >
                    <li className="grid__item">
                      <div
                        id="6974808883265"
                        className="product-card"
                        data-appmate=""
                      >
                        <div className="product-card__media container media media-ratio">
                          <a
                            href="/en-pk/products/ma-1-brown"
                            title="Navigate to product MA-1 - BROWN"
                          >
                            <div className="media--primary">
                              <img
                                loading="lazy"
                                src="/cdn/shop/products/153_AW23_Runway_SNEAKERS_SHOES_MA-1_AW23MFS013-210_BROWN_1.jpg?v=1692839422&amp;width=550"
                                alt="Navigate to product MA-1 - BROWN"
                                width="2697"
                                height="3600.0000000000005"
                              />
                            </div>
                            <div className="media--rollover visually-hidden">
                              <img
                                loading="lazy"
                                src="/cdn/shop/products/153_AW23_Runway_SNEAKERS_SHOES_MA-1_AW23MFS013-210_BROWN_2.jpg?v=1692839422&amp;width=550"
                                alt="Navigate to product MA-1 - BROWN"
                                width="2697"
                                height="3600.0000000000005"
                              />
                            </div>
                          </a>
                          <div className="product-info__floating content--floating content--full-width"></div>
                        </div>
                        <div className="product-card__info">
                          <div className="flex--column flex jcb flex--mobile">
                            <div>
                              <div className="product-card__title">
                                <a
                                  href="/en-pk/products/ma-1-brown"
                                  className="link-styled"
                                >
                                  MA-1
                                </a>
                              </div>
                            </div>
                            <div className="price-rating__wrapper body-1">
                              <div
                                id="price-"
                                className="price flex aic flex--wrap flex--gap"
                                role="status"
                              >
                                <span
                                  className="price-item price-item--regular"
                                  aria-label="Regular price"
                                >
                                  Rs.251,600.00 PKR
                                </span>
                              </div>
                            </div>
                          </div>
                          <script
                            src="/cdn/shop/t/300/assets/product-form.js?v=17448863054116914861689270880"
                            defer="defer"
                          ></script>
                          <div
                            className="product-form__error-message-wrapper"
                            role="alert"
                            hidden=""
                          >
                            <span className="product-form__error-message"></span>
                          </div>
                          <form
                            method="post"
                            action="/en-pk/cart/add"
                            id="product-form-"
                            acceptCharset="UTF-8"
                            className="form"
                            encType="multipart/form-data"
                            noValidate="noValidate"
                            data-type="add-to-cart-form"
                          >
                            <div className="loading-overlay__spinner" hidden="">
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
                            <button
                              type="submit"
                              name="add"
                              className="product-form__submit btn btn--primary content--full-width"
                              hidden=""
                              aria-haspopup="dialog"
                            >
                              <span>Add to bag</span>
                            </button>
                          </form>
                        </div>
                        <button
                          type="button"
                          className="wk-button wk-button--add wk-button--floating"
                          title="Add to Wishlist"
                          data-wk-add-product="6974808883265"
                          data-appmate=""
                        >
                          <div className="wk-icon wk-button__icon">
                            <svg
                              className="icon--wishlist"
                              width="15"
                              height="20"
                              viewBox="0 0 15 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.79776 15.7977L0.527344 19.1641V0.5H13.5273V19.1633L7.27114 15.7979L7.0345 15.6706L6.79776 15.7977Z"
                                stroke="black"
                                strokeMiterlimit="10"
                              ></path>
                            </svg>
                          </div>
                          <span className="wk-button__label">Add to Wishlist</span>
                        </button>
                      </div>
                    </li>
                    <li className="grid__item">
                      <div
                        id="6974808719425"
                        className="product-card"
                        data-appmate=""
                      >
                        <div className="product-card__media container media media-ratio">
                          <a
                            href="/en-pk/products/ma-1-white-black-1"
                            title="Navigate to product MA-1 - WHITE / BLACK"
                          >
                            <div className="media--primary">
                              <img
                                loading="lazy"
                                src="/cdn/shop/products/156_AW23_Runway_SNEAKERS_SHOES_MA-1_AW23MFS009-111_WHITE_1_d0f3ca4c-374e-4806-aae7-a8e71d7550ce.jpg?v=1693060207&amp;width=550"
                                alt="Navigate to product MA-1 - WHITE / BLACK"
                                width="2697"
                                height="3600.0000000000005"
                              />
                            </div>
                            <div className="media--rollover visually-hidden">
                              <img
                                loading="lazy"
                                src="/cdn/shop/products/156_AW23_Runway_SNEAKERS_SHOES_MA-1_AW23MFS009-111_WHITE_2_f904d236-d4ed-4c76-b5e4-d0dc25cc0607.jpg?v=1693060207&amp;width=550"
                                alt="Navigate to product MA-1 - WHITE / BLACK"
                                width="2697"
                                height="3600.0000000000005"
                              />
                            </div>
                          </a>
                          <div className="product-info__floating content--floating content--full-width"></div>
                        </div>
                        <div className="product-card__info">
                          <div className="flex--column flex jcb flex--mobile">
                            <div>
                              <div className="product-card__title">
                                <a
                                  href="/en-pk/products/ma-1-white-black-1"
                                  className="link-styled"
                                >
                                  MA-1
                                </a>
                              </div>
                            </div>
                            <div className="price-rating__wrapper body-1">
                              <div
                                id="price-"
                                className="price flex aic flex--wrap flex--gap"
                                role="status"
                              >
                                <span
                                  className="price-item price-item--regular"
                                  aria-label="Regular price"
                                >
                                  Rs.251,600.00 PKR
                                </span>
                              </div>
                            </div>
                          </div>
                          <script
                            src="/cdn/shop/t/300/assets/product-form.js?v=17448863054116914861689270880"
                            defer="defer"
                          ></script>
                          <div
                            className="product-form__error-message-wrapper"
                            role="alert"
                            hidden=""
                          >
                            <span className="product-form__error-message"></span>
                          </div>
                          <form
                            method="post"
                            action="/en-pk/cart/add"
                            id="product-form-"
                            acceptCharset="UTF-8"
                            className="form"
                            encType="multipart/form-data"
                            noValidate="noValidate"
                            data-type="add-to-cart-form"
                          >
                            <div className="loading-overlay__spinner" hidden="">
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
                            <button
                              type="submit"
                              name="add"
                              className="product-form__submit btn btn--primary content--full-width"
                              hidden=""
                              aria-haspopup="dialog"
                            >
                              <span>Add to bag</span>
                            </button>
                          </form>
                        </div>
                        <button
                          type="button"
                          className="wk-button wk-button--add wk-button--floating"
                          title="Add to Wishlist"
                          data-wk-add-product="6974808719425"
                          data-appmate=""
                        >
                          <div className="wk-icon wk-button__icon">
                            <svg
                              className="icon--wishlist"
                              width="15"
                              height="20"
                              viewBox="0 0 15 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.79776 15.7977L0.527344 19.1641V0.5H13.5273V19.1633L7.27114 15.7979L7.0345 15.6706L6.79776 15.7977Z"
                                stroke="black"
                                strokeMiterlimit="10"
                              ></path>
                            </svg>
                          </div>
                          <span className="wk-button__label">Add to Wishlist</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default SearchModal;