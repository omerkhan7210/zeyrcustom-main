import React from "react";
import { hostLink as hostlink } from '../../../Hostlink/hostlink';

const SingleProductImage = ({productImg,prodName})=>{


    return (
				<img src={`${hostlink}/uploads/` + productImg} alt={prodName} data-large_image_width="680" data-large_image_height="960"/>
		
									
    )
}
export default SingleProductImage;