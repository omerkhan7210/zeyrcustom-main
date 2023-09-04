// src/reducers/cartReducer.js
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

const uuid = await fetchUUID();
const addToCartAPI = (prod_id, variations, quantity) => {
  // Check if quantity is less than 1 and set it to 1 if true
  if (quantity < 1) {
    quantity = 1;
  }

  const data = { uuid, prod_id, variations, quantity };
  return axios.post(`${hostLink}/cart/add`, data, {
    headers: {
      "Content-Type": "application/json", // Set the correct content type for JSON data
    },
  }); // Replace '/api/cart/add' with your actual API endpoint for adding cart items
};


const removeFromCartAPI = async (id) => {

  return axios.delete(`${hostLink}/cart/delete/${id}/${uuid}`); // Replace '/api/cart/add' with your actual API endpoint for adding cart items
};


const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      addToCartAPI(action.payload.id,action.payload.selectedVariations, action.payload.quantity)
      .then((response) => {
      })
      .catch((error) => {
       
      });
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      removeFromCartAPI(action.payload)
      .then((response) => {
      })
      .catch((error) => {
        
      });
      return state.filter((item) => item.id !== action.payload);
    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    default:
      return state;
  }
};

export default CartReducer;
