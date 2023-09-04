import {React,useContext} from "react";
import "./header-script.js";
import { Link } from "react-router-dom";
import { CartContextC } from "../../Context/CartContext";
import { tokenContextC } from "../../Context/TokenContext";
import { WishlistContextC } from "../../Context/WishlistContext";

export const Header2 = () => {

  
    const { cartItemsCount } = useContext(CartContextC);
    const { wishlistItemsCount } = useContext(WishlistContextC);
    const { isTokenExpired } = useContext(tokenContextC);

  const handleopencartsidebar = ()=>{
    const cartSidebar = document.querySelector(".cart-drawer");
    cartSidebar.classList.add("drawer--active");
  }
  const handlesearchsidebar = ()=>{
    const searchSidebar = document.querySelector(".search-drawer");
    searchSidebar.classList.add("drawer--active");
  }
  return (
    <div
      id="shopify-section-header"
      className="shopify-section section-header header--sticky"
    >
      <link
        href="/cdn/shop/t/300/assets/predictive-search.css?v=181969191698556883851689270882"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <script
        src="/cdn/shop/t/300/assets/predictive-search.js?v=179584222252000407441689270880"
        defer="defer"
      ></script>
      <style data-shopify="">
        {`
            @media screen and (min-width: 769px) {
                .header .site-logo img {
                    max-width: 145px;
                }
            }
    
            .alt-header:not(.body-overlay) .header__heading-logo {
                display: none;
            }
    
            .alt-header:not(.body-overlay) .header__heading-logo.alt-header-logo {
                display: block;
            }`}
      </style>
      <header className="header header-layout--logo_center header-style--default flex jcb aic">
        <div className="header__mobile-menu flex">
          <details id="Details-Menu-Trigger" className="mobile-menu">
            <summary
              aria-label="Toggle mobile menu"
              role="button"
              aria-controls="menu-drawer"
              aria-expanded="false"
              className="mmenu__hamburger hamburger"
            >
              <span></span>
              <span></span>
              <span></span>
            </summary>
            <div className="mmenu-drawer drawer drawer--left mmenu-drawer drawer">
              <div className="drawer__container">
                <section>
                  <nav className="site-menu">
                    <ul className="list-unstyled primary-links" role="list">
                      <li className="has-submenu transition-delay">
                        <button className="submenu__trigger flex aic jcb menu-item btn btn--unstyled">
                          MEN
                        </button>

                        <div id="MenuLevel1" className="menu-drawer__content">
                          <ul className="mmenu__breadcrumbs flex aic list-unstyled">
                            <li>
                              <button
                                id="MenuBreadcrumb0"
                                className="menu-item__heading btn btn--unstyled"
                              >
                                Menu
                              </button>
                              <span>/</span>
                            </li>
                            <li className="menu-item__heading">MEN</li>
                          </ul>

                          <ul
                            className="site-menu__submenu list-unstyled secondary-links"
                            role="list"
                            tabIndex="-1"
                          >
                            <li className="transition-delay">
                              <a href="/men" className="menu-item">
                                Shop Mens
                              </a>
                            </li>

                            <li className="has-submenu transition-delay">
                              <button className="submenu__trigger flex aic jcb menu-item btn btn--unstyled">
                                Ready to Wear
                              </button>
                              <div
                                id="MenuLevel2"
                                className="menu-drawer__content"
                              >
                                <ul className="mmenu__breadcrumbs flex aic list-unstyled">
                                  <li>
                                    <button
                                      id="MenuBreadcrumb0"
                                      className="menu-item__heading btn btn--unstyled"
                                    >
                                      Menu
                                    </button>
                                    <span>/</span>
                                  </li>
                                  <li>
                                    <button
                                      id="MenuBreadcrumb1"
                                      className="menu-item__heading btn btn--unstyled"
                                    >
                                      MEN
                                    </button>
                                    <span>/</span>
                                  </li>
                                  <li className="menu-item__heading">
                                    Ready to Wear
                                  </li>
                                </ul>
                                <ul className="site-menu__sub-submenu list-unstyled tertiary-links">
                                  <li>
                                    <a href="/men" className="menu-item">
                                      Tees
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="has-submenu transition-delay">
                        <button className="submenu__trigger flex aic jcb menu-item btn btn--unstyled">
                          WOMEN
                        </button>

                        <div id="MenuLevel1" className="menu-drawer__content">
                          <ul
                            className="site-menu__submenu list-unstyled secondary-links"
                            role="list"
                            tabIndex="-1"
                          >
                            <li className="transition-delay">
                              <a className="menu-item">Shop Womens</a>
                            </li>

                            <li className="has-submenu transition-delay">
                              <button className="submenu__trigger flex aic jcb menu-item btn btn--unstyled">
                                Ready to Wear
                              </button>
                              <div
                                id="MenuLevel2"
                                className="menu-drawer__content"
                              >
                                <ul className="mmenu__breadcrumbs flex aic list-unstyled">
                                  <li>
                                    <button
                                      id="MenuBreadcrumb0"
                                      className="menu-item__heading btn btn--unstyled"
                                    >
                                      Menu
                                    </button>
                                    <span>/</span>
                                  </li>
                                  <li>
                                    <button
                                      id="MenuBreadcrumb1"
                                      className="menu-item__heading btn btn--unstyled"
                                    >
                                      WOMEN
                                    </button>
                                    <span>/</span>
                                  </li>
                                  <li className="menu-item__heading">
                                    Ready to Wear
                                  </li>
                                </ul>
                                <ul className="site-menu__sub-submenu list-unstyled tertiary-links">
                                  <li>
                                    <a
                                      href="/womens-tees"
                                      className="menu-item"
                                    >
                                      Tees
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="has-submenu transition-delay">
                        <button className="submenu__trigger flex aic jcb menu-item btn btn--unstyled">
                          ACCESSORIES
                        </button>

                        <div id="MenuLevel1" className="menu-drawer__content">
                          <ul className="mmenu__breadcrumbs flex aic list-unstyled">
                            <li>
                              <button
                                id="MenuBreadcrumb0"
                                className="menu-item__heading btn btn--unstyled"
                              >
                                Menu
                              </button>
                              <span>/</span>
                            </li>
                            <li className="menu-item__heading">ACCESSORIES</li>
                          </ul>

                          <ul
                            className="site-menu__submenu list-unstyled secondary-links"
                            role="list"
                            tabIndex="-1"
                          >
                            <li className="transition-delay">
                              <a href="/accessories" className="menu-item">
                                Shop Accessories
                              </a>
                            </li>

                            <li className="transition-delay">
                              <a
                                href="/accessories-jewelry"
                                className="menu-item"
                              >
                                Jewelry
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        {/* <form
                          method="post"
                          action="/en-pk/localization"
                          id="FooterCountryFormHeader"
                          acceptCharset="UTF-8"
                          className="localization-form no-js-hidden"
                          encType="multipart/form-data"
                        >
                          <input
                            type="hidden"
                            name="form_type"
                            value="localization"
                          />
                          <input type="hidden" name="utf8" value="✓" />
                          <input type="hidden" name="_method" value="put" />
                          <input
                            type="hidden"
                            name="return_to"
                            value="/en-pk"
                          />
                          <h2
                            className="visually-hidden"
                            id="FooterCountryLabel"
                          >
                            Country/region
                          </h2>
                          <div className="disclosure container">
                            <button
                              type="button"
                              className="btn btn--unstyled aic"
                              aria-expanded="false"
                              aria-controls="FooterCountryList"
                              aria-describedby="FooterCountryLabel"
                            >
                              <span className="disclosure__label">
                                SHIPPING:
                              </span>
                              Pakistan / PKR ₨
                              <svg
                                className="icon icon--caret-fill"
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.5 0.890137H9.5L5 5.89014L0.5 0.890137Z"
                                  fill="black"
                                ></path>
                              </svg>
                            </button>

                            <ul
                              id="FooterCountryList"
                              role="list"
                              className="disclosure__list list-unstyled content--floating"
                              hidden=""
                            >
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="AL"
                                >
                                  Albania (ALL L)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="DZ"
                                >
                                  Algeria (DZD د.ج)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="AD"
                                >
                                  Andorra (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="AO"
                                >
                                  Angola (AOA Kz)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="AI"
                                >
                                  Anguilla (XCD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="AG"
                                >
                                  Antigua &amp; Barbuda (XCD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="AR"
                                >
                                  Argentina (ARS $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="AM"
                                >
                                  Armenia (AMD դր.)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="AW"
                                >
                                  Aruba (AWG ƒ)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="AU"
                                >
                                  Australia (AUD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="AT"
                                >
                                  Austria (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="AZ"
                                >
                                  Azerbaijan (AZN ₼)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="BS"
                                >
                                  Bahamas (BSD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="BD"
                                >
                                  Bangladesh (BDT ৳)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="BB"
                                >
                                  Barbados (BBD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="BE"
                                >
                                  Belgium (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="BZ"
                                >
                                  Belize (BZD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="BJ"
                                >
                                  Benin (XOF Fr)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="BO"
                                >
                                  Bolivia (BOB Bs.)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="BA"
                                >
                                  Bosnia &amp; Herzegovina (BAM КМ)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="BW"
                                >
                                  Botswana (BWP P)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="BR"
                                >
                                  Brazil (BRL R$)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="VG"
                                >
                                  British Virgin Islands (USD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="BN"
                                >
                                  Brunei (BND $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="BG"
                                >
                                  Bulgaria (BGN лв.)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="BF"
                                >
                                  Burkina Faso (XOF Fr)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="KH"
                                >
                                  Cambodia (KHR ៛)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="CM"
                                >
                                  Cameroon (XAF Fr)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="CA"
                                >
                                  Canada (CAD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="CV"
                                >
                                  Cape Verde (CVE $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="KY"
                                >
                                  Cayman Islands (KYD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="TD"
                                >
                                  Chad (XAF Fr)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="CL"
                                >
                                  Chile (CLP $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="CN"
                                >
                                  China (CNY ¥)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="CO"
                                >
                                  Colombia (COP $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="KM"
                                >
                                  Comoros (KMF Fr)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="CK"
                                >
                                  Cook Islands (NZD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="CR"
                                >
                                  Costa Rica (CRC ₡)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="CI"
                                >
                                  Côte d’Ivoire (XOF Fr)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="HR"
                                >
                                  Croatia (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="CW"
                                >
                                  Curaçao (ANG ƒ)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="CY"
                                >
                                  Cyprus (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="CZ"
                                >
                                  Czechia (CZK Kč)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="DK"
                                >
                                  Denmark (DKK kr.)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="DJ"
                                >
                                  Djibouti (DJF Fdj)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="DM"
                                >
                                  Dominica (XCD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="DO"
                                >
                                  Dominican Republic (DOP $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="EC"
                                >
                                  Ecuador (USD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="EG"
                                >
                                  Egypt (EGP ج.م)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="SV"
                                >
                                  El Salvador (USD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="GQ"
                                >
                                  Equatorial Guinea (XAF Fr)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="EE"
                                >
                                  Estonia (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="SZ"
                                >
                                  Eswatini (SZL E)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="ET"
                                >
                                  Ethiopia (ETB Br)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="FK"
                                >
                                  Falkland Islands (FKP £)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="FO"
                                >
                                  Faroe Islands (DKK kr.)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="FJ"
                                >
                                  Fiji (FJD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="FI"
                                >
                                  Finland (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="FR"
                                >
                                  France (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="GF"
                                >
                                  French Guiana (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="PF"
                                >
                                  French Polynesia (XPF Fr)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="GA"
                                >
                                  Gabon (XOF Fr)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="GM"
                                >
                                  Gambia (GMD D)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="GE"
                                >
                                  Georgia (GEL ლ)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="DE"
                                >
                                  Germany (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="GH"
                                >
                                  Ghana (USD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="GI"
                                >
                                  Gibraltar (GBP £)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="GR"
                                >
                                  Greece (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="GL"
                                >
                                  Greenland (DKK kr.)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="GD"
                                >
                                  Grenada (XCD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="GP"
                                >
                                  Guadeloupe (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="GT"
                                >
                                  Guatemala (GTQ Q)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="GG"
                                >
                                  Guernsey (GBP £)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="GN"
                                >
                                  Guinea (GNF Fr)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="GW"
                                >
                                  Guinea-Bissau (XOF Fr)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="GY"
                                >
                                  Guyana (GYD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="HT"
                                >
                                  Haiti (HTG G)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="HN"
                                >
                                  Honduras (HNL L)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="HK"
                                >
                                  Hong Kong SAR (HKD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="HU"
                                >
                                  Hungary (HUF Ft)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="IS"
                                >
                                  Iceland (ISK kr)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="IN"
                                >
                                  India (INR ₹)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="ID"
                                >
                                  Indonesia (IDR Rp)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="IE"
                                >
                                  Ireland (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="IM"
                                >
                                  Isle of Man (GBP £)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="IL"
                                >
                                  Israel (ILS ₪)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="IT"
                                >
                                  Italy (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="JM"
                                >
                                  Jamaica (JMD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="JP"
                                >
                                  Japan (JPY ¥)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="KE"
                                >
                                  Kenya (KES KSh)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="KW"
                                >
                                  Kuwait (USD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="KG"
                                >
                                  Kyrgyzstan (KGS som)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="LA"
                                >
                                  Laos (LAK ₭)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="LV"
                                >
                                  Latvia (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="LB"
                                >
                                  Lebanon (LBP ل.ل)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="LS"
                                >
                                  Lesotho (LSL L)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="LI"
                                >
                                  Liechtenstein (CHF CHF)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="LT"
                                >
                                  Lithuania (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="LU"
                                >
                                  Luxembourg (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="MO"
                                >
                                  Macao SAR (MOP P)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="MW"
                                >
                                  Malawi (MWK MK)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="MY"
                                >
                                  Malaysia (MYR RM)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="MV"
                                >
                                  Maldives (MVR MVR)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="MT"
                                >
                                  Malta (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="MQ"
                                >
                                  Martinique (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="MU"
                                >
                                  Mauritius (MUR ₨)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="MX"
                                >
                                  Mexico (MXN $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="MD"
                                >
                                  Moldova (MDL L)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="MC"
                                >
                                  Monaco (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="MN"
                                >
                                  Mongolia (MNT ₮)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="ME"
                                >
                                  Montenegro (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="MS"
                                >
                                  Montserrat (XCD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="MA"
                                >
                                  Morocco (MAD د.م.)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="MZ"
                                >
                                  Mozambique (MZN MTn)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="NA"
                                >
                                  Namibia (NAD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="NR"
                                >
                                  Nauru (AUD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="NP"
                                >
                                  Nepal (NPR ₨)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="NL"
                                >
                                  Netherlands (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="NC"
                                >
                                  New Caledonia (XPF Fr)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="NZ"
                                >
                                  New Zealand (NZD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="NI"
                                >
                                  Nicaragua (NIO C$)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="NG"
                                >
                                  Nigeria (NGN ₦)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="NU"
                                >
                                  Niue (NZD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="MK"
                                >
                                  North Macedonia (MKD ден)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="NO"
                                >
                                  Norway (NOK kr)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse link-styled--active focus-inset"
                                  href="#"
                                  aria-current="true"
                                  data-value="PK"
                                >
                                  Pakistan (PKR ₨)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="PA"
                                >
                                  Panama (USD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="PG"
                                >
                                  Papua New Guinea (PGK K)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="PY"
                                >
                                  Paraguay (PYG ₲)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="PE"
                                >
                                  Peru (PEN S/.)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="PH"
                                >
                                  Philippines (PHP ₱)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="PL"
                                >
                                  Poland (PLN zł)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="PT"
                                >
                                  Portugal (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="QA"
                                >
                                  Qatar (QAR ر.ق)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="RE"
                                >
                                  Réunion (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="RO"
                                >
                                  Romania (RON Lei)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="RW"
                                >
                                  Rwanda (RWF FRw)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="SM"
                                >
                                  San Marino (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="ST"
                                >
                                  São Tomé &amp; Príncipe (STD Db)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="SA"
                                >
                                  Saudi Arabia (SAR ر.س)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="SN"
                                >
                                  Senegal (XOF Fr)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="RS"
                                >
                                  Serbia (RSD РСД)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="SC"
                                >
                                  Seychelles (SCR ₨)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="SL"
                                >
                                  Sierra Leone (SLL Le)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="SG"
                                >
                                  Singapore (SGD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="SK"
                                >
                                  Slovakia (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="SI"
                                >
                                  Slovenia (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="SB"
                                >
                                  Solomon Islands (SBD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="ZA"
                                >
                                  South Africa (ZAR R)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="KR"
                                >
                                  South Korea (KRW ₩)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="ES"
                                >
                                  Spain (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="LK"
                                >
                                  Sri Lanka (LKR ₨)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="BL"
                                >
                                  St. Barthélemy (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="KN"
                                >
                                  St. Kitts &amp; Nevis (XCD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="LC"
                                >
                                  St. Lucia (XCD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="MF"
                                >
                                  St. Martin (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="VC"
                                >
                                  St. Vincent &amp; Grenadines (XCD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="SR"
                                >
                                  Suriname (SRD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="SE"
                                >
                                  Sweden (SEK kr)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="CH"
                                >
                                  Switzerland (CHF CHF)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="TW"
                                >
                                  Taiwan (TWD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="TZ"
                                >
                                  Tanzania (TZS Sh)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="TH"
                                >
                                  Thailand (THB ฿)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="TL"
                                >
                                  Timor-Leste (USD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="TG"
                                >
                                  Togo (XOF Fr)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="TO"
                                >
                                  Tonga (TOP T$)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="TT"
                                >
                                  Trinidad &amp; Tobago (TTD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="TR"
                                >
                                  Turkey (TRY ₺)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="TM"
                                >
                                  Turkmenistan (USD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="TC"
                                >
                                  Turks &amp; Caicos Islands (USD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="TV"
                                >
                                  Tuvalu (AUD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="UG"
                                >
                                  Uganda (UGX USh)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="AE"
                                >
                                  United Arab Emirates (AED د.إ)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="GB"
                                >
                                  United Kingdom (GBP £)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="US"
                                >
                                  United States (USD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="UY"
                                >
                                  Uruguay (UYU $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="UZ"
                                >
                                  Uzbekistan (UZS )
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="VU"
                                >
                                  Vanuatu (VUV Vt)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="VA"
                                >
                                  Vatican City (EUR €)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="VE"
                                >
                                  Venezuela (USD $)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="VN"
                                >
                                  Vietnam (VND ₫)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="WF"
                                >
                                  Wallis &amp; Futuna (XPF Fr)
                                </a>
                              </li>
                              <li className="disclosure__item" tabIndex="-1">
                                <a
                                  className="link-styled--reverse focus-inset"
                                  href="#"
                                  data-value="ZM"
                                >
                                  Zambia (ZMW ZK)
                                </a>
                              </li>
                            </ul>
                          </div>
                          <input type="hidden" name="country_code" value="PK" />
                        </form> */}
                      </li>
                      <li className="mmenu-account">
                        <a href="/login" className="account menu-item">
                          <span>
                            <svg
                              className="icon icon--account-2"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="10"
                                cy="5"
                                r="4"
                                stroke="black"
                              ></circle>
                              <path
                                d="M19.0247 19.44C19.0247 14.433 14.9562 11.5 9.93818 11.5C4.92014 11.5 0.851074 14.433 0.851074 19.44H19.0247Z"
                                stroke="#333333"
                                strokeMiterlimit="10"
                              ></path>
                            </svg>
                          </span>
                          <span>Log in / Create An Account</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="menu-drawer__promo">
                    <a
                      href="/collections/mens-autumn-winter-2023-collection"
                      className="flex"
                    >
                      <img
                        loading="lazy"
                        src="/cdn/shop/files/Mobile-Nav-Banner_AW32-Featured-Collection-2.jpg?v=1692302180&amp;width=760"
                        alt=""
                        width="373"
                        height="522.0"
                      />
                      <p>AUTUMN-WINTER 2023</p>
                    </a>
                  </div>
                  {/* <div className="accessibility-link-container flex">
                    <a
                      href="/en-pk/pages/accessibility-statement"
                      className="accessibility-link"
                    >
                      <svg
                        className="icon icon--accessibility"
                        width="34"
                        height="14"
                        viewBox="0 0 34 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1102_1899)">
                          <path
                            d="M10.6071 0.140137H6.39286C2.86218 0.140137 0 3.04992 0 6.63931V6.64096C0 10.2304 2.86218 13.1401 6.39286 13.1401H10.6071C14.1378 13.1401 17 10.2304 17 6.64096V6.63931C17 3.04992 14.1378 0.140137 10.6071 0.140137Z"
                            fill="#D9D9D9"
                          ></path>
                          <path
                            d="M27.6071 0.140137H23.3929C19.8622 0.140137 17 3.04992 17 6.63931V6.64096C17 10.2304 19.8622 13.1401 23.3929 13.1401H27.6071C31.1378 13.1401 34 10.2304 34 6.64096V6.63931C34 3.04992 31.1378 0.140137 27.6071 0.140137Z"
                            fill="#D9D9D9"
                          ></path>
                          <path
                            d="M17.1067 10.9995C19.4745 10.9995 21.394 9.04808 21.394 6.64087C21.394 4.23366 19.4745 2.28223 17.1067 2.28223C14.7388 2.28223 12.8193 4.23366 12.8193 6.64087C12.8193 9.04808 14.7388 10.9995 17.1067 10.9995Z"
                            fill="white"
                          ></path>
                          <path
                            d="M7.26945 3.89151C7.39745 3.88956 7.52202 3.84919 7.62752 3.77548C7.73301 3.70176 7.81472 3.59799 7.86238 3.47721C7.91004 3.35642 7.92152 3.22401 7.89537 3.09661C7.86923 2.96922 7.80663 2.85252 7.71544 2.76118C7.62425 2.66985 7.50854 2.60795 7.38285 2.58327C7.25716 2.55859 7.1271 2.57223 7.00902 2.62247C6.89093 2.67271 6.79008 2.75732 6.71915 2.86566C6.64822 2.97399 6.61037 3.10122 6.61036 3.23136C6.61035 3.3189 6.62746 3.40556 6.6607 3.4863C6.69394 3.56705 6.74265 3.64027 6.80398 3.7017C6.86531 3.76313 6.93805 3.81155 7.01796 3.84413C7.09787 3.87672 7.18336 3.89283 7.26945 3.89151ZM8.98211 8.27986C8.91955 8.30092 8.86346 8.33817 8.81934 8.38794C8.77523 8.43771 8.74461 8.49829 8.73049 8.56372V8.57693C8.63376 8.86797 8.47091 9.13172 8.25513 9.34678C8.03935 9.56185 7.77674 9.72216 7.48861 9.81471C7.23753 9.89266 6.97296 9.91517 6.71263 9.88072C6.32674 9.8163 5.96722 9.64043 5.67692 9.37406L5.64607 9.35425L5.5649 9.27008C5.54055 9.24203 5.5162 9.21562 5.49347 9.18592C5.47075 9.15621 5.47886 9.16611 5.47075 9.15786C5.3127 8.95685 5.1947 8.72646 5.12334 8.47956C5.04062 8.19774 5.01793 7.90124 5.05679 7.60981C5.09676 7.3031 5.20687 7.01019 5.37827 6.75454C5.54967 6.49889 5.77761 6.28762 6.0438 6.13767H6.05516C6.13598 6.10643 6.20428 6.04874 6.24929 5.97369C6.29431 5.89864 6.3135 5.8105 6.30383 5.72315C6.29416 5.6358 6.25618 5.55421 6.19588 5.49121C6.13558 5.42822 6.05637 5.3874 5.97075 5.3752C5.89628 5.36368 5.82015 5.37639 5.75321 5.41151C5.3605 5.6169 5.02251 5.91586 4.76809 6.28285C4.51367 6.64984 4.35039 7.07398 4.29218 7.51904C4.23219 7.94179 4.26716 8.37287 4.39445 8.77992C4.49244 9.11807 4.655 9.43328 4.87285 9.70754C5.0907 9.9818 5.35957 10.2097 5.66409 10.3783C5.96862 10.5469 6.30283 10.6528 6.64764 10.6901C6.99245 10.7273 7.3411 10.6951 7.67367 10.5953C8.09277 10.461 8.47315 10.2245 8.7816 9.9063C9.09005 9.58812 9.31718 9.198 9.44315 8.77002C9.46594 8.69475 9.46594 8.61424 9.44315 8.53897C9.42989 8.49101 9.4074 8.4462 9.37697 8.40714C9.34654 8.36809 9.30879 8.33556 9.2659 8.31146C9.22301 8.28735 9.17584 8.27215 9.12712 8.26673C9.07841 8.2613 9.02912 8.26577 8.98211 8.27986Z"
                            fill="black"
                          ></path>
                          <path
                            d="M12.0615 8.82621C12.0225 8.75911 11.9593 8.71016 11.8852 8.68981C11.8112 8.66946 11.7323 8.67932 11.6654 8.71729L11.232 8.96484L10.1313 7.27816C10.0979 7.21729 10.0495 7.16628 9.99089 7.13012C9.93227 7.09395 9.86542 7.07388 9.79689 7.07186H7.73033V6.41171H9.16215C9.26477 6.40243 9.36026 6.35442 9.42981 6.27714C9.49936 6.19986 9.53793 6.09891 9.53793 5.99417C9.53793 5.88942 9.49936 5.78847 9.42981 5.71119C9.36026 5.63392 9.26477 5.58591 9.16215 5.57662H7.73033V4.70192C7.73033 4.57674 7.68141 4.45668 7.59434 4.36816C7.50727 4.27965 7.38918 4.22992 7.26604 4.22992C7.14291 4.22992 7.02481 4.27965 6.93774 4.36816C6.85067 4.45668 6.80176 4.57674 6.80176 4.70192V7.44815C6.8023 7.56671 6.84581 7.68092 6.92398 7.76891C7.00215 7.85691 7.10949 7.91252 7.22546 7.92511C7.25736 7.92675 7.28933 7.92675 7.32124 7.92511H9.71897L10.7628 9.52432C10.8125 9.59951 10.8886 9.65262 10.9755 9.67285C10.9972 9.67869 11.0195 9.68201 11.042 9.68275H11.0501C11.0895 9.6844 11.1288 9.67765 11.1654 9.66295H11.1865C11.1924 9.66221 11.1984 9.66221 11.2044 9.66295L11.9527 9.23715C11.9875 9.2185 12.018 9.19277 12.0426 9.16156C12.0671 9.13036 12.085 9.09434 12.0952 9.05578C12.1054 9.01721 12.1077 8.97692 12.1019 8.93742C12.0961 8.89792 12.0823 8.86006 12.0615 8.82621ZM28.7644 10.5657C28.7644 10.5845 28.7571 10.6026 28.744 10.6159C28.7309 10.6292 28.7131 10.6367 28.6946 10.6367H22.9414C22.923 10.6363 22.9055 10.6286 22.8925 10.6154C22.8795 10.6022 22.872 10.5844 22.8716 10.5657V8.42022C22.8716 8.4109 22.8734 8.40167 22.8769 8.39306C22.8804 8.38445 22.8855 8.37663 22.892 8.37004C22.8985 8.36345 22.9062 8.35822 22.9147 8.35465C22.9231 8.35109 22.9322 8.34925 22.9414 8.34925H28.6979C28.7164 8.34925 28.7341 8.35673 28.7472 8.37004C28.7603 8.38335 28.7677 8.4014 28.7677 8.42022V10.5657M25.0339 9.37578H25.6021C25.6182 9.37535 25.6334 9.36856 25.6447 9.35684C25.6559 9.34513 25.6622 9.32942 25.6621 9.31307V8.73544C25.6622 8.71909 25.6559 8.70338 25.6447 8.69167C25.6334 8.67995 25.6182 8.67316 25.6021 8.67273H25.0339C25.0175 8.67273 25.0018 8.67933 24.9903 8.69109C24.9787 8.70285 24.9722 8.71881 24.9722 8.73544V9.31307C24.9722 9.3297 24.9787 9.34565 24.9903 9.35742C25.0018 9.36918 25.0175 9.37578 25.0339 9.37578ZM23.9495 9.57548H23.3813C23.3734 9.57525 23.3654 9.57668 23.3581 9.57966C23.3507 9.58265 23.344 9.58714 23.3383 9.59286C23.3327 9.59857 23.3283 9.6054 23.3254 9.61291C23.3224 9.62042 23.321 9.62846 23.3212 9.63654V10.2142C23.321 10.2223 23.3224 10.2303 23.3254 10.2378C23.3283 10.2453 23.3327 10.2521 23.3383 10.2579C23.344 10.2636 23.3507 10.2681 23.3581 10.2711C23.3654 10.274 23.3734 10.2755 23.3813 10.2752H23.9495C23.9575 10.2755 23.9655 10.274 23.973 10.2711C23.9804 10.2681 23.9873 10.2636 23.993 10.2579C23.9988 10.2523 24.0033 10.2454 24.0065 10.2379C24.0096 10.2304 24.0112 10.2223 24.0112 10.2142V9.63654C24.0112 9.62838 24.0096 9.62031 24.0065 9.61279C24.0033 9.60527 23.9988 9.59846 23.993 9.59277C23.9873 9.58708 23.9804 9.58262 23.973 9.57965C23.9655 9.57668 23.9575 9.57526 23.9495 9.57548ZM23.9495 9.36753H24.516C24.5324 9.36753 24.5481 9.36093 24.5597 9.34916C24.5712 9.3374 24.5777 9.32145 24.5777 9.30482V8.72719C24.5777 8.71055 24.5712 8.6946 24.5597 8.68284C24.5481 8.67108 24.5324 8.66447 24.516 8.66447H23.9495C23.9412 8.66425 23.9331 8.66571 23.9254 8.66876C23.9177 8.67182 23.9107 8.6764 23.9048 8.68225C23.8989 8.68809 23.8942 8.69508 23.891 8.7028C23.8878 8.71052 23.8862 8.71881 23.8862 8.72719V9.30482C23.8862 9.31319 23.8878 9.32149 23.891 9.32921C23.8942 9.33692 23.8989 9.34391 23.9048 9.34976C23.9107 9.3556 23.9177 9.36019 23.9254 9.36324C23.9331 9.36629 23.9412 9.36775 23.9495 9.36753ZM26.0988 9.36753H26.667C26.6834 9.36753 26.6991 9.36093 26.7106 9.34916C26.7222 9.3374 26.7287 9.32145 26.7287 9.30482V8.72719C26.7287 8.71055 26.7222 8.6946 26.7106 8.68284C26.6991 8.67108 26.6834 8.66447 26.667 8.66447H26.1005C26.0924 8.66447 26.0845 8.6661 26.0771 8.66927C26.0697 8.67245 26.063 8.67709 26.0574 8.68294C26.0518 8.68878 26.0474 8.69571 26.0445 8.70331C26.0416 8.71091 26.0402 8.71903 26.0404 8.72719V9.30482C26.0402 9.31298 26.0416 9.32109 26.0445 9.32869C26.0474 9.33629 26.0518 9.34322 26.0574 9.34907C26.063 9.35491 26.0697 9.35956 26.0771 9.36273C26.0845 9.3659 26.0924 9.36754 26.1005 9.36753M27.1768 9.36753H27.7449C27.753 9.36754 27.7609 9.3659 27.7683 9.36273C27.7757 9.35956 27.7824 9.35491 27.788 9.34907C27.7936 9.34322 27.798 9.33629 27.8009 9.32869C27.8038 9.32109 27.8052 9.31298 27.805 9.30482V8.72719C27.8052 8.71903 27.8038 8.71091 27.8009 8.70331C27.798 8.69571 27.7936 8.68878 27.788 8.68294C27.7824 8.67709 27.7757 8.67245 27.7683 8.66927C27.7609 8.6661 27.753 8.66447 27.7449 8.66447H27.1768C27.1687 8.66447 27.1608 8.6661 27.1534 8.66927C27.146 8.67245 27.1393 8.67709 27.1337 8.68294C27.1281 8.68878 27.1237 8.69571 27.1208 8.70331C27.1179 8.71091 27.1165 8.71903 27.1167 8.72719V9.30482C27.1165 9.31298 27.1179 9.32109 27.1208 9.32869C27.1237 9.33629 27.1281 9.34322 27.1337 9.34907C27.1393 9.35491 27.146 9.35956 27.1534 9.36273C27.1608 9.3659 27.1687 9.36754 27.1768 9.36753ZM27.1768 9.57548H26.6086C26.6006 9.57526 26.5926 9.57668 26.5851 9.57965C26.5776 9.58262 26.5708 9.58708 26.565 9.59277C26.5593 9.59846 26.5547 9.60527 26.5516 9.61279C26.5485 9.62031 26.5469 9.62838 26.5469 9.63654V10.2142C26.5469 10.2223 26.5485 10.2304 26.5516 10.2379C26.5547 10.2454 26.5593 10.2523 26.565 10.2579C26.5708 10.2636 26.5776 10.2681 26.5851 10.2711C26.5926 10.274 26.6006 10.2755 26.6086 10.2752H27.1768C27.1848 10.2755 27.1928 10.274 27.2002 10.2711C27.2077 10.2681 27.2145 10.2636 27.2203 10.2579C27.226 10.2523 27.2306 10.2454 27.2337 10.2379C27.2368 10.2304 27.2384 10.2223 27.2384 10.2142V9.63654C27.2384 9.62838 27.2368 9.62031 27.2337 9.61279C27.2306 9.60527 27.226 9.59846 27.2203 9.59277C27.2145 9.58708 27.2077 9.58262 27.2002 9.57965C27.1928 9.57668 27.1848 9.57526 27.1768 9.57548ZM25.0242 9.57548H24.4576C24.4496 9.57526 24.4416 9.57668 24.4341 9.57965C24.4266 9.58262 24.4198 9.58708 24.4141 9.59277C24.4083 9.59846 24.4038 9.60527 24.4006 9.61279C24.3975 9.62031 24.3959 9.62838 24.3959 9.63654V10.2142C24.3959 10.2223 24.3975 10.2304 24.4006 10.2379C24.4038 10.2454 24.4083 10.2523 24.4141 10.2579C24.4198 10.2636 24.4266 10.2681 24.4341 10.2711C24.4416 10.274 24.4496 10.2755 24.4576 10.2752H25.0242C25.0323 10.2757 25.0405 10.2744 25.0481 10.2716C25.0558 10.2687 25.0628 10.2643 25.0687 10.2586C25.0747 10.2528 25.0794 10.246 25.0826 10.2383C25.0858 10.2307 25.0875 10.2225 25.0875 10.2142V9.63654C25.0875 9.62824 25.0858 9.62002 25.0826 9.61239C25.0794 9.60476 25.0747 9.59787 25.0687 9.59215C25.0628 9.58644 25.0558 9.58201 25.0481 9.57915C25.0405 9.57628 25.0323 9.57503 25.0242 9.57548ZM28.2531 9.57548H27.6849C27.6768 9.57526 27.6689 9.57668 27.6614 9.57965C27.6539 9.58262 27.6471 9.58708 27.6413 9.59277C27.6356 9.59846 27.631 9.60527 27.6279 9.61279C27.6248 9.62031 27.6232 9.62838 27.6232 9.63654V10.2142C27.6232 10.2223 27.6248 10.2304 27.6279 10.2379C27.631 10.2454 27.6356 10.2523 27.6413 10.2579C27.6471 10.2636 27.6539 10.2681 27.6614 10.2711C27.6689 10.274 27.6768 10.2755 27.6849 10.2752H28.2531C28.269 10.2752 28.2843 10.2688 28.2955 10.2574C28.3068 10.2459 28.3131 10.2304 28.3131 10.2142V9.63654C28.3131 9.62035 28.3068 9.60482 28.2955 9.59337C28.2843 9.58191 28.269 9.57548 28.2531 9.57548ZM26.1005 9.57548H25.5323C25.5243 9.57526 25.5163 9.57668 25.5088 9.57965C25.5013 9.58262 25.4945 9.58708 25.4888 9.59277C25.483 9.59846 25.4784 9.60527 25.4753 9.61279C25.4722 9.62031 25.4706 9.62838 25.4706 9.63654V10.2142C25.4706 10.2223 25.4722 10.2304 25.4753 10.2379C25.4784 10.2454 25.483 10.2523 25.4888 10.2579C25.4945 10.2636 25.5013 10.2681 25.5088 10.2711C25.5163 10.274 25.5243 10.2755 25.5323 10.2752H26.1005C26.1085 10.2755 26.1165 10.274 26.1239 10.2711C26.1314 10.2681 26.1382 10.2636 26.144 10.2579C26.1497 10.2523 26.1543 10.2454 26.1574 10.2379C26.1605 10.2304 26.1622 10.2223 26.1621 10.2142V9.63654C26.1622 9.62838 26.1605 9.62031 26.1574 9.61279C26.1543 9.60527 26.1497 9.59846 26.144 9.59277C26.1382 9.58708 26.1314 9.58262 26.1239 9.57965C26.1165 9.57668 26.1085 9.57526 26.1005 9.57548ZM23.016 7.98782C23.0151 8.00306 23.02 8.01807 23.0297 8.02975C23.0393 8.04142 23.0531 8.04887 23.068 8.05053H28.5777C28.5925 8.04887 28.6061 8.04136 28.6155 8.02964C28.6249 8.01791 28.6294 8.00289 28.6281 7.98782V2.71652C28.6294 2.70145 28.6249 2.68644 28.6155 2.67471C28.6061 2.66298 28.5925 2.65547 28.5777 2.65381H23.0631C23.0482 2.65548 23.0345 2.66292 23.0248 2.6746C23.0151 2.68627 23.0102 2.70129 23.0112 2.71652L23.016 7.98782ZM23.7628 7.05206V3.5021C23.7626 3.4956 23.7636 3.48912 23.7659 3.48302C23.7681 3.47693 23.7715 3.47135 23.7759 3.4666C23.7803 3.46185 23.7855 3.45802 23.7914 3.45533C23.7972 3.45265 23.8035 3.45115 23.8099 3.45094H27.8683C27.8746 3.45115 27.8809 3.45265 27.8866 3.45536C27.8924 3.45806 27.8975 3.46192 27.9017 3.4667C27.906 3.47147 27.9092 3.47707 27.9113 3.48315C27.9134 3.48924 27.9142 3.49568 27.9138 3.5021V7.05206C27.9142 7.05856 27.9134 7.06509 27.9113 7.07127C27.9093 7.07745 27.9061 7.08316 27.9018 7.08806C27.8976 7.09297 27.8925 7.09698 27.8867 7.09987C27.881 7.10275 27.8747 7.10445 27.8683 7.10487H23.8099C23.7968 7.10402 23.7846 7.09803 23.7758 7.08817C23.767 7.07831 23.7623 7.06536 23.7628 7.05206ZM18.844 5.81428L15.4349 4.01042C15.4349 4.75309 15.5177 5.23169 16.0193 5.49575L17.7336 6.40181L18.844 5.81428ZM19.2904 6.05028L18.1751 6.63946L16.0355 7.77492C15.5485 8.04558 15.4349 8.63147 15.4349 9.27181L18.5339 7.63299C19.219 7.2534 19.2936 6.78965 19.2936 6.05028H19.2904Z"
                            fill="black"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1102_1899">
                            <rect
                              width="34"
                              height="13"
                              fill="white"
                              transform="translate(0 0.140137)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>

                      <span className="visually-hidden">
                        Essential Accessibility
                      </span>
                    </a>
                  </div> */}
                </section>
              </div>
            </div>
          </details>
          <div className="global-search">
            <button
              id="searchDrawerTrigger"
              className="search-trigger btn btn--unstyled"
              aria-label="Search"
              onClick={handlesearchsidebar}
            >
              <svg
                className="icon icon--search"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 7.5C14 11.0899 11.0899 14 7.5 14C3.91015 14 1 11.0899 1 7.5C1 3.91015 3.91015 1 7.5 1C11.0899 1 14 3.91015 14 7.5ZM12.438 13.1451C11.1188 14.3001 9.39113 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 9.39113 14.3001 11.1188 13.1451 12.438L19.8536 19.1464L19.1464 19.8536L12.438 13.1451Z"
                  fill="black"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="desktop-menu">
          <nav className="site-menu">
            <ul className="list-unstyled flex primary-links" role="list">
              <li className="menu-item__level-0 has-submenu transition-delay">
                <div className="dropdown--level-0">
                  <a href="/men" className="menu-item men">
                    <span className="menu-item__text">MEN</span>
                  </a>

                  <div className="megamenu flex">
                    <div className="megamenu-links">
                      <ul
                        className="site-menu__submenu list-unstyled secondary-links flex flex--wrap flex--column jcs"
                        role="list"
                        tabIndex="-1"
                      >
                        <li
                          className="menu-item__level-1 has-submenu"
                          data-link-handle="ready-to-wear"
                        >
                          <div className="submenu-content">
                            <div className="submenu__summary">
                              <a className="menu-item">Ready to Wear</a>
                              <span className="details__icon"></span>
                            </div>
                            <div className="submenu__details">
                              <ul
                                className="submenu__grandchildren"
                                style={{ paddingTop: "15px" }}
                              >
                                <li>
                                  <a
                                    href="/men"
                                    className="menu-item__level-2 link-styled menu-item"
                                  >
                                    Tees
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="megamenu-image">
                      <a href="/men" className="promo-image">
                        <img
                          loading="lazy"
                          src="/cdn/shop/collections/1_2000x_7f6f7338-9c33-4e71-95ef-1b9d417f7a75.jpg?v=1692292640&amp;width=3000"
                          alt="MEN"
                          width="3000"
                          height="1813.0000000000002"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li className="menu-item__level-0 has-submenu transition-delay">
                <div className="dropdown--level-0">
                  <a href="/women" className="menu-item women">
                    <span className="menu-item__text">WOMEN</span>
                  </a>

                  <div className="megamenu flex">
                    <div className="megamenu-links">
                      <ul
                        className="site-menu__submenu list-unstyled secondary-links flex flex--wrap flex--column jcs"
                        role="list"
                        tabIndex="-1"
                      >
                        <li
                          className="menu-item__level-1 has-submenu"
                          data-link-handle="ready-to-wear"
                        >
                          <div className="submenu-content">
                            <div className="submenu__summary">
                              <a className="menu-item">Ready to Wear</a>
                              <span className="details__icon"></span>
                            </div>
                            <div className="submenu__details">
                              <ul
                                className="submenu__grandchildren"
                                style={{ paddingTop: "15px" }}
                              >
                                <li>
                                  <a
                                    href="/women"
                                    className="menu-item__level-2 link-styled menu-item"
                                  >
                                    Tees
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="megamenu-image">
                      <a href="/women" className="promo-image">
                        <img
                          loading="lazy"
                          src="/cdn/shop/collections/211215_HL_AMIRI_WOMENS_SOCIAL_LOOK_08_0023_RGB.jpg?v=1692292686&amp;width=3000"
                          alt="WOMEN"
                          width="3000"
                          height="1813.0000000000002"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu-item__level-0 has-submenu transition-delay">
                <div className="dropdown--level-0">
                  <a href="/accessories" className="menu-item accessories">
                    <span className="menu-item__text">ACCESSORIES</span>
                  </a>

                  <div className="megamenu flex">
                    <div className="megamenu-links">
                      <ul
                        className="site-menu__submenu list-unstyled secondary-links flex flex--wrap flex--column jcs"
                        role="list"
                        tabIndex="-1"
                      >
                        <li
                          className="menu-item__level-1 has-submenu submenu-no-children"
                          data-link-handle="jewelry"
                        >
                          <div className="submenu-content">
                            <div className="submenu__summary">
                              <a href="jewelry" className="menu-item">
                                Jewelry
                              </a>
                              <span className="details__icon"></span>
                            </div>
                            <div className="submenu__details">
                              <ul
                                className="submenu__grandchildren"
                                style={{ paddingTop: "15px" }}
                              ></ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="megamenu-image">
                      <a href="/accessories" className="promo-image">
                        <img
                          loading="lazy"
                          src="/cdn/shop/collections/PF23_Nav_Banner_Accessories-1.jpg?v=1692297074&amp;width=3000"
                          alt="ACCESSORIES"
                          width="3000"
                          height="1813.0000000000002"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li className="mmenu-account transition-delay">
                <a
                  href="/login"
                  className="flex flex--gap link-styled--reverse"
                  style={{ gap: "0 1rem" }}
                >
                  <span>
                    <svg
                      className="icon icon--account"
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8C10.2091 8 12 6.20914 12 4ZM0.25 15.3333C0.25 13.0962 2.02307 11.25 4.25 11.25H11.75C13.9769 11.25 15.75 13.0962 15.75 15.3333V17C15.75 17.4142 15.4142 17.75 15 17.75H1C0.585786 17.75 0.25 17.4142 0.25 17V15.3333Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <span>Log in / Create An Account</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <h1 className="site-logo flex jcc aic">
          <Link href="/" className="">
            <img
              src="cdn/shop/files/logo_be4041d5-a81e-4d1e-a43d-29b0b0d52cbe.png?v=1678302533"
              alt="AMIRI"
              srcSet="
                  /cdn/shop/files/logo_be4041d5-a81e-4d1e-a43d-29b0b0d52cbe.png?v=1678302533&amp;width=50   50w,
                  /cdn/shop/files/logo_be4041d5-a81e-4d1e-a43d-29b0b0d52cbe.png?v=1678302533&amp;width=100 100w,
                  /cdn/shop/files/logo_be4041d5-a81e-4d1e-a43d-29b0b0d52cbe.png?v=1678302533&amp;width=150 150w,
                  /cdn/shop/files/logo_be4041d5-a81e-4d1e-a43d-29b0b0d52cbe.png?v=1678302533&amp;width=200 200w,
                  /cdn/shop/files/logo_be4041d5-a81e-4d1e-a43d-29b0b0d52cbe.png?v=1678302533&amp;width=250 250w,
                  /cdn/shop/files/logo_be4041d5-a81e-4d1e-a43d-29b0b0d52cbe.png?v=1678302533&amp;width=300 300w,
                  /cdn/shop/files/logo_be4041d5-a81e-4d1e-a43d-29b0b0d52cbe.png?v=1678302533&amp;width=400 400w
                "
              width="426"
              height="24.507042253521124"
              className="header__heading-logo"
            />

            <img
              src="cdn/shop/files/logo_3dd0e53b-8315-42f1-911d-78b11a710ac1.png?v=1678302840"
              alt="AMIRI"
              srcSet="
                  /cdn/shop/files/logo_3dd0e53b-8315-42f1-911d-78b11a710ac1.png?v=1678302840&amp;width=50   50w,
                  /cdn/shop/files/logo_3dd0e53b-8315-42f1-911d-78b11a710ac1.png?v=1678302840&amp;width=100 100w,
                  /cdn/shop/files/logo_3dd0e53b-8315-42f1-911d-78b11a710ac1.png?v=1678302840&amp;width=150 150w,
                  /cdn/shop/files/logo_3dd0e53b-8315-42f1-911d-78b11a710ac1.png?v=1678302840&amp;width=200 200w,
                  /cdn/shop/files/logo_3dd0e53b-8315-42f1-911d-78b11a710ac1.png?v=1678302840&amp;width=250 250w
                "
              width="426"
              height="24.507042253521124"
              className="header__heading-logo alt-header-logo"
            />
          </Link>
        </h1>
        <div className="header__util-link flex aic jce">
          <div className="global-search">
            <button
              id="searchDrawerTrigger"
              className="search-trigger btn btn--unstyled"
              aria-label="Search"
              onClick={handlesearchsidebar}
            >
              <svg
                className="icon icon--search"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 7.5C14 11.0899 11.0899 14 7.5 14C3.91015 14 1 11.0899 1 7.5C1 3.91015 3.91015 1 7.5 1C11.0899 1 14 3.91015 14 7.5ZM12.438 13.1451C11.1188 14.3001 9.39113 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 9.39113 14.3001 11.1188 13.1451 12.438L19.8536 19.1464L19.1464 19.8536L12.438 13.1451Z"
                  fill="black"
                ></path>
              </svg>
            </button>
          </div>
          <a
            href="/login"
            aria-label="Login/View my account"
            className="account "
          >
            <span>
              <svg
                className="icon icon--account-2"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="5" r="4" stroke="black"></circle>
                <path
                  d="M19.0247 19.44C19.0247 14.433 14.9562 11.5 9.93818 11.5C4.92014 11.5 0.851074 14.433 0.851074 19.44H19.0247Z"
                  stroke="#333333"
                  strokeMiterlimit="10"
                ></path>
              </svg>
            </span>
          </a>
          <Link
            to="/wishlist"
            className="wk-link wk-link--empty"
            title="View Wishlist"
            data-appmate=""
          >
            <div className="wk-icon wk-link__icon">
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
            <span className="wk-link__label">Wishlist</span>
            <span className="wk-link__count">{wishlistItemsCount}</span>
          </Link>
          <span id="wishlist-link-placeholder" data-appmate=""></span>

          <a
            id="cart-icon-bubble"
            className="flex aic jcc "
            role="button"
            aria-haspopup="dialog"
            aria-label="Toggle cart drawer"
            onClick={handleopencartsidebar}
          >
            <span className="visually-hidden"> Bag ({cartItemsCount}) </span>
            <span
              className={`cart-icon-container ${
                cartItemsCount > 0 ? "cart-icon--active" : ""
              }`}
            >
              {cartItemsCount > 0 ? (
                <span className="cart-item-count">{cartItemsCount}</span>
              ) : null}
              <svg
                className="icon icon--cart-2"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {cartItemsCount > 0 ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.83334 5.00003H13.1665C13.1538 4.15425 12.8136 3.34936 12.2222 2.75795C11.6284 2.16425 10.8298 1.83337 9.99992 1.83337C9.17008 1.83337 8.37139 2.16425 7.77768 2.75795C7.18627 3.34936 6.846 4.15425 6.83334 5.00003ZM14.1666 5.00003C14.1539 3.89054 13.7093 2.83086 12.9293 2.05085C12.1492 1.27083 11.0967 0.833374 9.99992 0.833374C8.90315 0.833374 7.8506 1.27083 7.07058 2.05085C6.29056 2.83086 5.84597 3.89054 5.83325 5.00003H0.916667L0 20H20L19.0833 5.00003H14.1666Z"
                    fill="black"
                  ></path>
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.86068 5H13.1938C13.1812 4.15422 12.8409 3.34933 12.2495 2.75792C11.6558 2.16422 10.8571 1.83334 10.0273 1.83334C9.19743 1.83334 8.39873 2.16422 7.80503 2.75792C7.21362 3.34933 6.87334 4.15422 6.86068 5ZM14.1939 5C14.1812 3.89051 13.7366 2.83083 12.9566 2.05082C12.1766 1.2708 11.124 0.833344 10.0273 0.833344C8.93049 0.833344 7.87794 1.2708 7.09792 2.05082C6.3179 2.83083 5.87332 3.89051 5.8606 5H0.94401L0.0273438 20H20.0273L19.1107 5H14.1939ZM1.88476 6H18.1699L18.9644 19H1.09032L1.88476 6Z"
                    fill="none"
                  ></path>
                )}
              </svg>
            </span>
          </a>
        </div>
      </header>
    </div>
  );
};
