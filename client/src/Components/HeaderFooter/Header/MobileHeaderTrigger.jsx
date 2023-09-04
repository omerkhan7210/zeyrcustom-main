import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { CartContextC } from '../../Context/CartContext';
 const MobileHeaderTrigger = () => {

    const {cartItemsCount} = useContext(CartContextC);

  return (
    <div className="header-mobile custom logo-center">
    <div className="konte-container-fluid">
        <div className="mobile-menu-hamburger">
            <button className="mobile-menu-toggle hamburger-menu" data-toggle="off-canvas" data-target="mobile-menu">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </div>
        <div className="site-branding">
            <Link to="/"  className="logo">
                <img src="/images/logo.svg" alt="Konte" className="logo-dark"/>
                <img src="/images/logo-light.svg" alt="Konte" className="logo-light"/>
            </Link>
            <p className="site-title">
                <Link to="/" rel="home">ZeyrFineri</Link>
                </p>
        </div>
        <div className="mobile-header-icons">
            <div className="header-cart">
                <a href="#" data-toggle="off-canvas" data-target="cart-panel">
                    <span className="svg-icon icon-cart size-normal shopping-cart-icon">
                        <span className="svg-icon icon-heart-o size-normal ">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/></svg>
                        </span>
                    </span>
                    <span className="counter cart-counter">{cartItemsCount}</span>
                </a>
            </div>
        </div>
    </div>
</div>
  )
}

export default MobileHeaderTrigger;
