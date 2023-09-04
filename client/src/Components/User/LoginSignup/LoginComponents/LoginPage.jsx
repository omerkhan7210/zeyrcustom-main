import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContextC } from "../../../Context/LoginContext";

const LoginPage = () => {
  const {
    email,
    password,
    handleSubmit,
    setPassword,
    setUsername,
    errorMessage,
  } = useContext(LoginContextC);

  return (
    <section
      id="shopify-section-template--14940997681217__main"
      class="shopify-section"
    >
      <link
        href="/cdn/shop/t/300/assets/customer.css"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <style data-shopify="">
        {`
      #shopify-section-template--14940997681217__main .section-padding {
      padding - top: 25px;
      padding-bottom: 25px;
      }
      @media screen and (min-width: 769px) {
      #shopify - section - template--14940997681217__main .section-padding {
      padding - top: 50px;
      padding-bottom: 50px;
      }
      }
      `}
      </style>
      <div class="customer customer--login section-padding page-width text-center">
        {/* <div id="recover">
         <h1 class="section-heading" tabIndex="-1">
            Reset your password
         </h1>
         <div>
            <p>
               We will send you an email to reset your password
            </p>
            <form method="post" action="/en-pk/account/recover" accept-charset="UTF-8" onsubmit="window.Shopify.recaptchaV3.addToken(this, &quot;recover_customer_password&quot;); return false;">
               <input type="hidden" name="form_type" value="recover_customer_password"/>
               <input type="hidden" name="utf8" value="✓"/>
               <div class="input-wrapper">
                  <label for="RecoverEmail" class="visually-hidden">
                  Email
                  </label>
                  <input type="email" defaultValue="" name="email" id="RecoverEmail" autoCorrect="off" autoCapitalize="off" autoComplete="email" placeholder="Email"/>
               </div>
               <div class="cta-container">
                  <button class="btn btn--primary">
                  Submit
                  </button>
                  <br/>
                  <a href="#login" class="link-styled">
                  Cancel
                  </a>
               </div>
            </form>
         </div>
      </div> */}
        <div id="login">
          <h1 class="section-heading" tabIndex="-1">
            Login
          </h1>
          <div>
            <form
              id="customer_login"
              accept-charset="UTF-8"
              onSubmit={handleSubmit}
            >
              {errorMessage && <p>{errorMessage}</p>}

              <input type="hidden" name="form_type" value="customer_login" />
              <input type="hidden" name="utf8" value="✓" />
              <div class="input-wrapper">
                <label for="CustomerEmail" class="visually-hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="customer[email]"
                  id="CustomerEmail"
                  autoComplete="email"
                  autoCorrect="off"
                  autoCapitalize="off"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div class="input-wrapper">
                <label for="CustomerPassword" class="visually-hidden">
                  Password
                </label>
                <input
                  type="password"
                  defaultValue=""
                  name="customer[password]"
                  id="CustomerPassword"
                  autoComplete="current-password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <small>
                <Link to="/forgot-password" class="link-styled">
                  Forgot Your Password?
                </Link>
              </small>
              <div class="cta-container">
                <button class="btn btn--primary">Sign in</button>
                <br />
                <Link to="/signup" class="link-styled">
                  Create An Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
