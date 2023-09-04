import React, { useContext, useState } from "react";
import { AddProductAdminContext } from "../../../Context/AddProductContext";
import VariationAddPopup from "./VariationAddPopup";

const ProductVariationsAttributes = () => {
  const { formData, setFormData } = useContext(AddProductAdminContext)
  const [showColor, setShowColor] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [setPrice, setSetPrice] = useState(false);
  const [setStock, setSetStock] = useState(false);
  const handleAddVariation = () => {
    let newVariationData = {
      id: Date.now(), // Assign a unique ID
      attributeValues: {},
      price: setPrice ? 0 : formData.price,
      stock: setStock ? null : 0,
      setPrice: setPrice, // Attach price checkbox state
      setStock: setStock, // Attach stock checkbox state
    };
  
    if (showColor && color.trim() !== "") {
      newVariationData.attributeValues.color = color;
      setColor("");
    }
  
    if (showSize && size.trim() !== "") {
      newVariationData.attributeValues.size = size;
      setSize("");
    }
  
    const updatedVariations = [
      ...formData.variations,
      newVariationData,
    ];
  
    setFormData({
      ...formData,
      variations: updatedVariations,
    });
  
    setShowPopup(false);
    setShopPriceStockPopup(false);
    setSetPrice(false); // Reset price checkbox
    setSetStock(false); // Reset stock checkbox for the newly added variation
  };
  
  const handleRemoveVariation = (index) => {
    setFormData({
      ...formData,
      variations: [
        ...formData.variations.slice(0, index),
        ...formData.variations.slice(index + 1),
      ],
    });
  };

  const [showPopup, setShowPopup] = useState(false);
    
  const handleClosePopup = () => {
    setShowColor(false);
    setShowSize(false)
    setShowPopup(false);
  };

  
  return (
    <div className="d-flex g2 flex-c">
      <div className="d-flex g2 align-center mb2">
        <h3>Attributes</h3>
        <div className="d-flex flex-c g2">
            <label  className="form-control">
            <input
                type="checkbox"
                checked={showColor}
                onChange={() => { 
                  setShowColor(!showColor)
                  setShowPopup(true);
                }}
            />
            Show Color
            </label>
            {showColor && 
              showPopup &&
              <VariationAddPopup show={showColor} value="Color" setVar={setColor} vari={color} handleAddVariation={handleAddVariation} handleClosePopup={handleClosePopup}/>}
        </div>

        <div className="d-flex flex-c g2">
                <label  className="form-control">
                <input
                    type="checkbox"
                    checked={showSize}
                    onChange={() => {
                      setShowSize(!showSize)
                      setShowPopup(true);
                    }}
                />
                Show Size
                </label>
                {showSize && 
                showPopup &&
                <VariationAddPopup show={showSize} value="Size" setVar={setSize} vari={size} handleAddVariation={handleAddVariation} handleClosePopup={handleClosePopup}/>}
        </div>
      </div>

      {formData.variations.length>0 ? (
        <div className="position-r mb4">
        <h3>Variations</h3>
        {formData.variations.map((variation, index) => (
          
          <div key={index} className="d-flex flex-c justify-center g1" style={{border:'1px solid black',padding:"10px",margin:"10px"}}>
            
            <div className="d-flex justify-between align-center">
              
                <p className="m0">
                  Color: {variation.attributeValues.color}
                </p>
                
        
              
                <p className="m0">
                  Size: {variation.attributeValues.size}
                </p>
            
              <button className="button small" onClick={() => handleRemoveVariation(index)}>
                x
              </button>
            </div>

            <p className='input-row '>
                    <label htmlFor="price">Price: </label>
                    <input
                      type="number"
                      id="price"
                      value={variation.price}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          variations: [
                            ...formData.variations.slice(0, index),
                            { ...variation, price: e.target.value },
                            ...formData.variations.slice(index + 1),
                          ],
                        })
                      }
                    />
                  </p>
                  <p className='input-row '>
                <label htmlFor="price">Stock: </label>
              <input
                type="number"
                id="stock"
                value={variation.stock}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    variations: [
                      ...formData.variations.slice(0, index),
                      { ...variation, stock: e.target.value },
                      ...formData.variations.slice(index + 1),
                    ],
                  })
                }
              />
              
                </p>
            <div className="d-flex justify-between align-center">
             
                <p className="m0">
                  Price: ${variation.price}
                </p>
                
                <p className="m0">
                  Stock: {variation.stock}
                </p>
            </div>

            
          </div>
        ))}
        </div>
      ):null}
     
    </div>
  );
};

export default ProductVariationsAttributes;
