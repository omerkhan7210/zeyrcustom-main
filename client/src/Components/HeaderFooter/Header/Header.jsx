import {React, useContext} from 'react';
import { Link,useLocation } from 'react-router-dom';
import { tokenContextC } from '../../Context/TokenContext';
import MobileHeaderTrigger from './MobileHeaderTrigger';
import HeaderRightItems from './HeaderRightItems';
import HeaderNav from './HeaderNav';


const Header = () => {
  
	const location = useLocation();
	const isHomepage = location.pathname === '/';
    const {isAdminTokenExpired} = useContext(tokenContextC);
	
	  
  return (
    
		<header id="masthead" className={`site-header light  header-v1 transparent-hover ${isHomepage ? 'text-light' : 'text-dark'}`}>
			<div className="header-main header-contents has-center logo-center menu-center">
				<div className=" d-grid grid-3 pi4 p1">
					
					
					<HeaderNav/>
						
					<div className="header-center-items header-items has-menu">
						<div className="site-branding">
							<Link to="/" className="logo">
								<img src="/images/logo.svg" alt="Konte" className="logo-dark"/>
								<img src="/images/logo-light.svg" alt="Konte" className="logo-light"/>
							</Link>
							<p className="site-title"><a href="#" rel="home">Zeyr Fineri</a></p>
						</div>
						
					</div>
					
					<HeaderRightItems/>
				</div>
			  </div>
        

      {!isAdminTokenExpired ? (
        // <div className='position-a dashboard-btn-home'>
        //       <Link to="/dashboard">Admin Dashboard</Link>
        // </div>
		null
      ) : null}


		<MobileHeaderTrigger/>

    </header>

  );
};

export default Header;
