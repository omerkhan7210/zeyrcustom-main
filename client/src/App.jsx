import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//hostlink
import { hostLink } from './Components/Hostlink/hostlink';
//GLOBAL ELEMENTS
import Header from './Components/HeaderFooter/Header/Header';

import {Header2} from './Components/HeaderFooter/Header/Header2';
import Footer from './Components/HeaderFooter/Footer';
import MobileHeader from './Components/HeaderFooter/Header/MobileHeader';
import SearchModal from './Components/HeaderFooter/Search/SearchModal';
import CartSidebar from './Components/Cart/CartSidebar';
import LoginSidebar from "./Components/User/LoginSignup/LoginComponents/LoginSidebar"
//STATIC PAGES
import HomePage from './Components/Static/HomePage';
import AboutPage from './Components/Static/AboutPage';
import ContactPage from './Components/Static/ContactPage';
//USER LOGIN SIGNUP
import LoginPage from './Components/User/LoginSignup/LoginComponents/LoginPage';
import SignupForm from './Components/User/LoginSignup/SignupForm';
import ForgotPassword from './Components/User/LoginSignup/ForgotPassword/ForgotPassword';
import MyAccount from './Components/User/UserAccount/MyAccount';
import ViewAddress from './Components/User/UserAccount/Addresses/ViewAddress';
// ADMIN PAGES
import AdminLogin from './Components/Admin/AdminLogin';
import AdminRegister from './Components/Admin/AdminRegister';
import AdminDashboard from './Components/Admin/AdminDashboard';
import AddProduct from './Components/Admin/ProductOperations/AddProduct';
import EditProduct from './Components/Admin/ProductOperations/EditProduct';
import ProductList from './Components/Admin/ProductOperations/ProductList';
import Categories from './Components/Admin/ProductOperations/Categories';
//PRODUCT DETAILS
import ProductDetailsPage from './Components/Products/ProductDetails/ProductDetailPage';
import MenPage from './Components/Categories/MenPage';
import WomenPage from './Components/Categories/WomenPage';
//CART WISHLIST CHECKOUT PAGES
import WishlistPage from "./Components/Wishlist/WishlistPage"
import CartPage from './Components/Cart/CartPage/CartPage';
import CheckoutPage from "./Components/Checkout/CheckoutPage"
//CONTEXT IMPORT 
import AddProductContext from "./Components/Context/AddProductContext";
import CartContext from "./Components/Context/CartContext";
import WishlistContext from "./Components/Context/WishlistContext";
import TokenContext from './Components/Context/TokenContext';
import LoginContext from './Components/Context/LoginContext';
import LocationInfo from './Components/Context/LocationInfo'
import UserDetails from './Components/Context/UserDetails'
import ProductFetch from './Components/Context/ProductFetch';
import CategoriesContext from './Components/Context/CategoriesContext';


const App = () => {

const path = "/dashboard";

  return (
    <Router>
      <> 

    <WishlistContext>
      <CartContext>
      <TokenContext>
          <Header2 />
      </TokenContext>
      </CartContext>
    </WishlistContext>
    
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/men" element={ 
          <WishlistContext>
            <CartContext>
              <ProductFetch>
                <MenPage />
              </ProductFetch>
              </CartContext>
          </WishlistContext>
          } />

          <Route path="/women" element={
          <WishlistContext>
            <CartContext>
                <ProductFetch>
                    <WomenPage />
                </ProductFetch>
            </CartContext>
          </WishlistContext>
          } />

          <Route path="/wishlist" element={
          <WishlistContext >
              <WishlistPage/>
          </WishlistContext>
          } />
          
          <Route path="/contact" element={<ContactPage />} />
        
          <Route path={`/products/:productId`} element={
            <CartContext>
              <ProductDetailsPage/>
            </CartContext>
          } />
                 
            <Route  path="/login" element={
              <LoginContext>
                <TokenContext>
                    <LoginPage hostlink = {hostLink}/>
                </TokenContext>
              </LoginContext>
            } />
          
          <Route  path="/forgot-password" element={<ForgotPassword hostlink = {hostLink}/>} />
          <Route  path="/my-zf" element={
            <TokenContext>
            <UserDetails>
              <LocationInfo>
                
                  <MyAccount hostlink = {hostLink}/>
                
              </LocationInfo>
            </UserDetails>
            </TokenContext>
          } />
          <Route  path="/signup" element={<SignupForm hostlink = {hostLink}/>} />
          <Route  path="/view-addresses" element={
              <TokenContext>
                <UserDetails>
                  <ViewAddress hostlink = {hostLink}/>
                </UserDetails>
              </TokenContext>
          } />

          
          <Route exact path="/admin" element={<AdminLogin hostlink = {hostLink}/>} />
          <Route exact path="/admin-register" element={<AdminRegister hostlink = {hostLink}/>} />
          <Route exact path="/dashboard" element={
           
              <AdminDashboard hostlink = {hostLink}/>
           
          } />

          <Route 
          path={`${path}/add-product`} 
          element={
            
               <CategoriesContext>
                <AddProductContext>
                  <AddProduct/>
                </AddProductContext>
              </CategoriesContext>
           
          } />
    
          {/* Add Route for editing a product */}
          <Route 
          path={`${path}/edit-product/:productId`} 
          element={
            <AddProductContext>
              <CategoriesContext>
              <EditProduct />
              </CategoriesContext>
            </AddProductContext>
                    } />

          {/* Add Route for displaying all products with edit and delete buttons */}
          <Route path={`${path}/product-list`} element={<ProductList />} />

          {/* Add Route for categories */}
          <Route path={`${path}/categories`} element={
             <CategoriesContext>
                <Categories />
              </CategoriesContext>
          } />

          {/* CART & CHECKOUT PAGE */}
          <Route path="/cart" element={
           <CartContext>
            <CartPage />
            </CartContext>
          }/>
          <Route path="/checkout" element={
            <LoginContext>
              <CartContext>
                <CheckoutPage />
              </CartContext>
            </LoginContext>
            } />

        </Routes>

        <Footer/>
{/* 
        <LoginContext>
            <LoginSidebar/>
        </LoginContext>
         */}
        
        <ProductFetch>
            <SearchModal />
        </ProductFetch>

{/* 
        <CartContext>
          <CartSidebar />
          <WishlistContext >
              <MobileHeader/>
          </WishlistContext>
        </CartContext> */}

        <div id="pswp" className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
		<div className="pswp__bg"></div>
		<div className="pswp__scroll-wrap">
			<div className="pswp__container">
				<div className="pswp__item"></div>
				<div className="pswp__item"></div>
				<div className="pswp__item"></div>
			</div>

			<div className="pswp__ui pswp__ui--hidden">
				<div className="pswp__top-bar">
					<div className="pswp__counter"></div>
					<button className="pswp__button pswp__button--close" title="Close (Esc)"></button>
					<button className="pswp__button pswp__button--share" title="Share"></button>
					<button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
					<button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

					<div className="pswp__preloader">
						<div className="pswp__preloader__icn">
							<div className="pswp__preloader__cut">
								<div className="pswp__preloader__donut"></div>
							</div>
						</div>
					</div>
				</div>

				<div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
					<div className="pswp__share-tooltip"></div>
				</div>

				<button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
				<button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>

				<div className="pswp__caption">
					<div className="pswp__caption__center"></div>
				</div>
			</div>
		</div>
	      </div>
						
      </>
    </Router>
  );
};

export default App;
