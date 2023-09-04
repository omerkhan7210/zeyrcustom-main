import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

const HeaderNav = () => {

  return (
    <nav id="primary-menu" className="main-navigation primary-navigation">
							<ul className="menu nav-menu">
								
									<li className="menu-item menu-item-has-children">
										<Link >
									Men <FontAwesomeIcon icon={faChevronDown} />
									</Link>
									<ul className="sub-menu">
										<li className="menu-item menu-item-has-children">
											<Link>Ready To Wear <FontAwesomeIcon icon={faChevronRight} /></Link>
											<ul className="sub-menu">
												<li className="menu-item"> 
												<Link to="/men">
												Tshirts 
												</Link></li>
												
											</ul>
										</li>
										
									</ul>
								</li>
									<li className="menu-item menu-item-has-children">
									<Link >
									Women <FontAwesomeIcon icon={faChevronDown} />
									</Link>
									<ul className="sub-menu">
										<li className="menu-item menu-item-has-children">
											<Link>Ready To Wear <FontAwesomeIcon icon={faChevronRight} /></Link>
											<ul className="sub-menu">
												<li className="menu-item"> 
												<Link to="/women">
              									Tshirts
           										</Link></li>
												
											</ul>
										</li>
										
									</ul>
								</li>
							</ul>
						</nav>
  )
}

export default HeaderNav;
