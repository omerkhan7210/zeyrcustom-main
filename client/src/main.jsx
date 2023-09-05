import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import "./assets/css/font-awesome.min.css"
import "./assets/css/bootstrap.css"
import "./assets/css/animate.css"
import "./assets/css/style.css";
import "./assets/css/photoswipe.css"
import "./assets/css/select2.min.css";
import "./assets/css/banners.css"
import "./assets/css/cart-drawer.css";
import "./assets/css/featured-collection-2.css";
import "./assets/css/main.css";
import "./assets/css/predictive-search.css";
import "./assets/css/product-card.css";
import "./assets/css/slider.css";
import "./assets/css/slideshow.css";
import "./assets/css/variants.css";
import "./assets/css/video-two.css";
import "./assets/css/cart-page.css";
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary.jsx';
import { Provider } from 'react-redux';
import store from './store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
            <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
)
