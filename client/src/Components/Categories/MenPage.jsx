import { useContext } from "react";
import DisplayProducts from "./DisplayProducts";
import { ProductFetchContext } from '../Context/ProductFetch'; // Update the path accordingly

const MenPage = ({hostlink}) => {

  const {menProducts} = useContext(ProductFetchContext);
  
    return (
      <DisplayProducts hostlink={hostlink} products={menProducts}/>
    );
}

export default MenPage;