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
import "./assets/cart-drawer.css";
import "./assets/css/featured-collection-2.css";
import "./assets/predictive-search.css"
import "./assets/product-card.css";
import "./assets/slider.css";
import "./assets/slideshow.css";
import "./assets/variants.css";
import "./assets/video-two.css";
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
