import { useContext } from "react";
import DisplayProducts from "./DisplayProducts";
import { ProductFetchContext } from '../Context/ProductFetch'; // Update the path accordingly
import { hostLink } from "../Hostlink/hostlink";

const WomenPage = () => {
  
  const {womenProducts} = useContext(ProductFetchContext);

    return (
      <DisplayProducts products={womenProducts} hostlink={hostLink}/>
    );
}

export default WomenPage;