// src/reducers/wishlistReducer.js// src/reducers/cartReducer.js
import axios from 'axios'
import { hostLink } from '../Hostlink/hostlink';
const initialState = [];

const fetchUUID = async () => {
  try {
    let uuid = localStorage.getItem('userUUID');
    if (!uuid) {
      const response = await axios.get(`${hostLink}/`);
      uuid = response.data.message;
      localStorage.setItem('userUUID', uuid);
    }
    return uuid;
  } catch (error) {
    console.error(error);
  }
};

const addToWishlistAPI = (prod_id) => {
  const data = { uuid, prod_id};
  return axios.post(`${hostLink}/wishlist/add`, data, {
    headers: {
      'Content-Type': 'application/json', 
    }
  }); 
};


const removeFromWishlistAPI = async (id) => {

  return axios.delete(`${hostLink}/wishlist/delete/${id}/${uuid}`); 
};
const uuid = await fetchUUID();
const WishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      addToWishlistAPI(action.payload.id)
      .then((response) => {
      })
      .catch((error) => {
      
      });
      return [...state, action.payload];
    case 'REMOVE_FROM_WISHLIST':
      removeFromWishlistAPI(action.payload)
      .then((response) => {
      })
      .catch((error) => {
        
      });
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default WishlistReducer;
