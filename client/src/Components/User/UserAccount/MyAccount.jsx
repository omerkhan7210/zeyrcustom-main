import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { LocationInfoContext } from '../../Context/LocationInfo';
import { UserDetailsContext } from '../../Context/UserDetails';

const MyAccount = () => {
 
  const {accountDetails,history} = useContext(UserDetailsContext);
  const {countryName} = useContext(LocationInfoContext);


  const handleLogout = () => {
    // Clear the token from the cookie
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    history('/login'); // Redirect to the login page after logout
  };
 
  

  return (

      <main
        id="MainContent"
        class="content-for-layout"
        role="main"
        tabindex="-1"
      >
        <div
          id="shopify-section-template--14940996665409__main"
          class="shopify-section"
        >
          <link
            href="//amiri.com/cdn/shop/t/300/assets/customer.css?v=134172538491655289751689270880"
            rel="stylesheet"
            type="text/css"
            media="all"
          />
          <style data-shopify="">
            {`
  #shopify-section-template--14940996665409__main .section-padding {
    padding-top: 25px;
    padding-bottom: 25px;
  }

  @media screen and (min-width: 769px) {        
    #shopify-section-template--14940996665409__main .section-padding {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }
  `}
          </style>
          <div class="customer account section-padding page-width">
            <div>
              <h1>Account</h1>
              <a onClick={handleLogout} class="link-styled" style={{cursor:"pointer"}}>
                <svg
                  class="icon icon--account"
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8C10.2091 8 12 6.20914 12 4ZM0.25 15.3333C0.25 13.0962 2.02307 11.25 4.25 11.25H11.75C13.9769 11.25 15.75 13.0962 15.75 15.3333V17C15.75 17.4142 15.4142 17.75 15 17.75H1C0.585786 17.75 0.25 17.4142 0.25 17V15.3333Z"
                    fill="white"
                  ></path>
                </svg>
                Log out
              </a>
            </div>

            <div>
              <div>
                <h2 class="h4">Order history</h2>

                <p>You haven't placed any orders yet.</p>
              </div>

              <div>
                <h2 class="h4">Account details</h2>
                {/* Display user profile details */}
                {accountDetails ? (
                  <div className="profile-details">
                    <p>{accountDetails.fname + " " + accountDetails.lname}</p>
                    {countryName && <p>{countryName}</p>}
                    <Link to="/view-addresses" className="button small">
                      View addresses (2)
                    </Link>
                  </div>
                ) : (
                  <p>Loading account details...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
  );
};

export default MyAccount;
