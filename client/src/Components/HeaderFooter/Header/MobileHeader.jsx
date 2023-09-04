import {React,useContext} from 'react';
import { Link } from 'react-router-dom';
import {WishlistContextC} from '../../Context/WishlistContext';
import { CartContextC } from '../../Context/CartContext';


const MobileHeader = ()=>{

const {cartItemsCount} = useContext(CartContextC);
const {wishlistItemsCount} = useContext(WishlistContextC)

    return (
        
	<div id="mobile-menu" className="mobile-menu-panel offscreen-panel">
		<div className="backdrop"></div>
		<div className="panel">
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
						<Link to="/" className='logo'>
							<img src="assets/images/logo.svg" alt="Konte" className="logo-dark"/>
							<img src="assets/images/logo-light.svg" alt="Konte" className="logo-light"/>
						</Link>
						<p className="site-title"><Link to="/">Konte</Link></p>
						<p className="site-description">Premium WordPress theme</p>
					</div>
					<div className="mobile-header-icons">
						<div className="header-cart">
							<Link to="/cart" data-toggle="off-canvas" data-target="cart-panel">
								<span className="svg-icon icon-cart size-normal shopping-cart-icon">
								<svg width="24px" height="24px" viewBox="0 0 24 24">
                    <g>
                        <rect fill="none" width="24" height="24"/>
                        <path d="M19,10h-3V7c0-2.206-1.794-4-4-4S8,4.794,8,7v3H5c-0.55,0-0.908,0.441-0.797,0.979l1.879,9.042
                        C6.194,20.559,6.736,21,7.286,21h9.429c0.55,0,1.092-0.441,1.203-0.979l1.879-9.042C19.908,10.441,19.55,10,19,10z M10,7 c0-1.103,0.897-2,2-2s2,0.897,2,2v3h-4V7z M16.087,19H7.913l-1.455-7h11.313L16.087,19z"/>
                    </g>
                </svg>
								</span>
								<span className="counter cart-counter">{cartItemsCount}</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="mobile-menu__search-form">
				<form method="get" action="#">
					<label>
						<span className="svg-icon icon-search size-normal search-icon">
							<svg width="24px" height="24px" viewBox="0 0 24 24">
								<g>
									<rect fill="none" width="24" height="24"/>
									<path d="M20,18.586l-3.402-3.402C17.474,14.015,18,12.57,18,11c0-3.86-3.141-7-7-7c-3.86,0-7,3.14-7,7c0,3.859,3.14,7,7,7 c1.57,0,3.015-0.526,4.184-1.402L18.586,20L20,18.586z M6,11c0-2.757,2.243-5,5-5s5,2.243,5,5s-2.243,5-5,5S6,13.757,6,11z"/>
								</g>
							</svg>
						</span>
						<input type="text" name="s" className="search-field" defaultValue="" placeholder="Search"/>
					</label>
				</form>
			</div>
			<nav className="mobile-menu__nav">
				<ul className="menu">
					<li className="menu-item menu-item-has-children">
						<Link to="/">Home</Link>
						
					</li>
					<li className="menu-item menu-item-has-children">
						<a>Men</a>
						<ul className="sub-menu">
							<li className="menu-item menu-item-has-children">
								<a>Ready To Wear</a>
								<ul className="sub-menu">
									<li className="menu-item"><Link to="/men">Tshirts</Link></li>
								</ul>
							</li>
							
						</ul>
					</li>
					<li className="menu-item menu-item-has-children">
						<a >Women</a>
						<ul className="sub-menu">
							<li className="menu-item menu-item-has-children">
								<a >Ready To Wear</a>
								<ul className="sub-menu">
									<li className="menu-item"><Link to="/women">Tshirts</Link></li>
								</ul>
							</li>
							
						</ul>
					</li>
				</ul>
			</nav>
			<hr className="mobile-menu__divider divider"/>
			<div className="mobile-menu__cart">
				<Link to="/cart">
					<span className="mobile-menu__cart-text">Shopping Cart</span>
					<span className="mobile-menu__cart-icon">
						<span className="svg-icon icon-cart size-normal shopping-cart-icon">
							<svg width="24px" height="24px" viewBox="0 0 24 24">
								<g>
									<rect fill="none" width="24" height="24"/>
									<path d="M19,10h-3V7c0-2.206-1.794-4-4-4S8,4.794,8,7v3H5c-0.55,0-0.908,0.441-0.797,0.979l1.879,9.042
									C6.194,20.559,6.736,21,7.286,21h9.429c0.55,0,1.092-0.441,1.203-0.979l1.879-9.042C19.908,10.441,19.55,10,19,10z M10,7 c0-1.103,0.897-2,2-2s2,0.897,2,2v3h-4V7z M16.087,19H7.913l-1.455-7h11.313L16.087,19z"/>
								</g>
							</svg>
						</span>
						<span className="counter cart-counter">{cartItemsCount}</span>
					</span>
				</Link>
			</div>
			<div className="mobile-menu__wishlist">
				<Link to="/wishlist" className="wishlist-contents">
					<span className="mobile-menu__wishlist-text">Wishlist</span>
					<span className="mobile-menu__wishlist-icon">
						<span className="svg-icon icon-heart-o size-normal ">
						<span className="svg-icon icon-heart-o size-normal ">
							<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/></svg>
						</span>
						</span>
						<span className="counter wishlist-counter">{wishlistItemsCount}</span>
					</span>
				</Link>
			</div>
			
			
			<div className="mobile-menu__account-login">
				<Link to="/login">Sign In</Link>
			</div>
			
		</div>
	</div>
    )
}

export default MobileHeader;