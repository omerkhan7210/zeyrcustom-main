import React,{createContext,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Actions/ProductActions';

export const ProductFetchContext = createContext();

const ProductFetch = ({children}) => {
    const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.products);
  
  const products = useSelector((state) => state.products.products);
  const menProducts = useSelector((state) => state.products.menProducts);
  const womenProducts = useSelector((state) => state.products.womenProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleRetry = ()=>{
    dispatch(fetchProducts());
  }
  
  return (
    <ProductFetchContext.Provider value={{loading,error,menProducts,womenProducts,handleRetry,products}}>
        {children}
    </ProductFetchContext.Provider>
  )
}
export default ProductFetch;
